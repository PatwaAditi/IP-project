/**
 * CineVault - Core Application Logic
 * Discover. Compare. Watch.
 */

// =============================================================================
// 1. APPLICATION STATE & LOCALSTORAGE
// =============================================================================

const STORAGE_KEYS = {
  WATCHLIST: "cinevault_watchlist_v2",
  RECENT: "cinevault_recently_viewed_v2"
};

// State
let watchlist = JSON.parse(localStorage.getItem(STORAGE_KEYS.WATCHLIST)) || [];
let recentlyViewed = JSON.parse(localStorage.getItem(STORAGE_KEYS.RECENT)) || [];

let currentHeroIndex = 0;
let heroTimer = null;
let selectedGenre = "All";
let selectedType = "All";
let selectedSort = "Popular";
let searchQuery = "";
let currentModalTitle = null;

// Featured Hero Spotlight Titles
const HERO_TITLES = [
  getTitleById(1),   // Inception
  getTitleById(2),   // The Dark Knight
  getTitleById(8),   // Oppenheimer
  getTitleById(101), // Breaking Bad
  getTitleById(102), // Stranger Things
  getTitleById(3),   // Interstellar
  getTitleById(62),  // Dune: Part Two
  getTitleById(105)  // The Last of Us
].filter(Boolean);

// Default SVG image fallback for any missing or failed poster
const POSTER_FALLBACK = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='450' viewBox='0 0 300 450'%3E%3Crect width='300' height='450' fill='%2314141B'/%3E%3Ctext x='50%25' y='48%25' text-anchor='middle' fill='%238F9099' font-family='sans-serif' font-size='18' font-weight='bold'%3ECineVault%3C/text%3E%3Ctext x='50%25' y='55%25' text-anchor='middle' fill='%23656670' font-family='sans-serif' font-size='13'%3ENo Poster Available%3C/text%3E%3C/svg%3E";

// =============================================================================
// 2. DATABASE HELPER FUNCTIONS (Requirement 23)
// =============================================================================

function getTitleById(id) {
  const numericId = parseInt(id, 10);
  return cinevaultData.find(item => item.id === numericId) || null;
}

function searchTitles(query) {
  if (!query || typeof query !== "string") return [...cinevaultData];
  const q = query.trim().toLowerCase();
  return cinevaultData.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(q);
    const genreMatch = item.genre.some(g => g.toLowerCase().includes(q));
    const yearMatch = item.year.toString().includes(q);
    const typeMatch = item.type.toLowerCase().includes(q);
    const langMatch = item.language.toLowerCase().includes(q);
    return titleMatch || genreMatch || yearMatch || typeMatch || langMatch;
  });
}

function filterByGenre(titles, genre) {
  if (!genre || genre === "All") return [...titles];
  return titles.filter(item => item.genre.includes(genre));
}

function filterByType(titles, type) {
  if (!type || type === "All") return [...titles];
  return titles.filter(item => item.type.toLowerCase() === type.toLowerCase());
}

function sortTitles(titles, sortOption) {
  const list = [...titles];
  switch (sortOption) {
    case "Highest Rated":
      return list.sort((a, b) => b.rating - a.rating);
    case "Newest":
      return list.sort((a, b) => b.year - a.year);
    case "Oldest":
      return list.sort((a, b) => a.year - b.year);
    case "A-Z":
      return list.sort((a, b) => a.title.localeCompare(b.title));
    case "Popular":
    default:
      return list.sort((a, b) => {
        const scoreA = a.rating * 2 + (a.year >= 2015 ? 2 : 0) + (a.type === "Series" ? 1 : 0);
        const scoreB = b.rating * 2 + (b.year >= 2015 ? 2 : 0) + (b.type === "Series" ? 1 : 0);
        return scoreB - scoreA;
      });
  }
}

// Watchlist Helpers
function getMyList() {
  return watchlist.map(id => getTitleById(id)).filter(Boolean);
}

function addToMyList(id) {
  const numericId = parseInt(id, 10);
  if (!watchlist.includes(numericId)) {
    watchlist.unshift(numericId);
    saveWatchlist();
    showToast("Added to My List", "✓");
    updateWatchlistUI();
    updateBadges();
    return true;
  }
  return false;
}

function removeFromMyList(id) {
  const numericId = parseInt(id, 10);
  if (watchlist.includes(numericId)) {
    watchlist = watchlist.filter(item => item !== numericId);
    saveWatchlist();
    showToast("Removed from My List", "✕");
    updateWatchlistUI();
    updateBadges();
    return true;
  }
  return false;
}

function toggleMyList(id) {
  const numericId = parseInt(id, 10);
  if (watchlist.includes(numericId)) {
    removeFromMyList(numericId);
  } else {
    addToMyList(numericId);
  }
}

function saveWatchlist() {
  localStorage.setItem(STORAGE_KEYS.WATCHLIST, JSON.stringify(watchlist));
}

// Recently Viewed Helpers (Requirement 11)
function getRecentlyViewed() {
  return recentlyViewed.map(id => getTitleById(id)).filter(Boolean);
}

function addRecentlyViewed(id) {
  const numericId = parseInt(id, 10);
  // Remove if already exists, then prepend to make it most recent
  recentlyViewed = recentlyViewed.filter(item => item !== numericId);
  recentlyViewed.unshift(numericId);
  // Cap at 15 items
  if (recentlyViewed.length > 15) {
    recentlyViewed.pop();
  }
  localStorage.setItem(STORAGE_KEYS.RECENT, JSON.stringify(recentlyViewed));
  renderRecentlyViewedRow();
}

function removeRecentlyViewed(id) {
  const numericId = parseInt(id, 10);
  recentlyViewed = recentlyViewed.filter(item => item !== numericId);
  localStorage.setItem(STORAGE_KEYS.RECENT, JSON.stringify(recentlyViewed));
  showToast("Removed from Recently Viewed", "✕");
  renderRecentlyViewedRow();
}

function clearRecentlyViewed() {
  recentlyViewed = [];
  localStorage.setItem(STORAGE_KEYS.RECENT, JSON.stringify(recentlyViewed));
  showToast("Cleared recently viewed history", "✓");
  renderRecentlyViewedRow();
}

// =============================================================================
// 3. PLATFORM ICONS & "WHERE TO WATCH" RENDERER (Requirement 9)
// =============================================================================

function getPlatformIcon(platformName) {
  const name = platformName.toLowerCase();
  
  if (name.includes("netflix")) {
    return `<svg viewBox="0 0 24 24" width="20" height="20"><path fill="#E50914" d="M5.398 0v24c1.848-.54 3.737-1.127 5.672-1.74V0H5.398zm7.532 0v21.57c1.92-.614 3.823-1.229 5.672-1.846V0H12.93z"/><polygon fill="#B20710" points="11.07 0 11.07 22.26 12.93 21.67 12.93 0"/></svg>`;
  }
  if (name.includes("prime") || name.includes("amazon")) {
    return `<svg viewBox="0 0 24 24" width="20" height="20"><path fill="#00A8E1" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-3.14 0-5.74-1.9-6.66-4.6.21-.15.48-.25.75-.25.4 0 .78.18 1.03.49.62 1.95 2.5 3.36 4.88 3.36 2.06 0 3.77-1.04 4.54-2.58l1.45.73C17.84 15.65 15.62 16.5 13 16.5zm3.78-7.85l-1.06 1.06a4.5 4.5 0 0 0-6.36 0l-1.06-1.06a6 6 0 0 1 8.48 0z"/></svg>`;
  }
  if (name.includes("hotstar") || name.includes("disney")) {
    return `<svg viewBox="0 0 24 24" width="20" height="20"><path fill="#1E5CFF" d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>`;
  }
  if (name.includes("apple")) {
    return `<svg viewBox="0 0 24 24" width="20" height="20"><path fill="#F5F5F7" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.16c.65-.8 1.1-1.92.97-3.04-.96.04-2.11.64-2.79 1.44-.6.69-1.12 1.83-.98 2.93 1.07.08 2.16-.54 2.8-1.33z"/></svg>`;
  }
  if (name.includes("sony") || name.includes("sonyliv")) {
    return `<svg viewBox="0 0 24 24" width="20" height="20"><rect width="24" height="24" rx="4" fill="#000"/><path fill="#FF4D4D" d="M6 6h12v12H6z"/><path fill="#FFF" d="M9 9h6v6H9z"/></svg>`;
  }
  if (name.includes("zee")) {
    return `<svg viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="10" fill="#7C25E2"/><path fill="#FFF" d="M8 8h8l-8 8h8"/></svg>`;
  }
  if (name.includes("youtube")) {
    return `<svg viewBox="0 0 24 24" width="20" height="20"><path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;
  }
  
  // Default Stream Icon
  return `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#E50914" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;
}

function renderWhereToWatch(platforms) {
  if (!platforms || platforms.length === 0) {
    return `
      <div style="padding: 16px; color: var(--text-secondary); font-size: 13px;">
        Direct streaming platforms are not currently indexed for this region. Check major official providers.
      </div>
    `;
  }

  return platforms.map(platform => `
    <div class="platform-card">
      <div class="platform-info">
        <div class="platform-icon-wrap" aria-hidden="true">
          ${getPlatformIcon(platform.name)}
        </div>
        <span class="platform-name">${escapeHtml(platform.name)}</span>
      </div>
      <a
        href="${platform.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="platform-watch-link"
        title="Open ${escapeHtml(platform.name)} in a new tab"
      >
        Watch ↗
      </a>
    </div>
  `).join("");
}

// =============================================================================
// 4. MOVIE CARD RENDERER (Requirement 13)
// =============================================================================

function renderMovieCard(titleObj, options = {}) {
  const {
    ranked = false,
    rank = 1,
    landscape = false,
    recent = false
  } = options;

  const card = document.createElement("article");
  let cardClasses = ["movie-card"];
  if (ranked) cardClasses.push("ranked-card");
  if (landscape) cardClasses.push("landscape-card");
  if (recent) cardClasses.push("recent-card");
  card.className = cardClasses.join(" ");

  const isInWatchlist = watchlist.includes(titleObj.id);
  const displayImage = landscape ? (titleObj.backdrop || titleObj.poster) : titleObj.poster;
  const genresStr = titleObj.genre.slice(0, 3).join(" • ");

  card.innerHTML = `
    ${ranked ? `<span class="rank-number-badge">#${rank}</span>` : ""}
    
    <span class="card-type-badge">${titleObj.type}</span>
    
    ${recent ? `
      <button class="recent-remove-btn" data-id="${titleObj.id}" title="Remove from Recently Viewed" aria-label="Remove ${escapeHtml(titleObj.title)} from recently viewed">
        ✕
      </button>
    ` : `
      <button class="card-list-btn ${isInWatchlist ? 'in-list' : ''}" data-id="${titleObj.id}" title="${isInWatchlist ? 'Remove from My List' : 'Add to My List'}" aria-label="Save ${escapeHtml(titleObj.title)} to My List">
        ${isInWatchlist ? '✓' : '+'}
      </button>
    `}

    <div class="card-poster-wrap">
      <img
        class="card-poster"
        src="${displayImage}"
        alt="${escapeHtml(titleObj.title)} poster"
        loading="lazy"
        decoding="async"
        onerror="this.onerror=null;this.src='${POSTER_FALLBACK}'"
      >
      <div class="card-overlay">
        <div class="overlay-details-btn">
          <span>ⓘ</span>
          <span>View Details</span>
        </div>
      </div>
    </div>

    <div class="card-info">
      <h3 class="card-title" title="${escapeHtml(titleObj.title)}">${escapeHtml(titleObj.title)}</h3>
      <div class="card-meta">
        <span>${titleObj.year}</span>
        <span class="card-rating">★ ${titleObj.rating}</span>
      </div>
      <div class="card-genres" title="${genresStr}">${genresStr}</div>
    </div>
  `;

  // Click card to open modal & add to recently viewed
  card.addEventListener("click", (e) => {
    // If user clicked on a specific action button (list or remove), don't open modal
    if (e.target.closest(".card-list-btn") || e.target.closest(".recent-remove-btn")) {
      return;
    }
    openDetailsModal(titleObj);
  });

  // Watchlist toggle button
  const listBtn = card.querySelector(".card-list-btn");
  if (listBtn) {
    listBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMyList(titleObj.id);
    });
  }

  // Remove from recent button
  const removeBtn = card.querySelector(".recent-remove-btn");
  if (removeBtn) {
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      removeRecentlyViewed(titleObj.id);
    });
  }

  return card;
}

// =============================================================================
// 5. DETAILS MODAL (Requirements 8, 9, 11)
// =============================================================================

const detailsModal = document.getElementById("detailsModal");
const modalBanner = document.getElementById("modalBanner");
const modalPoster = document.getElementById("modalPoster");
const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");
const modalLang = document.getElementById("modalLang");
const modalRating = document.getElementById("modalRating");
const modalYear = document.getElementById("modalYear");
const modalDuration = document.getElementById("modalDuration");
const modalGenres = document.getElementById("modalGenres");
const modalDescription = document.getElementById("modalDescription");
const modalListBtn = document.getElementById("modalListBtn");
const modalListIcon = document.getElementById("modalListIcon");
const modalListText = document.getElementById("modalListText");
const modalPlatformsGrid = document.getElementById("modalPlatformsGrid");
const modalCloseBtn = document.getElementById("modalCloseBtn");

function renderDetailsModal(titleObj) {
  currentModalTitle = titleObj;

  // Add to recently viewed on modal view
  addRecentlyViewed(titleObj.id);

  // Backdrop Banner
  const bannerUrl = titleObj.backdrop || titleObj.poster;
  modalBanner.style.backgroundImage = `url("${bannerUrl}")`;

  // Poster
  modalPoster.src = titleObj.poster;
  modalPoster.alt = `${titleObj.title} poster`;
  modalPoster.onerror = function() {
    this.onerror = null;
    this.src = POSTER_FALLBACK;
  };

  // Text Metadata
  modalTitle.textContent = titleObj.title;
  modalType.textContent = titleObj.type;
  modalLang.textContent = titleObj.language || "English";
  modalRating.textContent = `★ ${titleObj.rating}`;
  modalYear.textContent = titleObj.year;

  if (titleObj.type === "Series") {
    modalDuration.textContent = `${titleObj.seasons || 1} Season${(titleObj.seasons || 1) > 1 ? 's' : ''} (${titleObj.episodes || 10} eps)`;
  } else {
    modalDuration.textContent = titleObj.duration || "N/A";
  }

  // Genre pills
  modalGenres.innerHTML = titleObj.genre.map(g => `<span class="modal-genre-tag">${escapeHtml(g)}</span>`).join("");

  // Description
  modalDescription.textContent = titleObj.description;

  // Update List Button status
  updateModalListButton();

  // Platforms (Where to Watch)
  modalPlatformsGrid.innerHTML = renderWhereToWatch(titleObj.platforms);

  // Show Modal
  detailsModal.classList.add("show");
  detailsModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function updateModalListButton() {
  if (!currentModalTitle) return;
  const inList = watchlist.includes(currentModalTitle.id);
  modalListIcon.textContent = inList ? "✓" : "+";
  modalListText.textContent = inList ? "In My List" : "Add to My List";
  if (inList) {
    modalListBtn.classList.add("in-list");
  } else {
    modalListBtn.classList.remove("in-list");
  }
}

function openDetailsModal(titleObj) {
  renderDetailsModal(titleObj);
}

function closeDetailsModal() {
  detailsModal.classList.remove("show");
  detailsModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  currentModalTitle = null;
}

modalCloseBtn.addEventListener("click", closeDetailsModal);

detailsModal.addEventListener("click", (e) => {
  if (e.target === detailsModal) {
    closeDetailsModal();
  }
});

modalListBtn.addEventListener("click", () => {
  if (currentModalTitle) {
    toggleMyList(currentModalTitle.id);
    updateModalListButton();
  }
});

// =============================================================================
// 6. HERO SECTION CAROUSEL
// =============================================================================

const heroSection = document.getElementById("hero");
const heroTitle = document.getElementById("heroTitle");
const heroType = document.getElementById("heroType");
const heroRating = document.getElementById("heroRating");
const heroYear = document.getElementById("heroYear");
const heroDuration = document.getElementById("heroDuration");
const heroLanguage = document.getElementById("heroLanguage");
const heroGenres = document.getElementById("heroGenres");
const heroDescription = document.getElementById("heroDescription");
const heroIndicators = document.getElementById("heroIndicators");
const heroPrevBtn = document.getElementById("heroPrevBtn");
const heroNextBtn = document.getElementById("heroNextBtn");
const heroDetailsBtn = document.getElementById("heroDetailsBtn");
const heroListBtn = document.getElementById("heroListBtn");
const heroListIcon = document.getElementById("heroListIcon");
const heroListText = document.getElementById("heroListText");

function updateHero() {
  if (HERO_TITLES.length === 0) return;
  const title = HERO_TITLES[currentHeroIndex];

  // Set background
  const backdropUrl = title.backdrop || title.poster;
  heroSection.style.backgroundImage = `url("${backdropUrl}")`;

  // Metadata
  heroTitle.textContent = title.title;
  heroType.textContent = title.type;
  heroRating.textContent = `★ ${title.rating}`;
  heroYear.textContent = title.year;
  heroDuration.textContent = title.duration || (title.seasons ? `${title.seasons} Seasons` : "");
  heroLanguage.textContent = title.language || "English";
  heroDescription.textContent = title.description;

  // Genre pills
  heroGenres.innerHTML = title.genre.slice(0, 3).map(g => `<span class="hero-genre-tag">${escapeHtml(g)}</span>`).join("");

  // List button state
  const inList = watchlist.includes(title.id);
  heroListIcon.textContent = inList ? "✓" : "+";
  heroListText.textContent = inList ? "In My List" : "Add to My List";
  if (inList) {
    heroListBtn.classList.add("in-list");
  } else {
    heroListBtn.classList.remove("in-list");
  }

  // Indicators
  renderHeroIndicators();
}

function renderHeroIndicators() {
  heroIndicators.innerHTML = "";
  HERO_TITLES.forEach((_, idx) => {
    const dot = document.createElement("button");
    dot.className = `hero-dot ${idx === currentHeroIndex ? "active" : ""}`;
    dot.setAttribute("aria-label", `Slide ${idx + 1}`);
    dot.addEventListener("click", () => {
      currentHeroIndex = idx;
      updateHero();
      resetHeroTimer();
    });
    heroIndicators.appendChild(dot);
  });
}

function nextHero() {
  currentHeroIndex = (currentHeroIndex + 1) % HERO_TITLES.length;
  updateHero();
}

function prevHero() {
  currentHeroIndex = (currentHeroIndex - 1 + HERO_TITLES.length) % HERO_TITLES.length;
  updateHero();
}

function startHeroTimer() {
  stopHeroTimer();
  heroTimer = setInterval(nextHero, 7000);
}

function stopHeroTimer() {
  if (heroTimer) {
    clearInterval(heroTimer);
    heroTimer = null;
  }
}

function resetHeroTimer() {
  startHeroTimer();
}

heroPrevBtn.addEventListener("click", () => {
  prevHero();
  resetHeroTimer();
});

heroNextBtn.addEventListener("click", () => {
  nextHero();
  resetHeroTimer();
});

heroDetailsBtn.addEventListener("click", () => {
  openDetailsModal(HERO_TITLES[currentHeroIndex]);
});

heroListBtn.addEventListener("click", () => {
  toggleMyList(HERO_TITLES[currentHeroIndex].id);
  updateHero();
});

// Pause hero on hover
heroSection.addEventListener("mouseenter", stopHeroTimer);
heroSection.addEventListener("mouseleave", startHeroTimer);

// =============================================================================
// 7. SECTION RENDERERS
// =============================================================================

// 1. Trending Now Row (Ranked #1 to #10)
function renderTrendingRow() {
  const container = document.getElementById("trendingRow");
  container.innerHTML = "";

  // Pick top trending combination of movies & series
  const trending = [
    getTitleById(1),   // Inception
    getTitleById(101), // Breaking Bad
    getTitleById(2),   // The Dark Knight
    getTitleById(8),   // Oppenheimer
    getTitleById(102), // Stranger Things
    getTitleById(5),   // Dune
    getTitleById(105), // The Last of Us
    getTitleById(4),   // Parasite
    getTitleById(104), // The Boys
    getTitleById(6)    // Avengers: Endgame
  ].filter(Boolean);

  trending.forEach((item, index) => {
    container.appendChild(renderMovieCard(item, { ranked: true, rank: index + 1 }));
  });
}

// 2. Recently Viewed Row (Requirement 11)
function renderRecentlyViewedRow() {
  const container = document.getElementById("recentRow");
  const actions = document.getElementById("recentActions");
  container.innerHTML = "";

  const recentItems = getRecentlyViewed();

  if (recentItems.length === 0) {
    actions.style.display = "none";
    container.innerHTML = `
      <div class="empty-state" style="padding: 36px 20px;">
        <div class="empty-icon" style="font-size: 32px; margin-bottom: 8px;">🕒</div>
        <h4 class="empty-title">No Recently Viewed Titles</h4>
        <p class="empty-desc" style="font-size: 13px; margin-bottom: 12px;">Titles you click to inspect will appear here for fast recall.</p>
        <a href="#exploreSection" class="empty-btn" style="font-size: 12.5px; padding: 7px 16px;">Browse All Titles</a>
      </div>
    `;
    return;
  }

  actions.style.display = "flex";
  recentItems.forEach(item => {
    container.appendChild(renderMovieCard(item, { recent: true }));
  });
}

// 3. Top Rated Row
function renderTopRatedRow() {
  const container = document.getElementById("topRatedRow");
  container.innerHTML = "";

  const topRated = sortTitles([...cinevaultData], "Highest Rated").slice(0, 12);
  topRated.forEach(item => {
    container.appendChild(renderMovieCard(item));
  });
}

// 4. Popular Series Row (Landscape format)
function renderPopularSeriesRow() {
  const container = document.getElementById("popularSeriesRow");
  container.innerHTML = "";

  const popularSeries = sortTitles([...series], "Popular").slice(0, 10);
  popularSeries.forEach(item => {
    container.appendChild(renderMovieCard(item, { landscape: true }));
  });
}

// 5. My List Section
function renderWatchlistGrid() {
  const container = document.getElementById("watchlistGrid");
  const clearBtn = document.getElementById("clearWatchlistBtn");
  container.innerHTML = "";

  const savedTitles = getMyList();

  if (savedTitles.length === 0) {
    clearBtn.style.display = "none";
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔖</div>
        <h3 class="empty-title">Your List is Empty</h3>
        <p class="empty-desc">You haven't saved any movies or series to your watchlist yet. Click the <strong>+</strong> button on any title to bookmark it for later.</p>
        <a href="#exploreSection" class="btn-primary" style="font-size: 13px; padding: 10px 20px;">Discover Titles</a>
      </div>
    `;
    return;
  }

  clearBtn.style.display = "inline-block";
  savedTitles.forEach(item => {
    container.appendChild(renderMovieCard(item));
  });
}

// 6. Discover & Explore Grid (Search + Filters + Sorting)
function renderExploreGrid() {
  const grid = document.getElementById("exploreGrid");
  const resultsCount = document.getElementById("resultsCount");
  const resetBtn = document.getElementById("resetFiltersBtn");
  grid.innerHTML = "";

  // 1. Search Query
  let filtered = searchQuery ? searchTitles(searchQuery) : [...cinevaultData];

  // 2. Type Filter (All / Movie / Series)
  filtered = filterByType(filtered, selectedType);

  // 3. Genre Filter
  filtered = filterByGenre(filtered, selectedGenre);

  // 4. Sorting
  filtered = sortTitles(filtered, selectedSort);

  // Update counts & reset visibility
  const isFiltering = selectedGenre !== "All" || selectedType !== "All" || searchQuery.length > 0 || selectedSort !== "Popular";
  resetBtn.style.display = isFiltering ? "inline-block" : "none";
  resultsCount.textContent = `Showing ${filtered.length} title${filtered.length === 1 ? '' : 's'}`;

  // Empty state
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3 class="empty-title">No Titles Found</h3>
        <p class="empty-desc">We couldn't find any titles matching "${escapeHtml(searchQuery || selectedGenre)}". Try adjusting your genre or search keywords.</p>
        <button class="empty-btn" id="emptyResetBtn">Reset All Filters</button>
      </div>
    `;
    const emptyResetBtn = document.getElementById("emptyResetBtn");
    if (emptyResetBtn) {
      emptyResetBtn.addEventListener("click", resetFilters);
    }
    return;
  }

  // Render cards
  filtered.forEach(item => {
    grid.appendChild(renderMovieCard(item));
  });
}

// =============================================================================
// 8. FILTER & SEARCH HANDLERS
// =============================================================================

function renderGenrePills() {
  const pillsWrap = document.getElementById("genrePillsWrap");
  pillsWrap.innerHTML = "";

  ALL_GENRES.forEach(genre => {
    const btn = document.createElement("button");
    btn.className = `genre-pill-btn ${genre === selectedGenre ? "active" : ""}`;
    btn.textContent = genre;
    btn.setAttribute("role", "button");
    btn.addEventListener("click", () => {
      selectedGenre = genre;
      renderGenrePills();
      renderExploreGrid();
    });
    pillsWrap.appendChild(btn);
  });
}

function setupFilterEvents() {
  // Type segmented switch
  document.querySelectorAll(".type-tab-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".type-tab-btn").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      selectedType = this.dataset.type;
      renderExploreGrid();
    });
  });

  // Sorting
  const sortSelect = document.getElementById("sortSelect");
  sortSelect.addEventListener("change", function() {
    selectedSort = this.value;
    renderExploreGrid();
  });

  // Search input
  const searchInput = document.getElementById("searchInput");
  const searchClearBtn = document.getElementById("searchClearBtn");

  searchInput.addEventListener("input", function() {
    searchQuery = this.value.trim();
    if (searchQuery.length > 0) {
      searchClearBtn.classList.add("visible");
      // Scroll smoothly to explore section if not there
      const exploreElem = document.getElementById("exploreSection");
      const rect = exploreElem.getBoundingClientRect();
      if (rect.top > window.innerHeight) {
        exploreElem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      searchClearBtn.classList.remove("visible");
    }
    renderExploreGrid();
  });

  searchClearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    searchClearBtn.classList.remove("visible");
    renderExploreGrid();
    searchInput.focus();
  });

  // Reset Filters button
  document.getElementById("resetFiltersBtn").addEventListener("click", resetFilters);

  // Clear watchlist button
  document.getElementById("clearWatchlistBtn").addEventListener("click", () => {
    if (confirm("Are you sure you want to clear your saved list?")) {
      watchlist = [];
      saveWatchlist();
      showToast("Watchlist cleared", "✕");
      updateWatchlistUI();
      updateBadges();
    }
  });

  // Clear recent button
  document.getElementById("clearRecentBtn").addEventListener("click", () => {
    clearRecentlyViewed();
  });
}

function resetFilters() {
  selectedGenre = "All";
  selectedType = "All";
  selectedSort = "Popular";
  searchQuery = "";

  document.getElementById("searchInput").value = "";
  document.getElementById("searchClearBtn").classList.remove("visible");
  document.getElementById("sortSelect").value = "Popular";

  document.querySelectorAll(".type-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.type === "All");
  });

  renderGenrePills();
  renderExploreGrid();
  showToast("Filters reset to default", "✓");
}

// =============================================================================
// 9. ROW SCROLL CONTROLS
// =============================================================================

function setupRowScrollControls() {
  document.querySelectorAll(".row-nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.scroll;
      const direction = parseInt(btn.dataset.direction, 10);
      const row = document.getElementById(targetId);
      if (row) {
        const scrollDistance = (row.clientWidth * 0.75) * direction;
        row.scrollBy({ left: scrollDistance, behavior: "smooth" });
      }
    });
  });
}

// =============================================================================
// 10. PROFILE MODAL & USER DATA RESET
// =============================================================================

const profileModal = document.getElementById("profileModal");
const profileBtn = document.getElementById("profileBtn");
const profileCloseBtn = document.getElementById("profileCloseBtn");
const footerProfileLink = document.getElementById("footerProfileLink");
const resetUserDataBtn = document.getElementById("resetUserDataBtn");

function openProfileModal() {
  document.getElementById("statListCount").textContent = watchlist.length;
  document.getElementById("statRecentCount").textContent = recentlyViewed.length;
  profileModal.classList.add("show");
  profileModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProfileModal() {
  profileModal.classList.remove("show");
  profileModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

profileBtn.addEventListener("click", openProfileModal);
profileCloseBtn.addEventListener("click", closeProfileModal);
if (footerProfileLink) {
  footerProfileLink.addEventListener("click", openProfileModal);
}

profileModal.addEventListener("click", (e) => {
  if (e.target === profileModal) {
    closeProfileModal();
  }
});

resetUserDataBtn.addEventListener("click", () => {
  if (confirm("Reset all saved data including watchlist and recently viewed?")) {
    watchlist = [];
    recentlyViewed = [];
    localStorage.removeItem(STORAGE_KEYS.WATCHLIST);
    localStorage.removeItem(STORAGE_KEYS.RECENT);
    updateWatchlistUI();
    renderRecentlyViewedRow();
    updateBadges();
    closeProfileModal();
    showToast("All local data reset", "✓");
  }
});

// =============================================================================
// 11. TOAST NOTIFICATION SYSTEM (Requirement 21)
// =============================================================================

function showToast(message, icon = "✓") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Automatically dismiss after 2400ms
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 2400);
}

// =============================================================================
// 12. NAVIGATION & SHORTCUTS (Requirements 16, 19)
// =============================================================================

function updateBadges() {
  const badge = document.getElementById("navListBadge");
  if (badge) {
    badge.textContent = watchlist.length;
    badge.style.display = watchlist.length > 0 ? "inline-flex" : "none";
  }
}

function updateWatchlistUI() {
  renderWatchlistGrid();
  // Re-render other sections so list checkmarks update
  renderTrendingRow();
  renderTopRatedRow();
  renderExploreGrid();
  if (currentHeroIndex >= 0) {
    updateHero();
  }
}

function setupShortcuts() {
  document.addEventListener("keydown", (e) => {
    const isInput = e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT";

    // Escape closes modals
    if (e.key === "Escape") {
      closeDetailsModal();
      closeProfileModal();
      return;
    }

    // '/' focuses search
    if (e.key === "/" && !isInput) {
      e.preventDefault();
      const searchInput = document.getElementById("searchInput");
      searchInput.focus();
      return;
    }

    // Arrow Left / Right navigate hero carousel
    if (!isInput) {
      if (e.key === "ArrowLeft") {
        prevHero();
        resetHeroTimer();
      } else if (e.key === "ArrowRight") {
        nextHero();
        resetHeroTimer();
      }
    }
  });
}

function setupNavLinks() {
  // Mobile Links
  const mobileSearchLink = document.getElementById("mobileSearchLink");
  if (mobileSearchLink) {
    mobileSearchLink.addEventListener("click", () => {
      document.getElementById("searchInput").focus();
    });
  }

  const navMovies = document.getElementById("navMovies");
  if (navMovies) {
    navMovies.addEventListener("click", () => {
      selectedType = "Movie";
      document.querySelectorAll(".type-tab-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.type === "Movie");
      });
      renderExploreGrid();
    });
  }

  const navSeries = document.getElementById("navSeries");
  if (navSeries) {
    navSeries.addEventListener("click", () => {
      selectedType = "Series";
      document.querySelectorAll(".type-tab-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.type === "Series");
      });
      renderExploreGrid();
    });
  }

  // Active state highlighting on scroll
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-item");

  window.addEventListener("scroll", () => {
    let currentId = "hero";
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        currentId = sec.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href && href.includes(currentId)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
}

// Helper: Escape HTML to prevent XSS
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// =============================================================================
// 13. APP INITIALIZATION
// =============================================================================

function initCineVault() {
  // Render Hero
  updateHero();
  startHeroTimer();

  // Render Horizontal Rows
  renderTrendingRow();
  renderRecentlyViewedRow();
  renderTopRatedRow();
  renderPopularSeriesRow();

  // Render Discover System
  renderGenrePills();
  renderExploreGrid();

  // Render Watchlist
  renderWatchlistGrid();

  // Setup Event Listeners & Shortcuts
  setupFilterEvents();
  setupRowScrollControls();
  setupShortcuts();
  setupNavLinks();

  // Update initial badges
  updateBadges();

  console.log("CineVault initialized with", cinevaultData.length, "titles!");
}

// Start application when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCineVault);
} else {
  initCineVault();
}
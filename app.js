const movies = [

    {
        id: 1,
        title: "Inception",
        genre: "Sci-Fi",
        year: 2010,
        duration: "2h 28m",
        rating: 8.8,
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
        description:
            "A skilled thief who steals secrets through dream-sharing technology is given the task of planting an idea into the mind of a target."
    },

    {
        id: 2,
        title: "The Dark Knight",
        genre: "Action",
        year: 2008,
        duration: "2h 32m",
        rating: 9.0,
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Ew3X.jpg",
        description:
            "Batman faces a criminal mastermind who plunges Gotham City into chaos while testing the limits of justice."
    },

    {
        id: 3,
        title: "Interstellar",
        genre: "Sci-Fi",
        year: 2014,
        duration: "2h 49m",
        rating: 8.7,
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        description:
            "A group of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },

    {
        id: 4,
        title: "Parasite",
        genre: "Thriller",
        year: 2019,
        duration: "2h 12m",
        rating: 8.5,
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/ApiBzeaaXG5XNYEoZbJw7Y7bqY.jpg",
        description:
            "A struggling family slowly enters the life of a wealthy household, creating consequences neither family expects."
    },

    {
        id: 5,
        title: "Dune",
        genre: "Sci-Fi",
        year: 2021,
        duration: "2h 35m",
        rating: 8.0,
        poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
        description:
            "Paul Atreides travels to a dangerous desert planet where his family becomes involved in a struggle for control."
    },

    {
        id: 6,
        title: "Avengers: Endgame",
        genre: "Action",
        year: 2019,
        duration: "3h 1m",
        rating: 8.4,
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/7RyHsO4yDXtB6Z9v7jD5x7LqV7Y.jpg",
        description:
            "The remaining Avengers attempt to reverse the devastating events that changed the universe."
    },

    {
        id: 7,
        title: "Joker",
        genre: "Drama",
        year: 2019,
        duration: "2h 2m",
        rating: 8.4,
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        description:
            "A troubled comedian gradually becomes a symbol of chaos in a city that has abandoned him."
    },

    {
        id: 8,
        title: "Oppenheimer",
        genre: "Drama",
        year: 2023,
        duration: "3h",
        rating: 8.6,
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        description:
            "The story of J. Robert Oppenheimer and the scientific race that led to the development of the atomic bomb."
    },

    {
        id: 9,
        title: "Spider-Man: No Way Home",
        genre: "Action",
        year: 2021,
        duration: "2h 28m",
        rating: 8.2,
        poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
        description:
            "Spider-Man's identity is revealed, causing him to ask for help and opening the door to unexpected threats."
    },

    {
        id: 10,
        title: "Whiplash",
        genre: "Drama",
        year: 2014,
        duration: "1h 47m",
        rating: 8.5,
        poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeNOVIE.jpg",
        backdrop: "https://image.tmdb.org/t/p/original/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg",
        description:
            "An ambitious young drummer enters an intense relationship with a demanding music instructor."
    }
];


const continueWatching = [
    {
        movie: movies[2],
        progress: 68
    },
    {
        movie: movies[5],
        progress: 42
    },
    {
        movie: movies[8],
        progress: 81
    },
    {
        movie: movies[9],
        progress: 35
    }
];


const movieGrid = document.getElementById("movieGrid");
const topRatedRow = document.getElementById("topRatedRow");
const continueRow = document.getElementById("continueRow");
const watchlistGrid = document.getElementById("watchlistGrid");

const searchInput = document.getElementById("searchInput");

const movieModal = document.getElementById("movieModal");
const loginModal = document.getElementById("loginModal");

const modalPoster = document.getElementById("modalPoster");
const modalTitle = document.getElementById("modalTitle");
const modalYear = document.getElementById("modalYear");
const modalDuration = document.getElementById("modalDuration");
const modalRating = document.getElementById("modalRating");
const modalDescription = document.getElementById("modalDescription");

let selectedMovie = null;

let watchlist =
    JSON.parse(localStorage.getItem("cinevaultWatchlist")) || [];


/* MOVIE CARD */

function createMovieCard(movie, progress = null) {

    const card = document.createElement("div");

    card.className = "movie-card";

    card.innerHTML = `

        <button class="list-icon" title="Add to My List">
            ${watchlist.includes(movie.id) ? "✓" : "+"}
        </button>

        <img
            class="poster"
            src="${movie.poster}"
            alt="${movie.title}"
            loading="lazy"
        >

        <div class="card-overlay">

            <div class="play-circle">
                ▶
            </div>

        </div>

        <div class="card-info">

            <h3 class="card-title">
                ${movie.title}
            </h3>

            <div class="card-meta">

                <span>
                    ${movie.year} · ${movie.genre}
                </span>

                <span class="card-rating">
                    ★ ${movie.rating}
                </span>

            </div>

        </div>

        ${
            progress !== null
                ? `
                    <div class="progress-container">
                        <div
                            class="progress"
                            style="width:${progress}%"
                        ></div>
                    </div>
                `
                : ""
        }

    `;


    card.addEventListener("click", function(e) {

        if (e.target.closest(".list-icon")) {
            return;
        }

        openMovie(movie);

    });


    card.querySelector(".list-icon").addEventListener(
        "click",
        function(e) {

            e.stopPropagation();

            toggleWatchlist(movie.id);

        }
    );


    return card;
}


/* DISPLAY MOVIES */

function displayMovies(list = movies) {

    movieGrid.innerHTML = "";

    if (list.length === 0) {

        movieGrid.innerHTML = `
            <p style="color:#888;">
                No movies found.
            </p>
        `;

        return;
    }

    list.forEach(movie => {

        movieGrid.appendChild(
            createMovieCard(movie)
        );

    });

}


/* CONTINUE WATCHING */

function displayContinueWatching() {

    continueRow.innerHTML = "";

    continueWatching.forEach(item => {

        continueRow.appendChild(
            createMovieCard(
                item.movie,
                item.progress
            )
        );

    });

}


/* TOP RATED */

function displayTopRated() {

    topRatedRow.innerHTML = "";

    const sorted = [...movies]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 7);

    sorted.forEach(movie => {

        topRatedRow.appendChild(
            createMovieCard(movie)
        );

    });

}


/* WATCHLIST */

function displayWatchlist() {

    watchlistGrid.innerHTML = "";

    const savedMovies = movies.filter(movie =>
        watchlist.includes(movie.id)
    );

    if (savedMovies.length === 0) {

        watchlistGrid.innerHTML = `
            <p style="color:#888;">
                Your list is empty. Add movies using the + button.
            </p>
        `;

        return;
    }

    savedMovies.forEach(movie => {

        watchlistGrid.appendChild(
            createMovieCard(movie)
        );

    });

}


/* WATCHLIST */

function toggleWatchlist(id) {

    if (watchlist.includes(id)) {

        watchlist =
            watchlist.filter(movieId => movieId !== id);

        showToast("Removed from My List");

    } else {

        watchlist.push(id);

        showToast("Added to My List");

    }

    localStorage.setItem(
        "cinevaultWatchlist",
        JSON.stringify(watchlist)
    );

    displayMovies();
    displayTopRated();
    displayContinueWatching();
    displayWatchlist();

    if (selectedMovie) {

        document.getElementById("modalList").textContent =
            watchlist.includes(selectedMovie.id)
                ? "✓ In My List"
                : "+ My List";

    }
}


/* SEARCH */

searchInput.addEventListener("input", function() {

    const query =
        this.value.trim().toLowerCase();

    const results = movies.filter(movie =>

        movie.title.toLowerCase().includes(query) ||

        movie.genre.toLowerCase().includes(query)

    );

    displayMovies(results);

});


/* GENRE FILTER */

document.querySelectorAll(".genre-btn")
    .forEach(button => {

        button.addEventListener("click", function() {

            document
                .querySelectorAll(".genre-btn")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            this.classList.add("active");

            const genre = this.dataset.genre;

            if (genre === "All") {

                displayMovies();

                return;

            }

            displayMovies(
                movies.filter(movie =>
                    movie.genre === genre
                )
            );

        });

    });


/* MOVIE MODAL */

function openMovie(movie) {

    selectedMovie = movie;

    modalPoster.src = movie.poster;

    modalTitle.textContent = movie.title;

    modalYear.textContent = movie.year;

    modalDuration.textContent = movie.duration;

    modalRating.textContent = `★ ${movie.rating}`;

    modalDescription.textContent =
        movie.description;

    document.getElementById("modalList").textContent =
        watchlist.includes(movie.id)
            ? "✓ In My List"
            : "+ My List";

    movieModal.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeMovieModal() {

    movieModal.classList.remove("show");

    document.body.style.overflow = "";

}


document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        closeMovieModal
    );


movieModal.addEventListener("click", function(e) {

    if (e.target === movieModal) {

        closeMovieModal();

    }

});


document
    .getElementById("modalList")
    .addEventListener("click", function() {

        if (selectedMovie) {

            toggleWatchlist(selectedMovie.id);

        }

    });


document
    .getElementById("modalWatch")
    .addEventListener("click", function() {

        showToast(
            `Playing ${selectedMovie.title}`
        );

    });


/* HERO SLIDER */

const heroMovies = [
    movies[0],
    movies[1],
    movies[2],
    movies[7]
];

let heroIndex = 0;

const hero = document.getElementById("hero");
const heroTitle = document.getElementById("heroTitle");
const heroDescription =
    document.getElementById("heroDescription");

const heroDots =
    document.getElementById("heroDots");


function createHeroDots() {

    heroDots.innerHTML = "";

    heroMovies.forEach((movie, index) => {

        const dot =
            document.createElement("button");

        dot.className =
            index === heroIndex
                ? "hero-dot active"
                : "hero-dot";

        dot.addEventListener("click", () => {

            heroIndex = index;

            updateHero();

        });

        heroDots.appendChild(dot);

    });

}


function updateHero() {

    const movie = heroMovies[heroIndex];

    hero.style.backgroundImage =
        `url("${movie.backdrop}")`;

    heroTitle.textContent =
        movie.title;

    heroDescription.textContent =
        movie.description;

    createHeroDots();

}


setInterval(() => {

    heroIndex =
        (heroIndex + 1) %
        heroMovies.length;

    updateHero();

}, 7000);


/* HERO BUTTONS */

document
    .getElementById("heroInfo")
    .addEventListener("click", function() {

        openMovie(heroMovies[heroIndex]);

    });


document
    .getElementById("heroWatch")
    .addEventListener("click", function() {

        showToast(
            `Playing ${heroMovies[heroIndex].title}`
        );

    });


/* LOGIN */

document
    .getElementById("loginBtn")
    .addEventListener("click", function() {

        loginModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });


document
    .getElementById("closeLogin")
    .addEventListener("click", function() {

        loginModal.classList.remove("show");

        document.body.style.overflow = "";

    });


loginModal.addEventListener("click", function(e) {

    if (e.target === loginModal) {

        loginModal.classList.remove("show");

        document.body.style.overflow = "";

    }

});


/* LOGIN DEMO */

document
    .querySelector(".login-submit")
    .addEventListener("click", function() {

        const email =
            document.getElementById("emailInput").value;

        const password =
            document.getElementById("passwordInput").value;

        if (!email || !password) {

            showToast("Enter email and password");

            return;

        }

        loginModal.classList.remove("show");

        document.body.style.overflow = "";

        showToast("Signed in successfully");

    });


/* TOAST */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2200);

}


/* KEYBOARD */

document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {

        closeMovieModal();

        loginModal.classList.remove("show");

        document.body.style.overflow = "";

    }

});


/* INITIAL LOAD */

displayMovies();

displayContinueWatching();

displayTopRated();

displayWatchlist();

createHeroDots();
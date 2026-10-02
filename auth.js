/**
 * CineVault - Authentication Controller (Firebase Auth + Robust Demo Fallback)
 * Handles Sign Up, Login, Google Auth, Password Reset, and Session Management.
 */

const AUTH_STORAGE_KEYS = {
  ACTIVE_USER: "cinevault_current_user",
  DEMO_USERS: "cinevault_demo_accounts"
};

// Internal active user state
let currentUser = null;
const authListeners = [];

// Initialize local active user from storage
try {
  const saved = localStorage.getItem(AUTH_STORAGE_KEYS.ACTIVE_USER);
  if (saved) {
    currentUser = JSON.parse(saved);
  }
} catch (e) {
  console.error("Error reading saved user session:", e);
}

/**
 * Register a listener for authentication state changes
 */
function onAuthChange(callback) {
  authListeners.push(callback);
  // Immediate trigger with current state
  callback(currentUser);

  // If live Firebase auth is available, listen to Firebase's onAuthStateChanged
  if (firebaseAuth && !isDemoFirebase) {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        currentUser = {
          uid: user.uid,
          displayName: user.displayName || user.email.split('@')[0],
          email: user.email,
          photoURL: user.photoURL || null,
          isAnonymous: user.isAnonymous || false,
          createdAt: user.metadata ? user.metadata.creationTime : new Date().toISOString()
        };
        localStorage.setItem(AUTH_STORAGE_KEYS.ACTIVE_USER, JSON.stringify(currentUser));
      } else {
        currentUser = null;
        localStorage.removeItem(AUTH_STORAGE_KEYS.ACTIVE_USER);
      }
      notifyAuthListeners();
    });
  }
}

function notifyAuthListeners() {
  authListeners.forEach(cb => {
    try {
      cb(currentUser);
    } catch (e) {
      console.error("Auth listener error:", e);
    }
  });
}

/**
 * Sign Up with Email and Password
 */
async function signUpUser(name, email, password) {
  const cleanEmail = email.trim().toLowerCase();
  const cleanName = name.trim();

  if (!cleanEmail || !password) {
    throw new Error("Please enter both email and password.");
  }
  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters.");
  }

  // 1. Try Live Firebase Auth if real credentials exist
  if (firebaseAuth && !isDemoFirebase) {
    try {
      const userCredential = await firebaseAuth.createUserWithEmailAndPassword(cleanEmail, password);
      const user = userCredential.user;
      if (cleanName) {
        await user.updateProfile({ displayName: cleanName });
      }
      currentUser = {
        uid: user.uid,
        displayName: cleanName || user.email.split('@')[0],
        email: user.email,
        photoURL: null,
        isAnonymous: false,
        createdAt: new Date().toISOString()
      };
      localStorage.setItem(AUTH_STORAGE_KEYS.ACTIVE_USER, JSON.stringify(currentUser));
      notifyAuthListeners();
      return currentUser;
    } catch (error) {
      // If error is invalid API key, fallback to local demo auth smoothly
      if (!error.code || !error.code.includes("api-key")) {
        throw new Error(formatFirebaseError(error));
      }
    }
  }

  // 2. Local Demo / Fallback Authentication
  const demoUsers = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEYS.DEMO_USERS)) || [];
  const existing = demoUsers.find(u => u.email === cleanEmail);
  if (existing) {
    throw new Error("An account with this email already exists. Please sign in instead.");
  }

  const newUser = {
    uid: "user_" + Date.now(),
    displayName: cleanName || cleanEmail.split('@')[0],
    email: cleanEmail,
    password: password, // Stored locally for demo simulation
    photoURL: null,
    isAnonymous: false,
    createdAt: new Date().toISOString()
  };

  demoUsers.push(newUser);
  localStorage.setItem(AUTH_STORAGE_KEYS.DEMO_USERS, JSON.stringify(demoUsers));

  // Set as current user (without password)
  currentUser = { ...newUser };
  delete currentUser.password;
  localStorage.setItem(AUTH_STORAGE_KEYS.ACTIVE_USER, JSON.stringify(currentUser));
  notifyAuthListeners();
  return currentUser;
}

/**
 * Sign In with Email and Password
 */
async function loginUser(email, password) {
  const cleanEmail = email.trim().toLowerCase();

  if (!cleanEmail || !password) {
    throw new Error("Please enter both email and password.");
  }

  // 1. Try Live Firebase Auth if real credentials exist
  if (firebaseAuth && !isDemoFirebase) {
    try {
      const userCredential = await firebaseAuth.signInWithEmailAndPassword(cleanEmail, password);
      const user = userCredential.user;
      currentUser = {
        uid: user.uid,
        displayName: user.displayName || user.email.split('@')[0],
        email: user.email,
        photoURL: user.photoURL || null,
        isAnonymous: false,
        createdAt: user.metadata ? user.metadata.creationTime : new Date().toISOString()
      };
      localStorage.setItem(AUTH_STORAGE_KEYS.ACTIVE_USER, JSON.stringify(currentUser));
      notifyAuthListeners();
      return currentUser;
    } catch (error) {
      if (!error.code || !error.code.includes("api-key")) {
        throw new Error(formatFirebaseError(error));
      }
    }
  }

  // 2. Local Demo / Fallback Authentication
  const demoUsers = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEYS.DEMO_USERS)) || [];
  const found = demoUsers.find(u => u.email === cleanEmail);

  if (!found) {
    // If not found in demo users, auto-register them for smooth demo testing if password matches length
    if (password.length >= 6) {
      return await signUpUser(cleanEmail.split('@')[0], cleanEmail, password);
    }
    throw new Error("No account found with this email. Please create an account.");
  }

  if (found.password !== password) {
    throw new Error("Incorrect password. Please try again.");
  }

  currentUser = {
    uid: found.uid,
    displayName: found.displayName,
    email: found.email,
    photoURL: found.photoURL || null,
    isAnonymous: false,
    createdAt: found.createdAt || new Date().toISOString()
  };

  localStorage.setItem(AUTH_STORAGE_KEYS.ACTIVE_USER, JSON.stringify(currentUser));
  notifyAuthListeners();
  return currentUser;
}

/**
 * Sign In with Google
 */
async function loginWithGoogle() {
  if (firebaseAuth && !isDemoFirebase && typeof firebase !== 'undefined') {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebaseAuth.signInWithPopup(provider);
      const user = result.user;
      currentUser = {
        uid: user.uid,
        displayName: user.displayName || "Google User",
        email: user.email,
        photoURL: user.photoURL,
        isAnonymous: false,
        createdAt: new Date().toISOString()
      };
      localStorage.setItem(AUTH_STORAGE_KEYS.ACTIVE_USER, JSON.stringify(currentUser));
      notifyAuthListeners();
      return currentUser;
    } catch (error) {
      if (!error.code || !error.code.includes("api-key")) {
        throw new Error(formatFirebaseError(error));
      }
    }
  }

  // Demo Google Sign-In Simulation
  currentUser = {
    uid: "google_user_" + Date.now(),
    displayName: "Cinephile Explorer",
    email: "cinephile@gmail.com",
    photoURL: null,
    isAnonymous: false,
    createdAt: new Date().toISOString()
  };

  localStorage.setItem(AUTH_STORAGE_KEYS.ACTIVE_USER, JSON.stringify(currentUser));
  notifyAuthListeners();
  return currentUser;
}

/**
 * Guest / Anonymous Login
 */
function loginAsGuest() {
  currentUser = {
    uid: "guest_" + Date.now(),
    displayName: "Guest Explorer",
    email: null,
    photoURL: null,
    isAnonymous: true,
    createdAt: new Date().toISOString()
  };
  localStorage.setItem(AUTH_STORAGE_KEYS.ACTIVE_USER, JSON.stringify(currentUser));
  notifyAuthListeners();
  return currentUser;
}

/**
 * Logout User
 */
async function logoutUser() {
  if (firebaseAuth && !isDemoFirebase) {
    try {
      await firebaseAuth.signOut();
    } catch (e) {
      console.warn("Firebase signout error:", e);
    }
  }

  currentUser = null;
  localStorage.removeItem(AUTH_STORAGE_KEYS.ACTIVE_USER);
  notifyAuthListeners();
}

/**
 * Send Password Reset Email
 */
async function sendPasswordReset(email) {
  const cleanEmail = email.trim().toLowerCase();
  if (!cleanEmail) {
    throw new Error("Please enter your email address.");
  }

  if (firebaseAuth && !isDemoFirebase) {
    try {
      await firebaseAuth.sendPasswordResetEmail(cleanEmail);
      return true;
    } catch (error) {
      throw new Error(formatFirebaseError(error));
    }
  }

  // Demo simulation
  return true;
}

/**
 * Format Firebase Error Messages into friendly copy
 */
function formatFirebaseError(error) {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'This email address is already in use by another account.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/operation-not-allowed':
      return 'Email/password sign-in is not enabled in Firebase Console.';
    case 'auth/weak-password':
      return 'Your password is too weak. Please use at least 6 characters.';
    case 'auth/user-disabled':
      return 'This account has been disabled.';
    case 'auth/user-not-found':
      return 'No account was found with this email.';
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.';
    case 'auth/popup-closed-by-user':
      return 'Sign in popup was closed before completing.';
    default:
      return error.message || 'An authentication error occurred. Please try again.';
  }
}

/**
 * Get current active user object or null
 */
function getCurrentUser() {
  return currentUser;
}

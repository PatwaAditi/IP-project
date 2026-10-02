/**
 * CineVault - Firebase Configuration
 *
 * Uses Firebase Compat SDK (loaded via CDN <script> tags).
 * Do NOT use ES module `import` syntax here — this file is loaded
 * as a plain <script> in the browser alongside the compat CDN builds.
 *
 * Firebase Project: ip-project-3116a
 */

const firebaseConfig = {
  apiKey: "AIzaSyBkf5AuN25KsMVZjUHvirlCGiuXzAu8GCs",
  authDomain: "ip-project-3116a.firebaseapp.com",
  projectId: "ip-project-3116a",
  storageBucket: "ip-project-3116a.firebasestorage.app",
  messagingSenderId: "648024862020",
  appId: "1:648024862020:web:1c94f3a5b941e2e4fafb11",
  measurementId: "G-XHW42YRXD9"
};

// Detect if real Firebase config is provided or still using demo placeholders
const isDemoFirebase = !firebaseConfig.apiKey ||
  firebaseConfig.apiKey.includes("Placeholder") ||
  firebaseConfig.apiKey.includes("Demo");

let firebaseApp = null;
let firebaseAuth = null;

try {
  if (typeof firebase !== 'undefined') {
    firebaseApp = firebase.initializeApp(firebaseConfig);
    firebaseAuth = firebase.auth();
    console.log("✅ Firebase initialized — project: ip-project-3116a");
  } else {
    console.warn("Firebase SDK script not loaded yet — using offline/demo auth mode.");
  }
} catch (error) {
  console.warn("Firebase initialization notice:", error.message);
}

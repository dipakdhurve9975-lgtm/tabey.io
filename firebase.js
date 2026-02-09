import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCuVtOv09ixwnZszRKxjq3PQtiDn3kE5ng",
  authDomain: "tabey-foods.firebaseapp.com",
  projectId: "tabey-foods",
  storageBucket: "tabey-foods.firebasestorage.app",
  messagingSenderId: "114325031482",
  appId: "1:114325031482:web:870ab98e268c16d7d4c303"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.db = db;
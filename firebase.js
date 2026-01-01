import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, push, set, onValue, update, remove } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDIjFl7bbQl28pB_z45CYmT_A_fTJ_Hjm0",
  authDomain: "to-do-project-62456.firebaseapp.com",
  databaseURL: "https://to-do-project-62456-default-rtdb.firebaseio.com",
  projectId: "to-do-project-62456",
  storageBucket: "to-do-project-62456.firebasestorage.app",
  messagingSenderId: "441330197022",
  appId: "1:441330197022:web:0f66a79eee8a42f253440f",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, set, onValue, update, remove };

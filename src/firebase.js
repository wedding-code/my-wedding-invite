import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkmuxt_Ndi_MQdRFItG9SM_Es69icSB88",
  authDomain: "wedding-ac819.firebaseapp.com",
  projectId: "wedding-ac819",
  storageBucket: "wedding-ac819.firebasestorage.app",
  messagingSenderId: "968987044429",
  appId: "1:968987044429:web:f72e691955ac5a94a04a04"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi dan export Firestore sebagai 'db'
export const db = getFirestore(app);
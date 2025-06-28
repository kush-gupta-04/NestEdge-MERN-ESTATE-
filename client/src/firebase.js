// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "nest-edge-96055.firebaseapp.com",
    projectId: "nest-edge-96055",
    storageBucket: "nest-edge-96055.firebasestorage.app",
    messagingSenderId: "483480433047",
    appId: "1:483480433047:web:c5b6684c0b3520115954d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
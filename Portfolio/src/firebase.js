import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCydY2Z4KYFQBgVVBm-T3wyhkT0LvIAO1g",
  authDomain: "cuteproject-746d7.firebaseapp.com",
  projectId: "cuteproject-746d7",
  storageBucket: "cuteproject-746d7.appspot.com",
  messagingSenderId: "485376745865",
  appId: "1:485376745865:web:c235f1c1e638eb3b210158",
  measurementId: "G-VD11V02DPZ"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore() 
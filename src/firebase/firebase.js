import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCto0bPj28cOx0beO5Y-utrJXYVtBB9Cec",
  authDomain: "naturaleza-para-tu-cuerpo.firebaseapp.com",
  projectId: "naturaleza-para-tu-cuerpo",
  storageBucket: "naturaleza-para-tu-cuerpo.appspot.com",
  messagingSenderId: "83950343087",
  appId: "1:83950343087:web:7871bdafb1480437ca155a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
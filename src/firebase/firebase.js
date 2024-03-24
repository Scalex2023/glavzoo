import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAT2f5nuOKyHC2mADpzddJvAVBzpKX_cSU",
    authDomain: "glavzoo.firebaseapp.com",
    projectId: "glavzoo",
    storageBucket: "glavzoo.appspot.com",
    messagingSenderId: "16859565815",
    appId: "1:16859565815:web:7a4fc6836d523a16b18df2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
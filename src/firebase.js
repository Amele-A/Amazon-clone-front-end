import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBY1JvnqbGOEkwKuhRRgGYpDqnX-WvmB0M",
    authDomain: "clone-25b9d.firebaseapp.com",
    projectId: "clone-25b9d",
    storageBucket: "clone-25b9d.appspot.com",
    messagingSenderId: "94009003724",
    appId: "1:94009003724:web:f16a00a367bbd7852e7c69",
    measurementId: "G-N307QZPDCG"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
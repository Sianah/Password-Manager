import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBrmxMGoA1apUiZHKWLgHPomMVQlDETVTs",
  authDomain: "password-manager-4d40b.firebaseapp.com",
  projectId: "password-manager-4d40b",
  storageBucket: "password-manager-4d40b.appspot.com",
  messagingSenderId: "1005360072742",
  appId: "1:1005360072742:web:04f359db846019dadebee7",
  measurementId: "G-R99F09JJC9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };



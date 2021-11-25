import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyDVDGtPLgPbwF-DJAY8OyV4CzUsYCXv3bY",
  authDomain: "uber-clone-a422d.firebaseapp.com",
  projectId: "uber-clone-a422d",
  storageBucket: "uber-clone-a422d.appspot.com",
  messagingSenderId: "946461036454",
  appId: "1:946461036454:web:620d7e1c62b771f60c0967"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };

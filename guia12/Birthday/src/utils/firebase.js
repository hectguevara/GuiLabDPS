import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCL81E0TqA2GMEqWb7Msx1Hgip1DlaPe78",
  authDomain: "birthday-61885.firebaseapp.com",
  projectId: "birthday-61885",
  storageBucket: "birthday-61885.firebasestorage.app",
  messagingSenderId: "625080052807",
  appId: "1:625080052807:web:2c61b45fd287c8703fd562",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app);

export { auth, db };

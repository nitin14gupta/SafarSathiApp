import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDW94LMra5k7AbxagQz4aGGVvSuLXOJydU',
  authDomain: 'safarsaathiverfication.firebaseapp.com',
  projectId: 'safarsaathiverfication',
  storageBucket: 'safarsaathiverfication.appspot.com',
  messagingSenderId: '559542375803',
  appId: '1:559542375803:android:c52be14b23de66f99dd9de',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

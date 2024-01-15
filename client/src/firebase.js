import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAdBMhKnwmJHCEjdVWVt7LWcanPw93NPrM",
  authDomain: "maxtube-ea29b.firebaseapp.com",
  projectId: "maxtube-ea29b",
  storageBucket: "maxtube-ea29b.appspot.com",
  messagingSenderId: "914462874392",
  appId: "1:914462874392:web:9218798e257027d146dc6d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider()

export default app;

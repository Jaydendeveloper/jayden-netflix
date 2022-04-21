import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCQkFxlmvwUYSZYacI6qU_O0KYNtl5GTyA",
  authDomain: "jayden-netflix.firebaseapp.com",
  projectId: "jayden-netflix",
  storageBucket: "jayden-netflix.appspot.com",
  messagingSenderId: "262935998687",
  appId: "1:262935998687:web:50f4f59971461bf37e396a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
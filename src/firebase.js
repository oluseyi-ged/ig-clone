import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDuYB0JIgYu7xjgU0otuboTpP_N1jR67S8",
  authDomain: "instagram-clone-9d64e.firebaseapp.com",
  projectId: "instagram-clone-9d64e",
  storageBucket: "instagram-clone-9d64e.appspot.com",
  messagingSenderId: "478976759190",
  appId: "1:478976759190:web:c0ac427a71525927d839b7",
  measurementId: "G-23E9RMV9YD",
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }

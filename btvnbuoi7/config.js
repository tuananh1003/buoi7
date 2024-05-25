import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCi182E7S1E6lLbFb0h5Ty-I5DYucSTFwA",
    authDomain: "btvn-46934.firebaseapp.com",
    projectId: "btvn-46934",
    storageBucket: "btvn-46934.appspot.com",
    messagingSenderId: "1002923126284",
    appId: "1:1002923126284:web:be68cd9a07980c0be8c829",
    measurementId: "G-P4CZ2DK2PH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth=getAuth(app)
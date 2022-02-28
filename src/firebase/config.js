import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy3D_IGG6TsxKGEACQA2AKngY12dW-b2I",
  authDomain: "cooking-ninja-site-40064.firebaseapp.com",
  projectId: "cooking-ninja-site-40064",
  storageBucket: "cooking-ninja-site-40064.appspot.com",
  messagingSenderId: "1021770259979",
  appId: "1:1021770259979:web:e634d3d41c69734d47f10e",
  measurementId: "G-77W88MTZLY"
};

// init connection

firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export {projectFirestore};

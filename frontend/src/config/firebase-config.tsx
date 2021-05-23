import firebase from "firebase";
const firebaseConfig = {
 apiKey: "AIzaSyCny9RMo21wyEWkkkqIp4Uih-Cia3blLfc",
 authDomain: "authentication-8f3d9.firebaseapp.com",
 projectId: "authentication-8f3d9",
 storageBucket: "authentication-8f3d9.appspot.com",
 messagingSenderId: "176404997122",
 appId: "1:176404997122:web:98ed7006cec53e4ae3f31b",
 measurementId: "G-P8S2M4R168",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
  export const auth = firebase.auth();



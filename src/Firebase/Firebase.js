// import firebase from 'firebase/app'
// import 'firebase/firestore'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyAVOPqqdqhh75ngOf2CzZdCmxRz81jCKHY",
    authDomain: "fordb-1fc5e.firebaseapp.com",
    databaseURL: "https://fordb-1fc5e.firebaseio.com",
    projectId: "fordb-1fc5e",
    storageBucket: "fordb-1fc5e.appspot.com",
    messagingSenderId: "733137467473",
    appId: "1:733137467473:web:00219f2ff15356657d6070",
    measurementId: "G-H4PNHHD70H"
  };
  export const fire= firebase.initializeApp(firebaseConfig)
    const db =firebase.firestore();
   
   
  
      export default db;
     
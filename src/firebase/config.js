import firebase from "firebase/compat/app"
import "firebase/compat/analytics" // có thể sử dụng tính năng phân tích của firebase
import "firebase/compat/firestore" // có thể sử dụng tính năng lưu trữ giống Database
import "firebase/compat/auth" // có thể sử dụng để xác thực

const firebaseConfig = {
    apiKey: "AIzaSyA2T8egekLG9pLzkGaR3LDOUYBKP-xkvCo",
    authDomain: "chat-38211.firebaseapp.com",
    projectId: "chat-38211",
    storageBucket: "chat-38211.appspot.com",
    messagingSenderId: "414923192351",
    appId: "1:414923192351:web:7b13a392bdb386a4933d2a",
    measurementId: "G-332TKM61X6"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  const auth = firebase.auth();
  const db = firebase.firestore();

  export {db,auth};
  export default firebase;
  
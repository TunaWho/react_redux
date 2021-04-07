import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDRiyb_sVUtWt2h2E42NwBXb5npEX5hKl8",
  authDomain: "testcourse-a408e.firebaseapp.com",
  databaseURL: "https://testcourse-a408e-default-rtdb.firebaseio.com",
  projectId: "testcourse-a408e",
  storageBucket: "testcourse-a408e.appspot.com",
  messagingSenderId: "706009237139",
  appId: "1:706009237139:web:32ad8e1a43a87dbd5bef66",
};

export default firebase.initializeApp(firebaseConfig);
export const data = firebase.database().ref("note");

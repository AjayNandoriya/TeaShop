// Initialize Firebase

var app = null;
var db = null;
document.addEventListener('DOMContentLoaded', function() {
    const firebaseConfig = {
        apiKey: "AIzaSyAHwNgej6KYqtuUwl5MUQlElTob7zfo1lg",
        authDomain: "teashop-bc585.firebaseapp.com",
        projectId: "teashop-bc585",
        storageBucket: "teashop-bc585.appspot.com",
        messagingSenderId: "211123009892",
        appId: "1:211123009892:web:8458ece8ce413062e36271",
        measurementId: "G-7B2PYP45N8"
      };
      
    // firebase.initializeApp(firebaseConfig);

    app = firebase.app();
    db = firebase.firestore();
    console.log("firebase loadded");
});

async function add_user() {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  const user = {
    username: username,
    password: password,
  };

  console.log("user:", user);
  try {
    var users = db.collection("users");

    const ispresent = await is_user_exist(username);
    if(ispresent){
        alert("User exist: ");
        return;
    }
    const docRef = await users.doc(user.username).set(user);
    console.log("Document written: ", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function login() {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    var users = db.collection("users");
    const q = await users.where("username","==",username).where("password","==",password).get();
  
    if(q.empty){
        alert("login failed...");
    }
    else{
        alert("login sucessful.");
    }
}

async function is_user_exist(username){
    var users = db.collection("users");
    const q = await users.where("username","==",username).get();
    return !q.empty;
}
async function get_user() {
    const username = document.querySelector("#username").value;
  
    var users = db.collection("users");
    const q = await users.where("username","==",username).get();
    // const q = await users.get();
  
    q.forEach((doc) => {
        console.log(doc.data());
    });
}

var firebaseConfig = {
    apiKey: "AIzaSyA3f09rMNI76THSQ8F0SSkwka-SEIwE-GY",
    authDomain: "kwitter-project-feb74.firebaseapp.com",
    databaseURL: "https://kwitter-project-feb74-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-feb74",
    storageBucket: "kwitter-project-feb74.appspot.com",
    messagingSenderId: "391305152196",
    appId: "1:391305152196:web:29690972126cbcc3902b91"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("u_name");
document.getElementById("user_name").innerHTML="welcome "+ username;

function addroom(){
    room_name = document.getElementById("roomname").value;
    firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
    localStorage.setItem("rname",room_name);
    window.location="kwitter_page.html";
}

function getData() 
{firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
add_row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)'>" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += add_row;


//End code
});});}
getData();

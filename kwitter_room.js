var firebaseConfig = {
      apiKey: "AIzaSyDjqijpgV0wKr0MBL6Ug-pxUK3oG568jtw",
      authDomain: "kwitter-3d0b4.firebaseapp.com",
      databaseURL: "https://kwitter-3d0b4-default-rtdb.firebaseio.com",
      projectId: "kwitter-3d0b4",
      storageBucket: "kwitter-3d0b4.appspot.com",
      messagingSenderId: "95253730635",
      appId: "1:95253730635:web:b25f3a0815b9a503bb04ce",
      measurementId: "G-039YTBED2S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")

document.getElementById("user_name").innerHTML = "welcome " + user_name + " !";

function addRoom() {

      room_name = document.getElementById("room_name").value

      firebase.database().ref("/").child(room_name).update({
            Day: "sunday",
            date: "31-1-2021"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}
//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room_name" + Room_names);
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  console.log("click");


                  //End code
            });
      });
}

getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
      console.log("move");

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}



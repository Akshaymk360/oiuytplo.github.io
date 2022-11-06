const firebaseConfig = {
  apiKey: "AIzaSyD03K7KroS_Lbxb2P2rHfX6KhLS6iIzKMk",
  authDomain: "bpl14uni.firebaseapp.com",
  projectId: "bpl14uni",
  storageBucket: "bpl14uni.appspot.com",
  messagingSenderId: "53443050945",
  appId: "1:53443050945:web:d7421c919ef35ce38ac340",
  measurementId: "G-LTXP0CM135"
};

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function get_scorecard(){
    firebase.database().ref("scorecard").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
        childData = childSnapshot.key;

        sc = childData;

         console.log(sc);
         row = "<div id="+sc+" onclick='redirectToRoomName(this.id)' >#"+ sc +"</div><hr>";
         document.getElementById("output").innerHTML += row;
         console.log(row);



    });  });

}
get_scorecard();
function back1(){
    window.location = "user.html";
}

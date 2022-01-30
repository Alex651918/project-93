const firebaseConfig = {
      apiKey: "AIzaSyBCo-VElXZ0XPLWKs9-4R9BOccaWm2c59Q",
      authDomain: "kwitter-app-b3235.firebaseapp.com",
      projectId: "kwitter-app-b3235",
      storageBucket: "kwitter-app-b3235.appspot.com",
      messagingSenderId: "771371849258",
      appId: "1:771371849258:web:846a9ceb774f347041d553",
      measurementId: "G-XBFYK25W6V"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

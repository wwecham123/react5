
import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyD9LSVKjuEXfLUWz6rqoaRQvLuyZs0iciI",
    authDomain: "notereact-55086.firebaseapp.com",
    databaseURL: "https://notereact-55086.firebaseio.com",
    projectId: "notereact-55086",
    storageBucket: "notereact-55086.appspot.com",
    messagingSenderId: "574661786993"
  };
  
  export const firebaseConnect =   firebase.initializeApp(config);
  var data = firebase.database().ref('note1/')

  data.set({
      id: 10,
      contentNote : "Noi dunggggggggggg",
      title : "hihhih demo"
  })
  data.once('value').then(function(snapshot){
    console.log(snapshot.val())
})
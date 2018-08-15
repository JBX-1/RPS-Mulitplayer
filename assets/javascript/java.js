//initialize Firebase
var config = {
    apiKey: "AIzaSyA65mNvgyxBJKDJNa3MjudVv--t5MJqyHY",
    authDomain: "train-schedule01.firebaseapp.com",
    databaseURL: "https://train-schedule01.firebaseio.com",
    projectId: "train-schedule01",
    storageBucket: "train-schedule01.appspot.com",
    messagingSenderId: "240643684899"
  };
  firebase.initializeApp(config);


var dataStorage = firebase.database().ref();
 
//once button is clicked
$("#TrainBtn").on("click", function(){
    event.preventDefault();

    //grabs INfo
    var tInput = $("#trainInputTime").val().trim();
    var trainDest = $("#Destination").val().trim();
    var inputT = $("#trainInput").val().trim();
    var arrival = $("#trainDuration").val().trim();


    //what goes into the database
    var trainInfo = {
        tName = tInput,
        tDest = trainDest,
        t1 = inputT,
        nextT = arrival
    }
    //push to database
    dataStorage.push(trainInfo);

    //clears boxes

    $("#trainInputTime").val("");
    $("#Destination").val("");
    $("#trainInput").val("");
    $("#trainDuration").val("");

    // code not all the way functional and was having problems with the firebase

})
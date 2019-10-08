//firebase key
  var firebaseConfig = {
    apiKey: "AIzaSyAMmGp85nG66iPIJ8cJ3f4yykDr_tcov9M",
    authDomain: "train-schedule-161a2.firebaseapp.com",
    databaseURL: "https://train-schedule-161a2.firebaseio.com",
    projectId: "train-schedule-161a2",
    storageBucket: "",
    messagingSenderId: "1041586328598",
    appId: "1:1041586328598:web:2cfa5c583a89735ffdd137"
  };
 
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

//create a variable to reference the database
var database = firebase.database();

//on click function for the submit button
$(".btn-submit").on("click", function (event) {
    event.preventDefault();

    var train = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var time = $("#trainTime").val().trim();
    var freq = $("#frequency").val().trim();

    console.log(train);
    console.log(destination);
    console.log(time);
    console.log(freq);

    database.ref().push({
        train : train,
        destination : destination,
        time : time,
        freq : freq
    })
    //don't refresh the page
    return false;

});

//firebase watcher and initial loader. HINT: this code behaves similarly to .on("value")
database.ref().on("child_added", function(childSnapshot){
    //log everything coming out of snapshot
    console.log(childSnapshot.val().train);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().time);
    console.log(childSnapshot.val().freq);

    $("tbody").append("<tr><td>" + childSnapshot.val().train + "</td><td>" + childSnapshot.val().destination + "</td><td>" + childSnapshot.val().time + "</td><td>Time to Destination</td><td>" + childSnapshot.val().freq + "</td><td>Total Frequency</td></tr>");
}, function(errorObject){
    console.log("Errors handled: " + errorObject.code);
});

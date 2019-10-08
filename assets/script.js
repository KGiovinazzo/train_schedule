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
 
  firebase.initializeApp(firebaseConfig);


//create a variable to reference the database
var database = firebase.database();




//on click function for the submit button
$(".btn-submit").on("click", function (event) {
    event.preventDefault();

    var name = $("#employeeName").val().trim();
    var role = $("#role").val().trim();
    var startDate = $("#startDate").val().trim();
    var rate = $("#monthlyRate").val().trim();

    console.log(name);
    console.log(role);
    console.log(startDate);
    console.log(rate);

    database.ref().push({
        name : name,
        role : role,
        startDate : startDate,
        rate : rate
    })
    //don't refresh the page
    return false;

});

//firebase watcher and initial loader. HINT: this code behaves similarly to .on("value")
database.ref().on("child_added", function(childSnapshot){
    //log everything coming out of snapshot
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().startDate);
    console.log(childSnapshot.val().rate);

    $("tbody").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().role + "</td><td>" + childSnapshot.val().startDate + "</td><td>months worked function</td><td>" + childSnapshot.val().rate + "</td><td>total billed function</td></tr>");
}, function(errorObject){
    console.log("Errors handled: " + errorObject.code);
});

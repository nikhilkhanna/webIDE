
  Meteor.startup(function () {
    //clearing the array
    codingSessions.remove({});
    //adding a new count
    codingSessions.insert({user: "niki", codeString: ""});
    // code to run on server at startup
  });

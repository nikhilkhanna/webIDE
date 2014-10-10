
Count = new Mongo.Collection("count");

if (Meteor.isClient) {
  // counter starts at 0
  Meteor.subscribe("count");
  Template.hello.helpers({

    codeArea: function() {
      if(Count.find().fetch()[0] == null)
        return "0";
      return Count.find().fetch()[0].codeString;
    }

  });

  Template.hello.events({
    'input textarea': function () {
      
      var currentCount = Count.findOne({user: "niki"});

      if(currentCount == null) {
        return;
      }

      Count.update(
        {_id: currentCount._id},
        { 
          user: "niki",
          codeString: $('#codeArea').val()
        }
      );

    },

    'click button': function() {
      var jsString = $('#codeArea').val();
      eval(jsString);
    }

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    //clearing the array
    Count.remove({});
    //adding a new count
    Count.insert({user: "niki", codeString: ""});
    // code to run on server at startup
  });
}

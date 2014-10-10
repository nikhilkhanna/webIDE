
//router templates
Router.map(function(){
    this.route('intro');
});

Router.map(function() {
  this.route('hello', {path: '/'});
});


// counter starts at 0
Meteor.subscribe("codingSessions");
Template.hello.helpers({

  codeArea: function() {
    if(codingSessions.find().fetch()[0] == null)
      return "0";
    return codingSessions.find().fetch()[0].codeString;
  }

});

Template.hello.events({
  'input textarea': function () {
    
    var currentSession = codingSessions.findOne({user: "niki"});

    if(currentSession == null) {
      return;
    }

    codingSessions.update(
      {_id: currentSession._id},
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

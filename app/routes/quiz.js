export default Ember.Route.extend({

  actions: {
    submit: function(){
      this.transitionTo('quiz.result');
    },
    gotoQuestion2: function(){
      this.transitionTo('quiz.question2');
    },
    gotoQuestion3: function(){
      this.transitionTo('quiz.question3');
    },
    gotoResult: function(){
      this.transitionTo('quiz.result');
    },
    gotoJavascript: function(){
      this.transitionTo('javascript');
    }
  }

});

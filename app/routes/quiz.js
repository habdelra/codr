export default Ember.Route.extend({

  actions: {
    submit: function(){
      this.transitionTo('quiz.result');
    },
    startJavascript: function(){
      this.transitionTo('reference');
    }
  }

});

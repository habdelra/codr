export default Ember.Route.extend({

  actions: {
    submit: function(){
      this.transitionTo('quiz.result');
    },
    gotoJavascript: function(){
      this.transitionTo('reference.events');
    }
  }

});

export default Ember.Route.extend({

  actions: {
    startQuiz: function() {
      this.transitionTo('quiz.question1');
    }
  }

});

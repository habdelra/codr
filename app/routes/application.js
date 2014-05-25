export default Ember.Route.extend({
  actions: {
    gotoHome: function(){
      this.transitionTo('home');
    }
  }


});

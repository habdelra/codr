export default Ember.Route.extend({
  afterModel: function() {
    this.transitionTo('topic-items');
  }
});

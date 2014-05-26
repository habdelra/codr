export default Ember.Route.extend({
  model: function(){
    var module = this.modelFor('module');
    return module.get('topics');
  },
  afterModel: function(model) {
    if (model.get('length')) {
      this.transitionTo('topic', model.get('firstObject'));
    }
  }
});

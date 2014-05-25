export default Ember.Route.extend({
  model: function(){
    return this.store.find('module');
  },
  afterModel: function(model) {
    if (model.get('length')) {
      this.transitionTo('module', model.get('firstObject'));
    }
  }
});

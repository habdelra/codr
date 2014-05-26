export default Ember.Route.extend({
  model: function(){
    return this.store.find('section');
  },
  afterModel: function(model) {
    if (model.get('length')) {
      this.transitionTo('section', model.get('firstObject'));
    }
  }
});

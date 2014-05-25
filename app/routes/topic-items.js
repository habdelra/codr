export default Ember.Route.extend({
  model: function(){
    return this.store.find('topic-item');
  },
  afterModel: function(model) {
    if (model.get('length')) {
      this.transitionTo('topic-item', model.get('firstObject'));
    }
  }
});

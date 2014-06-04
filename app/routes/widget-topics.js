export default Ember.Route.extend({
  model: function(){
    return this.store.find('module', 2).then(function(module){
      return module.get('topics');
    });
  },
  afterModel: function(model) {
    if (model.get('length')) {
      this.transitionTo('widget-topic', model.get('firstObject'));
    }
  }
});

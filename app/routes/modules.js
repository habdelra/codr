export default Ember.Route.extend({
  model: function(){
    return this.store.find('module').then(function(modules){
      return modules.sortBy('id');
    });
  },
  afterModel: function(model) {
    if (model.get('length')) {
      this.transitionTo('module', model.get('firstObject'));
    }
  }
});

export default Ember.Route.extend({
  model: function(){
    var section = this.modelFor('section');
    return section.get('modules');
  },
  afterModel: function(model) {
    if (model.get('length')) {
      this.transitionTo('module', model.get('firstObject'));
    }
  }
});

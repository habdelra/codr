export default Ember.Route.extend({
  model: function(){
    var module = this.modelFor('module');
    return module.get('topicItems');
  },
  afterModel: function(model) {
    if (model.get('length')) {
      this.transitionTo('topic-item', model.get('firstObject'));
    }
  }
});

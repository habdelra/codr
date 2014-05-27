export default Ember.Route.extend({
  model: function() {
    var topic = this.modelFor('topic');
    return topic.get('codeSnippets');
  },
  afterModel: function(model) {
    if (model.get('length')) {
      this.transitionTo('code-snippet', model.get('firstObject'));
    }
  }
});

export default Ember.Route.extend({
  model: function(){
    var topic = this.modelFor('topic');
    return topic.get('topicItems');
  },
  afterModel: function(model) {
    if (model.get('length')) {
      this.transitionTo('topic-item', model.get('firstObject'));
    }
  }
});

export default Ember.Route.extend({
  model: function(){
    var topic = this.modelFor('widget-topic');
    return topic.get('topicItems');
  },
  afterModel: function(model) {
    if (model.get('length')) {
      this.transitionTo('widget-topic-item', model.get('firstObject'));
    }
  }
});

export default Ember.Route.extend({
  model: function(){
    var topic = this.modelFor('topic');
    return topic.get('topicItems').then(function(topicItems){
      return topicItems.sortBy('id');
    });
  },
  afterModel: function(model) {
    if (model.get('length')) {
      this.transitionTo('topic-item', model.get('firstObject'));
    }
  }
});

export default Ember.Route.extend({
  model: function(params) {
    if (params.topic_id) {
      return this.store.find('topic', params.topic_id);
    }
  },
  afterModel: function(){
    this.transitionTo('widget-topic-items');
  }

});

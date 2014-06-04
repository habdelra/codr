export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('topic-item', params.topic_item_id);
  }
});

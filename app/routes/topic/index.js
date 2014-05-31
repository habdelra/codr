import types from 'codr/utils/topic-types';

export default Ember.Route.extend({
  afterModel: function(model) {
    if (model.get('type') === types.TOPIC_ITEMS) {
      this.transitionTo('topic-items');
    } else if (model.get('type') === types.CODE_SNIPPETS) {
      this.transitionTo('code-snippets');
    }
  }
});

export default Ember.Controller.extend({
  needs: ['topic-items'],
  topicItems: Ember.computed.alias('controllers.topic-items.topicItems'),
  topicItem: Ember.computed.alias('content'),

  topicItemIndex: function(){
    return this.get('topicItems').indexOf(this.get('topicItem'));
  }.property()
});

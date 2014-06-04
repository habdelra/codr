import TopicController from './topic';

export default TopicController.extend({
  needs: ['widget-topics'],
  topicsController: Ember.computed.alias('controllers.widget-topics'),

  currentTopicItemIndex: function(){
    return this.get('topic.topicItems').indexOf(this.get('currentTopicItem'));
  }.property('currentTopicItem', 'topic.topicItems.[]'),

  currentTopicItemSequenceNumber: function() {
    return this.get('currentTopicItemIndex') + 1;
  }.property('currentTopicItemIndex'),

  actions: {
    nextTopicItem: function(){
      var idx = this.get('currentTopicItemIndex') + 1;
      var topicItems = this.get('topic.topicItems');
      if (idx < topicItems.get('length')) {
        this.transitionToRoute('widget-topic-item', topicItems.objectAt(idx));
      }
    },
    prevTopicItem: function(){
      var idx = this.get('currentTopicItemIndex') -1;
      var topicItems = this.get('topic.topicItems');
      if (idx < topicItems.get('length')) {
        this.transitionToRoute('widget-topic-item', topicItems.objectAt(idx));
      }
    }
  }
});

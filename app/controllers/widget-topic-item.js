import TopicItemController from './topic-item';
import Ember from 'ember';

export default TopicItemController.extend({
  needs: ['widget-topic-items', 'widget-topic'],
  topicItemsController: Ember.computed.alias('controllers.widget-topic-items'),
  topicController: Ember.computed.alias('controllers.widget-topic'),

  setCurrentTopicItem: Ember.observer('model', function(){
    this.get('topicController').set('currentTopicItem', this.get('model'));
  }).on('init'),

  actions: {
    toggleCodeDisplay: function(){
      this.set('codeDisplay', !!!this.get('codeDisplay'));
    }
  }
});

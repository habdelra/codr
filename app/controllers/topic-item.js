export default Ember.Controller.extend({
  needs: ['topic-items'],
  topicItems: Ember.computed.alias('controllers.topic-items.topicItems'),
  topicItem: Ember.computed.alias('content'),

  actions: {
    revert: function(){
      this.set('reloadLab', !!!this.get('reloadLab'));
    }
  }
});

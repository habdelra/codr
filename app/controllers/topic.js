export default Ember.Controller.extend({
  topicsController: Ember.computed.alias('controllers.topics'),
  needs: ['topics'],
  topics: Ember.computed.alias('topicsController.topics'),
  topic: Ember.computed.alias('content'),
  title: Ember.computed.alias('topic.title'),
  dasherizedTitle: function(){
    return Ember.String.dasherize(this.get('title'));
  }.property('title')
});

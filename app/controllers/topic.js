export default Ember.Controller.extend({
  needs: ['topics'],
  topics: Ember.computed.alias('controllers.topics.topics'),
  topic: Ember.computed.alias('content'),
  title2: Ember.computed.alias('topic.title'),
  dasherizedTitle: function(){
    return Ember.String.dasherize(this.get('topic.title'));
  }.property('topic.title')
});

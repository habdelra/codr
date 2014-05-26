export default Ember.Controller.extend({
  needs: ['topics'],
  topics: Ember.computed.alias('controllers.topics.topics'),
  topic: Ember.computed.alias('content')
});

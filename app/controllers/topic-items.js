import Ember from 'ember';
export default Ember.Controller.extend({
  topicItems: Ember.computed.alias('content')
});

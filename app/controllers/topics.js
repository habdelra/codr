import Ember from 'ember';
export default Ember.Controller.extend({
  topics: Ember.computed.alias('content')
});

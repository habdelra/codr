import Ember from 'ember';

export default Ember.Controller.extend({
  modules: Ember.computed.alias('content')
});

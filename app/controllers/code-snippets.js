import Ember from 'ember';
export default Ember.Controller.extend({
  codeSnippets: Ember.computed.alias('content')
});

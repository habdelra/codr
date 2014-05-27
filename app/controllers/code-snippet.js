export default Ember.Controller.extend({
  needs: ['code-snippets'],
  codeSnippets: Ember.computed.alias('controllers.code-snippets.codeSnippets'),
  codeSnippet: Ember.computed.alias('content')
});

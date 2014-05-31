export default Ember.Controller.extend({
  needs: ['code-snippets', 'topic'],
  codeSnippets: Ember.computed.alias('controllers.code-snippets.codeSnippets'),
  codeSnippet: Ember.computed.alias('content'),

  toggleDetailLabel: function(){
    if (this.get('showInstructionDetail')) {
      return 'Hide Instructions';
    } else {
      return 'Show Instructions';
    }
  }.property('showInstructionDetail'),

  actions: {
    toggleDetail: function(){
      this.set('showInstructionDetail', !!!this.get('showInstructionDetail'));
    }
  }
});

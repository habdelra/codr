import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['code-snippets', 'topic'],
  showInstructionDetail: true,
  codeSnippets: Ember.computed.alias('controllers.code-snippets.codeSnippets'),
  codeSnippet: Ember.computed.alias('content'),

  toggleDetailLabel: function(){
    if (this.get('showInstructionDetail')) {
      return 'Hide Instructions';
    } else {
      return 'Show Instructions';
    }
  }.property('showInstructionDetail'),

  runUrl: function(){
    if (!this.get('codeSnippet.labUrl'))  { return; }
    return this.get('codeSnippet.labUrl').replace(/\/edit.*/, '/quiet');
  }.property('codeSnippet.labUrl'),

  actions: {
    toggleDetail: function(){
      this.set('showInstructionDetail', !!!this.get('showInstructionDetail'));
    },
    viewCode: function(){
      this.set('showingCode', true);
    },
    viewExample: function(){
      this.set('showingCode', false);
    },
    triggerReload: function(){
      this.set('showingCode', false);
      this.set('reloadExample', !!!this.get('reloadExample'));
    },
    revert: function(){
      this.set('reloadLab', !!!this.get('reloadLab'));
    }
  }
});

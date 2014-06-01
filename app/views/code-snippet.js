export
default Ember.View.extend({
  showInstructionDetail: Ember.computed.alias('controller.showInstructionDetail'),
  codeSnippet: Ember.computed.alias('controller.codeSnippet'),

  didInsertElement: function() {
    this.onShowInstructionDetailChange();
  },

  onShowInstructionDetailChange: function() {
    Ember.run.later(this, function() {
      this.get('codeSnippet'); //consume all the observables
      this.get('showInstructionDetail'); //consume all the observables
      var $tutorialContainer = this.$().find('.tutorial-container');
      var $code = this.$().find('.code-container');
      var $howItWorks = this.$().find('.how-it-works');
      $code.css({
        'max-height': $tutorialContainer.innerHeight() - $howItWorks.outerHeight()
      });
    }, 500);
  }.observes('showInstructionDetail', 'codeSnippet')

});

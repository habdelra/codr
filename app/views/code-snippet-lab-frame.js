export default Ember.View.extend({
  tagName: 'iframe',
  classNames: ['try-it-frame'],
  labUrl: Ember.computed.alias('controller.codeSnippet.labUrl'),
  attributeBindings: ['labUrl:src']
});

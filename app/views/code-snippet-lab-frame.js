import labFrame from 'codr/mixins/lab-frame';

export default Ember.View.extend(labFrame, {
  model: Ember.computed.alias('controller.codeSnippet')
});

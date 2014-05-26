export default Ember.Controller.extend({
  needs: ['sections'],
  sections: Ember.computed.alias('controllers.sections.sections'),
  section: Ember.computed.alias('section')

});

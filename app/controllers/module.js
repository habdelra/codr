export default Ember.Controller.extend({
  needs: ['modules'],
  modules: Ember.computed.alias('controllers.modules.modules'),
  module: Ember.computed.alias('content')
});

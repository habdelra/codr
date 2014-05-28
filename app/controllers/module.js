export default Ember.Controller.extend({
  needs: ['modules'],
  modules: Ember.computed.alias('controllers.modules.modules'),
  module: Ember.computed.alias('content'),
  dasherizedTitle: function(){
    return Ember.String.dasherize(this.get('module.title'));
  }.property('module.title')

});

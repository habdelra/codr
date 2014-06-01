export default Ember.Mixin.create({
  tagName: 'iframe',
  classNames: ['try-it-frame'],
  labUrl: Ember.computed.alias('model.labUrl'),
  reloadLab: Ember.computed.alias('controller.reloadLab'),
  attributeBindings: ['labUrl:src'],

  didInsertElement: function(){
    this._super();
    this.set('reloadLab', false);
  },

  onReloadLabChange: function(){
    this.get('reloadLab'); //consume the prop being observed
    this.$()[0].src = this.get('labUrl');
  }.observes('reloadLab')

});

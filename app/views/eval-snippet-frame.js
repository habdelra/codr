export default Ember.View.extend({
  tagName: 'iframe',
  classNames: ['eval-frame'],
  runUrl: Ember.computed.alias('controller.runUrl'),
  attributeBindings: ['runUrl:src'],
  reloadExample: Ember.computed.alias('controller.reloadExample'),

  didInsertElement: function(){
    this.set('reloadExample', false);
  },

  onReloadExampleChange: function(){
    this.get('reloadExample'); //consume the prop being observed
    this.$()[0].src = this.get('runUrl');
  }.observes('reloadExample'),

  click: function(evt){
    evt.preventDefault(); //stop the edit button in jsbin
  }

});

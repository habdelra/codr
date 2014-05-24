export default Ember.Mixin.create({

  didInsertElement: function(){
    this._super();
    var windowHeight = $(window).height() - 200;
    this.$().css({
      'min-height': windowHeight
    });
  }

});

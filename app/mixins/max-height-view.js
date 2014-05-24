export default Ember.Mixin.create({

  didInsertElement: function(){
    this._super();
    var topPadding = parseInt(this.$().css('padding-top').replace('px', ''), 10);
    var bottomPadding = parseInt(this.$().css('padding-bottom').replace('px', ''), 10);
    var windowHeight = $(window).height() - (topPadding + bottomPadding);
    this.$().css({
      'min-height': windowHeight
    });
  }

});

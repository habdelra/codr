import Ember from 'ember';
export default Ember.Mixin.create({

  init: function() {
    this._super();
    var view = this;

    var resizeHandler = function() {
      view.rerender();
    };

    this.set('resizeHandler', resizeHandler);
    $(window).bind('resize', this.get('resizeHandler'));
  },

  willDestroy: function() {
    this._super();
    $(window).unbind('resize', this.get('resizeHandler'));
  },

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

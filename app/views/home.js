export
default Ember.View.extend({

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

  didInsertElement: function() {
    var $titleContainer = this.$().find('.title-container');
    var topPadding = parseInt($titleContainer.css('padding-top').replace('px', ''), 10);
    var bottomPadding = parseInt($titleContainer.css('padding-bottom').replace('px', ''), 10);
    var windowHeight = $(window).height() - (topPadding + bottomPadding) - 30;
    var titleHeight = 300;

    this.$().find('.title-container, .intro-container').css({
      'min-height': windowHeight
    });
    this.$().find('.title').css({
      'margin-top': (windowHeight / 2) - (titleHeight / 2) - 30
    });

  }
});

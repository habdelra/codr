export default Ember.View.extend({
  classNames: ['home'],

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
    var _this = this;
    var $window = $(window);
    var $titleContainer = this.$().find('.title-container');
    var topPadding = parseInt($titleContainer.css('padding-top').replace('px', ''), 10);
    var rightPadding = parseInt($titleContainer.css('padding-right').replace('px', ''), 10);
    var leftPadding = parseInt($titleContainer.css('padding-left').replace('px', ''), 10);
    var bottomPadding = parseInt($titleContainer.css('padding-bottom').replace('px', ''), 10);
    var windowHeight = $window.height() - (topPadding + bottomPadding);
    var windowWidth = $window.width() - (rightPadding + leftPadding);
    var titleHeight = 300;

    this.$().find('.title-container, .intro-container').css({
      'min-height': windowHeight,
      'width': windowWidth - 30
    });
    this.$().find('.title').css({
      'margin-top': (windowHeight / 2) - (titleHeight / 2)
    });
    this.$().css({
      width: (2 * windowWidth) +  (2 * leftPadding) + rightPadding - 10
    });

    $titleContainer.unbind('click').click(function(){
      $('body').animate({
        scrollLeft: _this.$().find('.intro-container').offset().left
      });
    });
  }
});

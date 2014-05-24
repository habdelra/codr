export default Ember.View.extend({

  didInsertElement: function(){
    var $titleContainer = this.$().find('.title-container');
    var topPadding = parseInt($titleContainer.css('padding-top').replace('px', ''), 10);
    var bottomPadding = parseInt($titleContainer.css('padding-bottom').replace('px', ''), 10);
    var windowHeight = $(window).height() - (topPadding + bottomPadding) - 30;

    this.$().find('.title-container, .intro-container').css({
      'min-height': windowHeight
    });

  }
});

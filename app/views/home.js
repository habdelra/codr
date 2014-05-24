export default Ember.View.extend({

  didInsertElement: function(){
    var windowHeight = $(window).height() - 230;

    this.$().find('.title-container, .intro-container').css({
      'min-height': windowHeight
    });

  }
});

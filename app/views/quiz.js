export default Ember.View.extend({
  classNames: ['quiz-container'],

  didInsertElement: function(){
    var windowHeight = $(window).height() - 200;

    this.$().css({
      'min-height': windowHeight
    });

  }
});

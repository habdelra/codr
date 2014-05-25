var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.route('home');
  this.resource('quiz', { path: '/quiz' }, function(){
    this.route('question1');
    this.route('result');
  });
  this.resource('javascript', { path: '/javascript' }, function(){
    this.resource('reference', { path: '/reference' }, function(){
      this.resource('topic-items', { path: '/topic-items' }, function(){
        this.resource('topic-item', { path: '/:topic_item_id' });
      });
      this.route('motion');
      this.route('control');
      this.route('operators');
    });
    this.resource('examples', { path: '/examples' }, function(){
      this.route('example1');
      this.route('example2');
      this.route('example3');
    });
  });
});

export default Router;

var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.route('home');
  this.resource('quiz', { path: '/quiz' }, function(){
    this.route('question1');
  });
  this.resource('javascript', { path: '/javascript' }, function(){
    this.resource('reference', { path: '/reference' }, function(){
      this.route('events');
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

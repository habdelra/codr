import Ember from 'ember';

var Router = Ember.Router.extend({
  location: CodrENV.locationType
});

Router.map(function() {
  this.route('home');
  this.resource('quiz', { path: '/quiz' }, function(){
    this.route('question1');
    this.route('question2');
    this.route('question3');
    this.route('result');
  });
  //TODO: convert the javascript resource to a generic language resource
  this.resource('javascript', { path: '/javascript' }, function(){
    this.resource('modules', { path: '/modules' }, function(){
      this.resource('module', { path: '/:module_id' }, function() {
        this.resource('topics', { path: '/topics' }, function(){
          this.resource('topic', { path: '/:topic_id' }, function(){
            this.resource('topic-items', { path: '/topic-items' }, function(){
              this.resource('topic-item', { path: '/:topic_item_id' });
            });
            this.resource('code-snippets', { path: '/code-snippets' }, function(){
              this.resource('code-snippet', { path: '/:code_snippet_id' });
            });
          });
        });
      });
    });
  });


  this.resource('widget-topics', { path: '/widget' }, function(){
    this.resource('widget-topic', { path: '/:topic_id' }, function(){
      this.resource('widget-topic-items', { path: '/topic-items' }, function(){
        this.resource('widget-topic-item', { path: '/:topic_item_id' });
      });
    });
  });
});

export default Router;

var Module = DS.Model.extend({
  title: DS.attr('string'),
  topicItems: DS.hasMany('topic-item', { async: true })
});

Module.reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'events',
    topicItems: [1, 2]
  }, {
    id: 2,
    title: 'motion'
  }, {
    id: 3,
    title: 'control'
  }, {
    id: 4,
    title: 'operators'
  }]
});

export default Module;

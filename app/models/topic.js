var Topic = DS.Model.extend({
  title: DS.attr('string'),
  topicItems: DS.hasMany('topic-item', { async: true })
});

Topic.reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'events',
    topicItems: [1, 2, 3]
  }, {
    id: 2,
    title: 'motion',
    topicItems: [4, 5, 6, 7, 8]
  }, {
    id: 3,
    title: 'control',
    topicItems: [9999]
  }, {
    id: 4,
    title: 'operators',
    topicItems: [9999]
  }]
});

export default Topic;

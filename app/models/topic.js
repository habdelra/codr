import types from 'codr/utils/topic-types';

var Topic = DS.Model.extend({
  title: DS.attr('string'),
  type: DS.attr('string'),
  topicItems: DS.hasMany('topic-item', { async: true }),
  codeSnippets: DS.hasMany('code-snippet', { async: true })
});

Topic.reopenClass({
  FIXTURES: [{
    id: 1,
    type: types.TOPIC_ITEMS,
    title: 'events',
    topicItems: [1, 2, 3]
  }, {
    id: 2,
    type: types.TOPIC_ITEMS,
    title: 'motion',
    topicItems: [4, 5, 6, 7, 8]
  }, {
    id: 3,
    type: types.TOPIC_ITEMS,
    title: 'control',
    topicItems: [9, 10, 11, 12]
  }, {
    id: 4,
    type: types.TOPIC_ITEMS,
    title: 'operators',
    topicItems: [13, 14, 15, 16, 17, 18]
  }, {
    id: 5,
    type: types.CODE_SNIPPETS,
    title: 'example 1',
    codeSnippets: [1, 11, 2, 3, 4, 5, 6, 8, 7, 9, 10]
  }, {
    id: 6,
    type: types.CODE_SNIPPETS,
    title: 'example 2',
    codeSnippets: [9999]
  }, {
    id: 7,
    type: types.CODE_SNIPPETS,
    title: 'example 3',
    codeSnippets: [9999]
  }]
});

export default Topic;

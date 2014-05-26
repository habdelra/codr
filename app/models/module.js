var Module = DS.Model.extend({
  title: DS.attr('string'),
  topics: DS.hasMany('topic', { async: true })
});

Module.reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'block references',
    topics: [ 1, 2, 3, 4 ]
  }, {
    id: 2,
    title: 'examples',
    topics: [ ]
  }]
});

export default Module;

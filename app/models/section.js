var Section = DS.Model.extend({
  title: DS.attr('string'),
  modules: DS.hasMany('module', { async: true })
});

Section.reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'block references',
    modules: [ 1, 2, 3, 4 ]
  }, {
    id: 2,
    title: 'examples',
    modules: [ ]
  }]
});

export default Section;

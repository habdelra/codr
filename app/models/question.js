var Question = DS.Model.extend({
  text: DS.attr('string'),
  answers: DS.hasMany('answer')
});

Question.reopenClass({
  FIXTURES: [{
    id: 1,
    text: 'Question 1',
    answers: [{
      id: 1
    }, {
      id: 2
    }]
  }, {
    id: 2,
    text: 'Question 2',
    answers: [{
      id: 3
    }, {
      id: 4
    }]
  }]
});

export default Question;

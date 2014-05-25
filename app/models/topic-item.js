var TopicItem = DS.Model.extend({
  title: DS.attr('string'),
  instructionPartial: DS.attr('string'),
  examplePartial: DS.attr('string'),
  imageUrl: DS.attr('string')
});

TopicItem.reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'Green Flag Scratch Event Block',
    instructionPartial: 'content/topic-items/event-green-flag-how-it-works',
    examplePartial: 'content/topic-items/event-green-flag-code',
    imageUrl: 'images/Scratch_blocks/Events/2.0_When_Green_Flag_Clicked.png'
  }, {
    id: 2,
    title: 'Space Key Press Scratch Event Block',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Events/2.0_When_()_Key_Pressed.png'
  }]
});

export default TopicItem;

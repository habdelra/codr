var TopicItem = DS.Model.extend({
  title: DS.attr('string'),
  instructionPartial: DS.attr('string'),
  examplePartial: DS.attr('string'),
  imageUrl: DS.attr('string'),
  imageStyle: DS.attr('string'),
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
  }, {
    id: 3,
    title: 'Sprite Click Scratch Event Block',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Events/2.0_When_This_Sprite_Clicked.png'
  }, {
    id: 4,
    title: 'Move Right Scratch Motion Blocks',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Motion/2.0_Point_in_Direction_().png|images/Scratch_blocks/Motion/2.0_Move_()_Steps.png'
  }, {
    id: 5,
    title: 'Move Down Scratch Motion Blocks',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Motion/Steps_180.png|images/Scratch_blocks/Motion/2.0_Move_()_Steps.png',
    imageStyle: 'width:150px; height:33px; margin-left:-5px; margin-bottom:-8px|*'
  }, {
    id: 6,
    title: 'Move Left Scratch Motion Blocks',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Motion/Steps_-90.png|images/Scratch_blocks/Motion/2.0_Move_()_Steps.png',
    imageStyle: 'width:154px; height:36px; margin-left:-7px; margin-bottom:-9px|*'
  }, {
    id: 7,
    title: 'Move Right Scratch Motion Blocks',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Motion/Steps_0.png|images/Scratch_blocks/Motion/2.0_Move_()_Steps.png',
    imageStyle: 'width:141px; height:33px; margin-left:-7px; margin-bottom:-8px|*'
  }, {
    id: 8,
    title: 'Rotate Scratch Motion Blocks',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Motion/2.0_Turn_()_Degrees.png',
    imageStyle: '*|height:25px; overflow:hidden;'
  }]
});

export default TopicItem;

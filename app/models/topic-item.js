var TopicItem = DS.Model.extend({
  title: DS.attr('string'),
  instructionPartial: DS.attr('string'),
  examplePartial: DS.attr('string'),
  imageUrl: DS.attr('string'),
  imageStyle: DS.attr('string'),
});

TopicItem.reopenClass({
  FIXTURES: [{
    id: 9999,
    title: 'Place holder topic item',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo'
  }, {
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
  }, {
    id: 9,
    title: 'Loop Forever Scratch Control Block',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Control/2.0_Forever.png'
  }, {
    id: 10,
    title: 'If/Else Scratch Control Block',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Control/2.0_If_()_Then,_Else.png'
  }, {
    id: 11,
    title: 'Repeat Scratch Control Block',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Control/2.0_Repeat_().png'
  }, {
    id: 12,
    title: 'Wait Scratch Control Block',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Control/2.0_Wait_()_Secs.png'
  }, {
    id: 13,
    title: 'Equals Scratch Operator Block',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Operators/2.0_()_=_().png'
  }, {
    id: 14,
    title: 'And Scratch Operator Block',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Operators/2.0_()_and_().png'
  }, {
    id: 15,
    title: 'Greater Than Scratch Operator Block',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Operators/2.0_()_is_Greater_Than_().png'
  }, {
    id: 16,
    title: 'Less Than Scratch Operator Block',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Operators/2.0_()_is_Less_Than_().png'
  }, {
    id: 17,
    title: 'Or Scratch Operator Block',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Operators/2.0_()_or_().png'
  }, {
    id: 18,
    title: 'Not Scratch Operator Block',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Operators/2.0_Not_().png'
  }]
});

export default TopicItem;

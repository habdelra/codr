var CodeSnippet = DS.Model.extend({
  title: DS.attr('string'),
  imageUrl: DS.attr('string'),
  imageStyle: DS.attr('string'),
  examplePartial: DS.attr('string'),
  instructionPartial: DS.attr('string'),
  labUrl: DS.attr('string')
});

CodeSnippet.reopenClass({
  FIXTURES: [{
    id: 9999,
    title: 'missing content',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Events/2.0_When_Green_Flag_Clicked.png'
  },{
    id: 1,
    title: 'Start Scratch Block',
    instructionPartial: 'content/code-snippets/example1-start-activity',
    examplePartial: 'content/code-snippets/example1-snippet1',
    imageUrl: 'images/Scratch_blocks/Events/2.0_When_Green_Flag_Clicked.png',
    labUrl: 'http://jsbin.com/ficewami/4/embed?js,output'
  }, {
    id: 2,
    title: 'Point in direction 90 Scratch Block',
    instructionPartial: 'content/code-snippets/example1-point',
    examplePartial: 'content/code-snippets/example1-all',
    imageUrl: 'images/Scratch_examples/Example1_IndivBlocks_01.png',
    imageStyle: 'width:140px; height:31px|margin-top:-12px; margin-left:-1px',
    labUrl: 'http://jsbin.com/ficewami/4/embed?js,output'
  }, {
    id: 3,
    title: 'Set xoffset variable to 0 Scratch Block',
    instructionPartial: 'content/code-snippets/example1-set-xoffset',
    examplePartial: 'content/code-snippets/example1-snippet2',
    imageUrl: 'images/Scratch_examples/Example1_IndivBlocks_02.png',
    imageStyle: 'width:129px; height:32px|margin-top:-10px; margin-left:-3px',
    labUrl: 'http://jsbin.com/ficewami/4/embed?js,output'
  }, {
    id: 4,
    title: 'Set yoffset variable to 0 Scratch Block',
    instructionPartial: 'content/code-snippets/example1-set-yoffset',
    examplePartial: 'content/code-snippets/example1-snippet3',
    imageUrl: 'images/Scratch_examples/Example1_IndivBlocks_03.png',
    imageStyle: 'width:129px; height:32px|margin-top:-9px; margin-left:-3px',
    labUrl: 'http://jsbin.com/ficewami/4/embed?js,output'
  }, {
    id: 5,
    title: 'Go to 0,0 Scratch Block',
    instructionPartial: 'content/code_snippets/example1-goto',
    examplePartial: 'content/code-snippets/example1-all',
    imageUrl: 'images/Scratch_examples/Example1_IndivBlocks_04.png',
    imageStyle: 'width:108px; height:31px|margin-top:-10px; margin-left:-3px',
    labUrl: 'http://jsbin.com/ficewami/4/embed?js,output'
  }, {
    id: 6,
    title: 'Repeat 4 times Scratch Block',
    instructionPartial: 'content/code-snippets/example1-repeat',
    examplePartial: 'content/code-snippets/example1-snippet4',
    imageUrl: 'images/Scratch_examples/Example1_IndivBlocks_09.png',
    imageStyle: 'height:136px; width:88px;|margin-top:-8px; margin-left:-2px',
    labUrl: 'http://jsbin.com/ficewami/4/embed?js,output'
  }, {
    id: 7,
    title: 'Glide right Scratch Block',
    instructionPartial: 'content/code-snippets/example1-glide-right',
    examplePartial: 'content/code-snippets/example1-snippet7',
    imageUrl: 'images/Scratch_examples/Example1_IndivBlocks_05.png',
    imageStyle: 'height:37px; width:264px;|margin-top:-11px; margin-left:12px',
    labUrl: 'http://jsbin.com/ficewami/4/embed?js,output'
  }, {
    id: 8,
    title: 'Increment xoffset Scratch Block',
    instructionPartial: 'content/code-snippets/example1-change-xoffset',
    examplePartial: 'content/code-snippets/example1-snippet5',
    imageUrl: 'images/Scratch_examples/Example1_IndivBlocks_08.png',
    imageStyle: 'width:153px; height:32px|margin-top:-118px; margin-left:12px',
    labUrl: 'http://jsbin.com/ficewami/4/embed?js,output'
  }, {
    id: 9,
    title: 'Increment yoffset Scratch Block',
    instructionPartial: 'content/code-snippets/example1-change-yoffset',
    examplePartial: 'content/code-snippets/example1-snippet6',
    imageUrl: 'images/Scratch_examples/Example1_IndivBlocks_07.png',
    imageStyle: 'width:155px; height:32px|margin-top:-11px; margin-left:12px',
    labUrl: 'http://jsbin.com/ficewami/4/embed?js,output'
  }, {
    id: 10,
    title: 'Glide up Scratch Block',
    instructionPartial: 'content/code-snippets/example1-glide-up',
    examplePartial: 'content/code-snippets/example1-snippet8',
    imageUrl: 'images/Scratch_examples/Example1_IndivBlocks_05.png',
    imageStyle: 'height:37px; width:264px;|margin-top:-11px; margin-left:12px',
    labUrl: 'http://jsbin.com/ficewami/4/embed?js,output'
  }, {
    id: 11,
    title: 'Show Scratch Block',
    instructionPartial: 'content/code-snippets/example1-show',
    examplePartial: 'content/code-snippets/example1-all',
    imageUrl: 'images/Scratch_blocks/show-block.png',
    imageStyle: 'height:34px; width:50px;|margin-top:-7px; margin-left:-5px',
    labUrl: 'http://jsbin.com/ficewami/4/embed?js,output'
  }]
});

export default CodeSnippet;

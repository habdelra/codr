var CodeSnippet = DS.Model.extend({
  title: DS.attr('string'),
  imageUrl: DS.attr('string'),
  imageStyle: DS.attr('string'),
  examplePartial: DS.attr('string'),
  instructionPartial: DS.attr('string'),
  labUrl: DS.attr('string'),
  containedSnippets: DS.hasMany('code-snippet')
});

CodeSnippet.reopenClass({
  FIXTURES: [{
    id: 9999,
    title: '(Content not yet loaded)',
    instructionPartial: 'content/todo',
    examplePartial: 'content/todo',
    imageUrl: 'images/Scratch_blocks/Events/2.0_When_Green_Flag_Clicked.png'
  }, {
    id: 9998,
    title: 'Catch the Cat!',
    instructionPartial: 'content/todo-kitty',
    examplePartial: 'content/todo',
    labUrl: 'http://jsbin.com/yaximuke/29/edit?js,output',
    imageUrl: 'images/Scratch_blocks/Events/2.0_When_Green_Flag_Clicked.png'
  },

  
 // Cat step example 
  {
    id: 1,
    title: 'Start Scratch Block',
    instructionPartial: 'content/code-snippets/example1-start-activity',
    examplePartial: 'content/code-snippets/example1-snippet1',
    imageUrl: 'images/Scratch_blocks/Events/2.0_When_Green_Flag_Clicked.png',
    labUrl: 'http://jsbin.com/ficewami/4/edit?js,output'
  }, {
    id: 2,
    title: 'Point in direction 90 Scratch Block',
    instructionPartial: 'content/code-snippets/example1-point',
    examplePartial: 'content/code-snippets/example1-snippet10',
    imageUrl: 'images/Scratch_examples/Example1_IndivBlocks_01.png',
    imageStyle: 'width:140px; height:31px|margin-top:-12px; margin-left:-1px',
    labUrl: 'http://jsbin.com/ficewami/4/edit?js,output'
  }, {
    id: 3,
    title: 'Set xoffset variable to 0 Scratch Block',
    instructionPartial: 'content/code-snippets/example1-set-xoffset',
    examplePartial: 'content/code-snippets/example1-snippet2',
    imageUrl: 'images/Scratch_examples/Example1_IndivBlocks_02.png',
    imageStyle: 'width:129px; height:32px|margin-top:-10px; margin-left:-3px',
    labUrl: 'http://jsbin.com/ficewami/4/edit?js,output'
  }, {
    id: 4,
    title: 'Set yoffset variable to 0 Scratch Block',
    instructionPartial: 'content/code-snippets/example1-set-yoffset',
    examplePartial: 'content/code-snippets/example1-snippet3',
    imageUrl: 'images/Scratch_examples/Example1_IndivBlocks_03.png',
    imageStyle: 'width:129px; height:32px|margin-top:-9px; margin-left:-3px',
    labUrl: 'http://jsbin.com/ficewami/4/edit?js,output'
  }, {
    id: 5,
    title: 'Go to 0,0 Scratch Block',
    instructionPartial: 'content/code_snippets/example1-goto',
    examplePartial: 'content/code-snippets/example1-snippet11',
    imageUrl: 'images/Scratch_examples/Example1_IndivBlocks_04.png',
    imageStyle: 'width:108px; height:31px|margin-top:-10px; margin-left:-3px',
    labUrl: 'http://jsbin.com/ficewami/4/edit?js,output'
  }, {
    id: 6,
    title: 'Repeat 4 times Scratch Block',
    instructionPartial: 'content/code-snippets/example1-repeat',
    examplePartial: 'content/code-snippets/example1-snippet4',
    imageUrl: 'images/Scratch_examples/Example1_IndivBlocks_09.png',
    imageStyle: 'height:136px; width:88px;|margin-top:-8px; margin-left:-2px',
    labUrl: 'http://jsbin.com/ficewami/4/edit?js,output',
    containedSnippets: [7, 8, 9, 10]
  }, {
    id: 7,
    title: 'Glide right Scratch Block',
    instructionPartial: 'content/code-snippets/example1-glide-right',
    examplePartial: 'content/code-snippets/example1-snippet7',
    imageUrl: 'images/Scratch_examples/Example1_IndivBlocks_05.png',
    imageStyle: 'height:37px; width:264px;|margin-top:-11px; margin-left:12px',
    labUrl: 'http://jsbin.com/ficewami/4/edit?js,output'
  }, {
    id: 8,
    title: 'Increment xoffset Scratch Block',
    instructionPartial: 'content/code-snippets/example1-change-xoffset',
    examplePartial: 'content/code-snippets/example1-snippet5',
    imageUrl: 'images/Scratch_examples/Example1_IndivBlocks_08.png',
    imageStyle: 'width:153px; height:32px|margin-top:-118px; margin-left:12px',
    labUrl: 'http://jsbin.com/ficewami/4/edit?js,output'
  }, {
    id: 9,
    title: 'Increment yoffset Scratch Block',
    instructionPartial: 'content/code-snippets/example1-change-yoffset',
    examplePartial: 'content/code-snippets/example1-snippet6',
    imageUrl: 'images/Scratch_examples/Example1_IndivBlocks_07.png',
    imageStyle: 'width:155px; height:32px|margin-top:-11px; margin-left:12px',
    labUrl: 'http://jsbin.com/ficewami/4/edit?js,output'
  }, {
    id: 10,
    title: 'Glide up Scratch Block',
    instructionPartial: 'content/code-snippets/example1-glide-up',
    examplePartial: 'content/code-snippets/example1-snippet8',
    imageUrl: 'images/Scratch_examples/Example1_IndivBlocks_05.png',
    imageStyle: 'height:37px; width:264px;|margin-top:-11px; margin-left:12px',
    labUrl: 'http://jsbin.com/ficewami/4/edit?js,output'
  }, {
    id: 11,
    title: 'Show Scratch Block',
    instructionPartial: 'content/code-snippets/example1-show',
    examplePartial: 'content/code-snippets/example1-snippet9',
    imageUrl: 'images/Scratch_blocks/show-block.png',
    imageStyle: 'height:34px; width:50px;|margin-top:-7px; margin-left:-5px',
    labUrl: 'http://jsbin.com/ficewami/4/edit?js,output'
  }, 
  
 // Cat walk example 
  {
    id: 12,
    title: 'Green Flag Scratch Block',
    instructionPartial: 'content/code-snippets/example1-start-activity',
    examplePartial: 'content/code-snippets/example2-snippet1',
    labUrl: 'http://jsbin.com/cekiq/1/edit?js,output',
    imageUrl: 'images/Scratch_examples/walk-cat/greenflag.png',
    imageStyle: 'width:108px; height:41px'
  },{
    id: 13,
    title: 'Show Scratch Block',
    instructionPartial: 'content/code-snippets/example1-show',
    examplePartial: 'content/code-snippets/example2-snippet2',
    labUrl: 'http://jsbin.com/cekiq/1/edit?js,output',
    imageUrl: 'images/Scratch_examples/walk-cat/show.png',
    imageStyle: 'width:39px;|margin-top:-1px;'
  }, {
    id: 14,
    title: 'Point Scratch Block',
    instructionPartial: 'content/code-snippets/example1-point',
    examplePartial: 'content/code-snippets/example2-snippet3',
    labUrl: 'http://jsbin.com/cekiq/1/edit?js,output',
    imageUrl: 'images/Scratch_examples/walk-cat/point-in-direction-90.png',
    imageStyle: 'width:134px;|margin-top:-1px;'
  }, {
    id: 15,
    title: 'Go To Scratch Block',
    instructionPartial: 'content/code-snippets/example1-goto',
    examplePartial: 'content/code-snippets/example2-snippet4',
    labUrl: 'http://jsbin.com/cekiq/1/edit?js,output',
    imageUrl: 'images/Scratch_examples/walk-cat/goto-origin.png',
    imageStyle: 'width:101px;|margin-top:-1px;'
  }, {
    id: 16,
    title: 'Set Variable Scratch Block',
    instructionPartial: 'content/code-snippets/example2-set-moving-1',
    examplePartial: 'content/code-snippets/example2-snippet5',
    labUrl: 'http://jsbin.com/cekiq/1/edit?js,output',
    imageUrl: 'images/Scratch_examples/walk-cat/set-is-moving-to-1.png',
    imageStyle: 'width:130px;|margin-top:-1px;'
  }, {
    id: 17,
    title: 'Broadcast Scratch Block',
    instructionPartial: 'content/code-snippets/example2-broadcast',
    examplePartial: 'content/code-snippets/example2-snippet6',
    labUrl: 'http://jsbin.com/cekiq/1/edit?js,output',
    imageUrl: 'images/Scratch_examples/walk-cat/broadcast-move.png',
    imageStyle: 'width:115px;|margin-top:-1px;'
  }, {
    id: 18,
    title: 'Glide Scratch Block',
    instructionPartial: 'content/code-snippets/example2-glide',
    examplePartial: 'content/code-snippets/example2-snippet7',
    labUrl: 'http://jsbin.com/cekiq/1/edit?js,output',
    imageUrl: 'images/Scratch_examples/walk-cat/glide.png',
    imageStyle: 'width:172px;|margin-top:-1px;'
  }, {
    id: 19,
    title: 'Set Variable Scratch Block',
    instructionPartial: 'content/code-snippets/example2-set-moving-0',
    examplePartial: 'content/code-snippets/example2-snippet8',
    labUrl: 'http://jsbin.com/cekiq/1/edit?js,output',
    imageUrl: 'images/Scratch_examples/walk-cat/set-is-moving-to-0.png',
    imageStyle: 'width:130px;|margin-top:-1px;'
  }, {
    id: 20,
    title: 'Receive Event Scratch Block',
    instructionPartial: 'content/code-snippets/example2-receive',
    examplePartial: 'content/code-snippets/example2-snippet9',
    labUrl: 'http://jsbin.com/cekiq/1/edit?js,output',
    imageUrl: 'images/Scratch_examples/walk-cat/when-receive-moving.png',
    imageStyle: 'width:144px;|margin-top:15px;'
  }, {
    id: 21,
    title: 'Repeat Scratch Block',
    instructionPartial: 'content/code-snippets/example2-repeat',
    examplePartial: 'content/code-snippets/example2-snippet10',
    labUrl: 'http://jsbin.com/cekiq/1/edit?js,output',
    containedSnippets: [22, 23],
    imageUrl: 'images/Scratch_examples/walk-cat/repeat-until-is-not-moving.png',
    imageStyle: 'width:192px;|margin-top:-3px;'
  }, {
    id: 22,
    title: 'Wait Scratch Block',
    instructionPartial: 'content/code-snippets/example2-wait',
    examplePartial: 'content/code-snippets/example2-snippet11',
    labUrl: 'http://jsbin.com/cekiq/1/edit?js,output',
    imageUrl: 'images/Scratch_examples/walk-cat/wait-02-secs.png',
    imageStyle: 'width:88px;|margin-top:-61px; margin-left:15px'
  }, {
    id: 23,
    title: 'Next Costume Scratch Block',
    instructionPartial: 'content/code-snippets/example2-next-costume',
    examplePartial: 'content/code-snippets/example2-snippet12',
    labUrl: 'http://jsbin.com/cekiq/1/edit?js,output',
    imageUrl: 'images/Scratch_examples/walk-cat/next-costume.png',
    imageStyle: 'width:85px;|margin-top:0px; margin-left:15px'
  }]
});

export default CodeSnippet;

$(document).ready(function(){
  var words = [
    {
      word: 'it',
      section: '1',
      pos: ['a1','a2']
    },
    {
      word: 'is',
      section: '1',
      pos: ['a4','a5']
    },
    {
      word: 'half',
      section: '1',
      pos: ['a7','a8','a9','a10']
    },
    {
      word: 'twenty',
      section: '1',
      pos: ['b1','b2','b3','b4','b5','b6']
    },
    {
      word: 'five',
      section: '1',
      pos: ['b7','b8','b9','b10']
    },
    {
      word: 'quarter',
      section: '1',
      pos: ['c1','c2','c3','c4','c5','c6','c7']
    },
    {
      word: 'ten',
      section: '1',
      pos: ['c9','c10','c11']
    },
    {
      word: 'minutes',
      section: '1',
      pos: ['d1','d2','d3','d4','d5','d6','d7']
    },
    {
      word: 'to',
      section: '1',
      pos: ['d9','d10']
    },
    {
      word: 'past',
      section: '1',
      pos: ['e1','e2','e3','e4']
    },
    {
      word: 'twelve',
      section: '2',
      pos: ['e6','e7','e8','e9','e10','e11']
    },
    {
      word: 'one',
      section: '2',
      pos: ['f1','f2','f3']
    },
    {
      word: 'six',
      section: '2',
      pos: ['f4','f5','f6']
    },
    {
      word: 'three',
      section: '2',
      pos: ['f7','f8','f9','f10','f11']
    },
    {
      word: 'four',
      section: '2',
      pos: ['g1','g2','g3','g4']
    },
    {
      word: 'ten',
      section: '2',
      pos: ['g6','g7','g8']
    },
    {
      word: 'two',
      section: '2',
      pos: ['g9','g10','g11']
    },
    {
      word: 'eight',
      section: '2',
      pos: ['h1','h2','h3','h4','h5']
    },
    {
      word: 'eleven',
      section: '2',
      pos: ['h6','h7','h8','h9','h10','h11']
    },
    {
      word: 'seven',
      section: '2',
      pos: ['i1','i2','i3','i4','i5']
    },
    {
      word: 'nine',
      section: '2',
      pos: ['i7','i8','i9','i10']
    },
    {
      word: 'five',
      section: '2',
      pos: ['j1','j2','j3','j4']
    },
    {
      word: 'oclock',
      section: '2',
      pos: ['j6','j7','j8','j9','j10','j11']
    }
  ];

  setLetters(moment().format('h'),moment().format('mm'));

  function setLetters(hours, min){
    if(min<32){
      $('.d9, .d10').addClass('active');
      $('.e1, .e2, .e3, .e4').removeClass('active');
    } else{
      $('.e1, .e2, .e3, .e4').addClass('active');
      $('.d9, .d10').removeClass('active');
    }
  }

});

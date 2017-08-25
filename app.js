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
      word: 'twentyfive',
      section: '1',
      pos: ['b1','b2','b3','b4','b5','b6','b7','b8','b9','b10']
    },
    {
      word: 'quarter',
      section: '1',
      pos: ['a8','c1','c2','c3','c4','c5','c6','c7']
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
      hour: 12,
      section: '2',
      pos: ['e6','e7','e8','e9','e10','e11']
    },
    {
      word: 'one',
      hour: 1,
      section: '2',
      pos: ['f1','f2','f3']
    },
    {
      word: 'six',
      hour: 6,
      section: '2',
      pos: ['f4','f5','f6']
    },
    {
      word: 'three',
      hour: 3,
      section: '2',
      pos: ['f7','f8','f9','f10','f11']
    },
    {
      word: 'four',
      hour: 4,
      section: '2',
      pos: ['g1','g2','g3','g4']
    },
    {
      word: 'ten',
      hour: 10,
      section: '2',
      pos: ['g6','g7','g8']
    },
    {
      word: 'two',
      hour: 2,
      section: '2',
      pos: ['g9','g10','g11']
    },
    {
      word: 'eight',
      hour: 8,
      section: '2',
      pos: ['h1','h2','h3','h4','h5']
    },
    {
      word: 'eleven',
      hour: 11,
      section: '2',
      pos: ['h6','h7','h8','h9','h10','h11']
    },
    {
      word: 'seven',
      hour: 7,
      section: '2',
      pos: ['i1','i2','i3','i4','i5']
    },
    {
      word: 'nine',
      hour: 9,
      section: '2',
      pos: ['i7','i8','i9','i10']
    },
    {
      word: 'five',
      hour: 5,
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
  var run = setInterval(function(){
    $('.tile').removeClass('active');
    setLetters(moment().format('h'),moment().format('mm'));
    console.log('running interval');
  },10000);

  function setLetters(hour, min){

    //set to / past
    if(min>27){
      var word = filterWords('to',1);
      lightUp(word[0].pos);
      var minutes = filterWords('minutes',1);
      lightUp(minutes[0].pos);
    } else{
      var word = filterWords('past',1);
      lightUp(word[0].pos);
      var minutes = filterWords('minutes',1);
      lightUp(minutes[0].pos);
    }

    setMinText(min);
    if(min<=32){
      setHourText(hour);
    } else{
      var nextHour = Math.round(hour) + 1;
      if(nextHour == 13){
        nextHour = 1;
      }
      setHourText(nextHour);

    }
  }

    function setMinText(min){
      lightUp(['a1','a2','a4','a5'])

      if((min>2 && min<=7) ||(min>52 && min<=57)){
        var word = filterWords('five',1);
        lightUp(word[0].pos);
      } else if((min>7 && min<=12) ||(min>47 && min<=52)){
        var word = filterWords('ten',1);
        lightUp(word[0].pos);
      } else if((min>12 && min<=17) ||(min>42 && min<=47)){
        var word = filterWords('quarter',1);
        lightUp(word[0].pos);
        var remove = ['d1','d2','d3','d4','d5','d6','d7'];
        removeActive(remove);
      } else if((min>12 && min<=22) || (min>37 && min<=42)){
        var word = filterWords('twenty',1);
        lightUp(word[0].pos);
      } else if((min>22 && min<=27) ||(min>32 && min<=37)){
        var word = filterWords('twentyfive',1);
        lightUp(word[0].pos);
      } else if(min>27 && min<=32){
        var word = filterWords('half',1);
        removeActive(['d1','d2','d3','d4','d5','d6','d7','d9','d10']);
        lightUp(word[0].pos);
        lightUp(['e1','e2','e3','e4']);
      } else {
        var remove =['d1','d2','d3','d4','d5','d6','d7','d9','d10','e1','e2','e3','e4'];
        removeActive(remove);
      }
    }

    function setHourText(hour){
      var word = filterHours(hour);
      lightUp(word[0].pos);
      lightUp( ['j6','j7','j8','j9','j10','j11']);
    }

    function filterHours(hour){
      return words.filter(function( obj ) {
        return obj.hour == hour;
      });
    }

    function filterWords(word, section){
      return words.filter(function( obj ) {
        return obj.word == word && obj.section == section;
      });
    }

    function lightUp(positions){
        positions.forEach(function(pos){
        $('.'+pos).addClass('active');
      })
    }

    function removeActive(positions){
      positions.forEach(function(pos){
        $('.'+pos).removeClass('active');
      })
    }

});

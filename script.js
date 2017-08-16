$("#round1-easy").click(function(e){
  e.preventDefault();
  $("#round1-easy").removeClass("active");
  //goal number and progress bar
  $("#goal").addClass("active");
  $("#calc").addClass("active");
  $("#progbar").addClass("active");
  $("#pointCalc").addClass("active");
  //random goalNumber
  var randGoal = Math.floor((Math.random() * 15) + 15);
  $('#goalNumber').text(randGoal);
  var randStart = Math.floor((Math.random() * 15) + 40);
  $('#startNumber').text(0);
  //create gameBoard
    for (i = 0; i < $('.col-md-1').length; i++) {
    var randNum = Math.floor((Math.random() * 9) + 1);
    var column = $('.col-md-1')[i];
    $(column).html('<a class="circles fill-'+ randNum +' butn'+(i+1)+'" href ="#">+'+ randNum + '</a>');
  };
  //progress bar and timer
  var round = 1;
  var j = 120;
  var barMove = function(){
    j--;
    if(j>0){
      $('.progress-bar').css('width', j/1.2 +'%');
    }
    else {
      $('.progress-bar').css('width', j/1.2 +'%');
      $('.circles').addClass('clicked');
      $('.circles').html('X');
      $('.end').addClass('activated');
      $('.endGame').addClass('active');
      if(round == 1) {
        $('.round3-easy').removeClass('active');
      }
      else if( round == 2){
        $('.round2-easy').removeClass('active');
      }
      else{
        $('.round2-easy').removeClass('active');
        $('.round3-easy').removeClass('active');
      };
    };
  };
  var counterBack = setInterval(barMove, 1000);
// calculator and points
var total = 0;
var points = 0;
var totalPoints = 0;
var calculation = "";
var solutionArray = [];
var butnPosition = 0;
$(".circles").click(function(e){
  e.preventDefault();
  var content = parseInt($(this).text());
  // already clicked
  if($(this).hasClass('clicked') == true) {
    $('.circles').removeClass('clicked');
    calculation = "0" + "+" + content;
    total = content;
    $(this).addClass('clicked');
    for(l=0;l < $('.col-md-1').length; l++) {
      if($(this).hasClass('butn'+ (l+1))) {
        butnPosition = l+1;
      };
    };
  }
  // not clicked already
  else {
    $(this).addClass('clicked');
    // first click
    if (calculation == "") {
      calculation = "0" + "+" + content;
      total = content;
      for(l=0;l < $('.col-md-1').length; l++) {
        if($(this).hasClass('butn'+ (l+1))) {
          butnPosition = l+1;
        };
      };
    }
    // second + click
    else {
      if (butnPosition == 1 && ($(this).hasClass('butn'+ (butnPosition + 1 )) == true ||
      $(this).hasClass('butn'+ (butnPosition + 4)) ==true ||
      $(this).hasClass('butn'+ (butnPosition + 5)) == true)) {
        calculation += "+" + content;
        total += content;
        for(l=0;l < $('.col-md-1').length; l++) {
          if($(this).hasClass('butn'+ (l+1))) {
            butnPosition = l+1;
          };
        };
      }
      else if ((butnPosition == 2 || butnPosition == 3) && (
      $(this).hasClass('butn'+ (butnPosition - 1)) == true ||
      $(this).hasClass('butn'+ (butnPosition + 1)) == true ||
      $(this).hasClass('butn'+ (butnPosition + 3)) == true ||
      $(this).hasClass('butn'+ (butnPosition + 4)) == true ||
      $(this).hasClass('butn'+ (butnPosition + 5)) == true))  {
        calculation += "+" + content;
        total += content;
        for(l=0;l < $('.col-md-1').length; l++) {
          if($(this).hasClass('butn'+ (l+1))) {
            butnPosition = l+1;
          };
        };
      }
      else if (butnPosition == 4 && ($(this).hasClass('butn'+ (butnPosition - 1 )) == true ||
      $(this).hasClass('butn'+ (butnPosition + 3)) ==true ||
      $(this).hasClass('butn'+ (butnPosition + 4)) == true)) {
        calculation += "+" + content;
        total += content;
        for(l=0;l < $('.col-md-1').length; l++) {
          if($(this).hasClass('butn'+ (l+1))) {
            butnPosition = l+1;
          };
        };
      }
      else if ((butnPosition == 5 || butnPosition == 9) && (
      $(this).hasClass('butn'+ (butnPosition - 4)) == true ||
      $(this).hasClass('butn'+ (butnPosition - 3)) == true ||
      $(this).hasClass('butn'+ (butnPosition + 1)) == true ||
      $(this).hasClass('butn'+ (butnPosition + 4)) == true ||
      $(this).hasClass('butn'+ (butnPosition + 5)) == true))  {
        calculation += "+" + content;
        total += content;
        for(l=0;l < $('.col-md-1').length; l++) {
          if($(this).hasClass('butn'+ (l+1))) {
            butnPosition = l+1;
          };
        };
      }
      else if ((butnPosition == 6 || butnPosition == 7 || butnPosition == 10 || butnPosition == 11) &&
      ($(this).hasClass('butn'+ (butnPosition - 5)) == true ||
      $(this).hasClass('butn'+ (butnPosition - 4)) == true ||
      $(this).hasClass('butn'+ (butnPosition - 3)) == true ||
      $(this).hasClass('butn'+ (butnPosition - 1)) == true ||
      $(this).hasClass('butn'+ (butnPosition + 1)) == true ||
      $(this).hasClass('butn'+ (butnPosition + 3)) == true ||
      $(this).hasClass('butn'+ (butnPosition + 4)) == true ||
      $(this).hasClass('butn'+ (butnPosition + 5)) == true))  {
        calculation += "+" + content;
        total += content;
        for(l=0;l < $('.col-md-1').length; l++) {
          if($(this).hasClass('butn'+ (l+1))) {
            butnPosition = l+1;
          };
        };
      }
      else if ((butnPosition == 8 || butnPosition == 12) && (
      $(this).hasClass('butn'+ (butnPosition - 5)) == true ||
      $(this).hasClass('butn'+ (butnPosition - 4)) == true ||
      $(this).hasClass('butn'+ (butnPosition - 1)) == true ||
      $(this).hasClass('butn'+ (butnPosition + 3)) == true ||
      $(this).hasClass('butn'+ (butnPosition + 4)) == true))  {
        calculation += "+" + content;
        total += content;
        for(l=0;l < $('.col-md-1').length; l++) {
          if($(this).hasClass('butn'+ (l+1))) {
            butnPosition = l+1;
          };
        };
      }
      else if (butnPosition == 13 && ($(this).hasClass('butn'+ (butnPosition - 4 )) == true ||
      $(this).hasClass('butn'+ (butnPosition - 3)) ==true ||
      $(this).hasClass('butn'+ (butnPosition + 1)) == true)) {
        calculation += "+" + content;
        total += content;
        for(l=0;l < $('.col-md-1').length; l++) {
          if($(this).hasClass('butn'+ (l+1))) {
            butnPosition = l+1;
          };
        };
      }
      else if ((butnPosition == 14 || butnPosition == 15) && (
      $(this).hasClass('butn'+ (butnPosition - 5)) == true ||
      $(this).hasClass('butn'+ (butnPosition - 4)) == true ||
      $(this).hasClass('butn'+ (butnPosition - 3)) == true ||
      $(this).hasClass('butn'+ (butnPosition - 1)) == true ||
      $(this).hasClass('butn'+ (butnPosition + 1)) == true))  {
        calculation += "+" + content;
        total += content;
        for(l=0;l < $('.col-md-1').length; l++) {
          if($(this).hasClass('butn'+ (l+1))) {
            butnPosition = l+1;
          };
        };
      }
      else if (butnPosition == 16 && ($(this).hasClass('butn'+ (butnPosition - 5 )) == true ||
      $(this).hasClass('butn'+ (butnPosition -4)) ==true ||
      $(this).hasClass('butn'+ (butnPosition - 1)) == true)) {
        calculation += "+" + content;
        total += content;
        for(l=0;l < $('.col-md-1').length; l++) {
          if($(this).hasClass('butn'+ (l+1))) {
            butnPosition = l+1;
          };
        };
      }
      else {
        $('.circles').removeClass('clicked');
        calculation = "0" + "+" + content;
        total = content;
        $(this).addClass('clicked');
        for(l=0;l < $('.col-md-1').length; l++) {
          if($(this).hasClass('butn'+ (l+1))) {
            butnPosition = l+1;
          };
        };
      };
    };
  };
  if (total > parseInt($('#goalNumber').text())) {
    total = 0;
    calculation = "";
    $('.circles').removeClass('clicked');
  }
  else if (total == parseInt($('#goalNumber').text())) {
    if (solutionArray.length == 0) {
      solutionArray.push(calculation);
      var lastArray = solutionArray[solutionArray.length-1].length;
      for (s=1;s<31;s+=2) {
        if(s == lastArray) {
          points += ((s+1)/2)*50;
        }
        else if (31 == lastArray){
          points += 2000;
        };
      };
    };
    for(k = 0; k < solutionArray.length; k++) {
      if (solutionArray[k] == calculation) {
        total = 0;
        calculation = "";
        $('.circles').removeClass('clicked');
      };
    };
    if (calculation != 0) {
      solutionArray.push(calculation);
      var lastArray = solutionArray[solutionArray.length-1].length;
      for (s=1;s<31;s+=2) {
        if(s == lastArray) {
          points += ((s+1)/2)*50;
        }
        else if (31 == lastArray){
          points += 2000;
        };
      };
      total = 0;
      calculation = "";
      $('.circles').removeClass('clicked');
    };
    totalPoints = points;
  };
  $('#calcNumber').text(calculation);
  $('#points').text(points);
  $('#points-end').text(totalPoints);
$(".round2-easy").click(function(e){
  e.preventDefault();
  $('#calcNumber').text("");
  $(".round2-easy").removeClass("active");
  $('.end').removeClass('activated');
  $('.endGame').removeClass('active');
  $('#title').html('Round 2: <span>Subtraction</span>');
  //random goalNumber
  randGoal = Math.floor((Math.random() * 15) + 15);
  $('#goalNumber').text(randGoal);
  randStart = Math.floor((Math.random() * 15) + 40);
  $('#startNumber').text(randStart);
  //create gameBoard
    for (i = 0; i < $('.col-md-1').length; i++) {
    var randNum = Math.floor((Math.random() * 9) + 1);
    var column = $('.col-md-1')[i];
    $(column).html('<a class="circles fill-'+ randNum +' butn'+(i+1)+'" href ="#">-'+ randNum + '</a>');
  };
  //progress bar and timer
  round = 2;
  clearInterval(counterBack);
  j = 120;
  counterBack = setInterval(barMove,1000);
// calculator and points
total = randStart;
points = 0;
calculation = randStart;
solutionArray = [];
butnPosition = 0;
$(".circles").click(function(e){
  e.preventDefault();
  content = parseInt($(this).text());
  content = content*-1;
  // already clicked
  if($(this).hasClass('clicked') == true) {
    $('.circles').removeClass('clicked');
    calculation = randStart + '-' + content;
    total = randStart - content;
    $(this).addClass('clicked');
    for(l=0;l < $('.col-md-1').length; l++) {
      if($(this).hasClass('butn'+ (l+1))) {
        butnPosition = l+1;
      };
    };
  }
  // not clicked already
  else {
    $(this).addClass('clicked');
    // first click
    if (calculation == randStart) {
      calculation = randStart + '-' + content;
      total -= content;
      for(l=0;l < $('.col-md-1').length; l++) {
        if($(this).hasClass('butn'+ (l+1))) {
          butnPosition = l+1;
        };
      };
    }
    // second + click
   else {
     if (butnPosition == 1 && ($(this).hasClass('butn'+ (butnPosition + 1 )) == true ||
     $(this).hasClass('butn'+ (butnPosition + 4)) ==true ||
     $(this).hasClass('butn'+ (butnPosition + 5)) == true)) {
       calculation += '-' + content;
       total -= content;
       for(l=0;l < $('.col-md-1').length; l++) {
         if($(this).hasClass('butn'+ (l+1))) {
           butnPosition = l+1;
         };
       };
     }
     else if ((butnPosition == 2 || butnPosition == 3) && (
     $(this).hasClass('butn'+ (butnPosition - 1)) == true ||
     $(this).hasClass('butn'+ (butnPosition + 1)) == true ||
     $(this).hasClass('butn'+ (butnPosition + 3)) == true ||
     $(this).hasClass('butn'+ (butnPosition + 4)) == true ||
     $(this).hasClass('butn'+ (butnPosition + 5)) == true))  {
       calculation += '-' + content;
       total -= content;
       for(l=0;l < $('.col-md-1').length; l++) {
         if($(this).hasClass('butn'+ (l+1))) {
           butnPosition = l+1;
         };
       };
     }
     else if (butnPosition == 4 && ($(this).hasClass('butn'+ (butnPosition - 1 )) == true ||
     $(this).hasClass('butn'+ (butnPosition + 3)) ==true ||
     $(this).hasClass('butn'+ (butnPosition + 4)) == true)) {
       calculation += '-' + content;
       total -= content;
       for(l=0;l < $('.col-md-1').length; l++) {
         if($(this).hasClass('butn'+ (l+1))) {
           butnPosition = l+1;
         };
       };
     }
     else if ((butnPosition == 5 || butnPosition == 9) && (
     $(this).hasClass('butn'+ (butnPosition - 4)) == true ||
     $(this).hasClass('butn'+ (butnPosition - 3)) == true ||
     $(this).hasClass('butn'+ (butnPosition + 1)) == true ||
     $(this).hasClass('butn'+ (butnPosition + 4)) == true ||
     $(this).hasClass('butn'+ (butnPosition + 5)) == true))  {
       calculation += '-' + content;
       total -= content;
       for(l=0;l < $('.col-md-1').length; l++) {
         if($(this).hasClass('butn'+ (l+1))) {
           butnPosition = l+1;
         };
       };
     }
     else if ((butnPosition == 6 || butnPosition == 7 || butnPosition == 10 || butnPosition == 11) &&
     ($(this).hasClass('butn'+ (butnPosition - 5)) == true ||
     $(this).hasClass('butn'+ (butnPosition - 4)) == true ||
     $(this).hasClass('butn'+ (butnPosition - 3)) == true ||
     $(this).hasClass('butn'+ (butnPosition - 1)) == true ||
     $(this).hasClass('butn'+ (butnPosition + 1)) == true ||
     $(this).hasClass('butn'+ (butnPosition + 3)) == true ||
     $(this).hasClass('butn'+ (butnPosition + 4)) == true ||
     $(this).hasClass('butn'+ (butnPosition + 5)) == true))  {
       calculation += '-' + content;
       total -= content;
       for(l=0;l < $('.col-md-1').length; l++) {
         if($(this).hasClass('butn'+ (l+1))) {
           butnPosition = l+1;
         };
       };
     }
     else if ((butnPosition == 8 || butnPosition == 12) && (
     $(this).hasClass('butn'+ (butnPosition - 5)) == true ||
     $(this).hasClass('butn'+ (butnPosition - 4)) == true ||
     $(this).hasClass('butn'+ (butnPosition - 1)) == true ||
     $(this).hasClass('butn'+ (butnPosition + 3)) == true ||
     $(this).hasClass('butn'+ (butnPosition + 4)) == true))  {
       calculation += '-' + content;
       total -= content;
       for(l=0;l < $('.col-md-1').length; l++) {
         if($(this).hasClass('butn'+ (l+1))) {
           butnPosition = l+1;
         };
       };
     }
     else if (butnPosition == 13 && ($(this).hasClass('butn'+ (butnPosition - 4 )) == true ||
     $(this).hasClass('butn'+ (butnPosition - 3)) ==true ||
     $(this).hasClass('butn'+ (butnPosition + 1)) == true)) {
       calculation += '-' + content;
       total -= content;
       for(l=0;l < $('.col-md-1').length; l++) {
         if($(this).hasClass('butn'+ (l+1))) {
           butnPosition = l+1;
         };
       };
     }
     else if ((butnPosition == 14 || butnPosition == 15) && (
     $(this).hasClass('butn'+ (butnPosition - 5)) == true ||
     $(this).hasClass('butn'+ (butnPosition - 4)) == true ||
     $(this).hasClass('butn'+ (butnPosition - 3)) == true ||
     $(this).hasClass('butn'+ (butnPosition - 1)) == true ||
     $(this).hasClass('butn'+ (butnPosition + 1)) == true))  {
       calculation += '-' + content;
       total -= content;
       for(l=0;l < $('.col-md-1').length; l++) {
         if($(this).hasClass('butn'+ (l+1))) {
           butnPosition = l+1;
         };
       };
     }
     else if (butnPosition == 16 && ($(this).hasClass('butn'+ (butnPosition - 5 )) == true ||
     $(this).hasClass('butn'+ (butnPosition -4)) ==true ||
     $(this).hasClass('butn'+ (butnPosition - 1)) == true)) {
       calculation += '-' + content;
       total -= content;
       for(l=0;l < $('.col-md-1').length; l++) {
         if($(this).hasClass('butn'+ (l+1))) {
           butnPosition = l+1;
         };
       };
     }
      else {
        $('.circles').removeClass('clicked');
        calculation = randStart + '-' + content;
        total = randStart - content;
        $(this).addClass('clicked');
        for(l=0;l < $('.col-md-1').length; l++) {
          if($(this).hasClass('butn'+ (l+1))) {
            butnPosition = l+1;
          };
        };
      };
    };
  };
 if (total < randGoal) {
    total = randStart;
    calculation = randStart;
    $('.circles').removeClass('clicked');
  }
  else if (total == randGoal) {
    if (solutionArray.length == 0) {
      solutionArray.push(calculation);
      lastArray = solutionArray[solutionArray.length-1].length;
      for (s=2;s<32;s+=2) {
        if(s == lastArray) {
          points += ((s-2)/2)*50;
          totalPoints += ((s-2)/2)*50 ;
        }
        else if (32 == lastArray){
          points += 2000;
          totalPoints += 2000;
        };
      };
    };
    for(k = 0; k < solutionArray.length; k++) {
      if (solutionArray[k] == calculation) {
        total = randStart;
        calculation = randStart;
        $('.circles').removeClass('clicked');
      };
    };
    if (calculation != randStart) {
    solutionArray.push(calculation);
    var lastArray = solutionArray[solutionArray.length-1].length;
    for (s=2;s<32;s+=2) {
      if(s == lastArray) {
        points += ((s-2)/2)*50;
        totalPoints += ((s-2)/2)*50 ;
      }
      else if (32 == lastArray){
        points += 2000;
        totalPoints += 2000;
      };
    };
    total = randStart;
    calculation = randStart;
    $('.circles').removeClass('clicked');
  };
  };
  $('#calcNumber').text(calculation);
  $('#points').text(points);
  $('#points-end').text(totalPoints);
$(".round3-easy").click(function(e){
  e.preventDefault();
  $('#calcNumber').text("");
  $(".round3-easy").removeClass("active");
  $('.end').removeClass('activated');
  $('.endGame').removeClass('active');
  $('#title').html('Round 3: <span>Addition and Subtraction</span>');
  //random goalNumber
  randGoal = Math.floor((Math.random() * 30) + 10);
  $('#goalNumber').text(randGoal);
  randStart = Math.floor((Math.random() * 30) + 10);
  $('#startNumber').text(randStart);
  //create gameBoard
    for (i = 0; i < $('.col-md-1').length; i++) {
    var randNum = Math.floor((Math.random() * 11) -5);
    var column = $('.col-md-1')[i];
    if(randNum>=0) {
      $(column).html('<a class="circles fill-'+ randNum +' butn'+(i+1)+'" href ="#">+'+ randNum + '</a>');
    }
    else {
      $(column).html('<a class="circles fill-'+ randNum +' butn'+(i+1)+'" href ="#">'+ randNum + '</a>');
    };
  };
  //progress bar and timer
  round = 3;
  clearInterval(counterBack);
  j = 120;
  counterBack = setInterval(barMove,1000);
  // calculator and points
  total = randStart;
  points = 0;
  calculation = randStart;
  solutionArray = [];
  butnPosition = 0;
  $(".circles").click(function(e){
    e.preventDefault();
    content = parseInt($(this).text());
    // already clicked
    if($(this).hasClass('clicked') == true) {
      $('.circles').removeClass('clicked');
      if(content >=0) {
        calculation = randStart + '+' + content;
        total = randStart + content;
      }
      else {
        calculation = randStart + '-' + content*-1;
        total = randStart + content;
      };
      $(this).addClass('clicked');
      for(l=0;l < $('.col-md-1').length; l++) {
        if($(this).hasClass('butn'+ (l+1))) {
          butnPosition = l+1;
        };
      };
    }
    // not clicked already
    else {
      $(this).addClass('clicked');
      // first click
      if (calculation == randStart) {
          if(content >=0) {
            calculation = randStart + '+' + content;
            total = randStart + content;
          }
          else {
            calculation = randStart + '-' + content*-1;
            total = randStart + content;
          };
        for(l=0;l < $('.col-md-1').length; l++) {
          if($(this).hasClass('butn'+ (l+1))) {
            butnPosition = l+1;
          };
        };
      }
      // second + click
     else {
       if (butnPosition == 1 && ($(this).hasClass('butn'+ (butnPosition + 1 )) == true ||
       $(this).hasClass('butn'+ (butnPosition + 4)) ==true ||
       $(this).hasClass('butn'+ (butnPosition + 5)) == true)) {
           if(content >=0) {
             calculation += '+' + content;
             total += content;
           }
           else {
             calculation += content;
             total += content;
           };
         for(l=0;l < $('.col-md-1').length; l++) {
           if($(this).hasClass('butn'+ (l+1))) {
             butnPosition = l+1;
           };
         };
       }
       else if ((butnPosition == 2 || butnPosition == 3) && (
       $(this).hasClass('butn'+ (butnPosition - 1)) == true ||
       $(this).hasClass('butn'+ (butnPosition + 1)) == true ||
       $(this).hasClass('butn'+ (butnPosition + 3)) == true ||
       $(this).hasClass('butn'+ (butnPosition + 4)) == true ||
       $(this).hasClass('butn'+ (butnPosition + 5)) == true))  {
         if(content >=0) {
           calculation += '+' + content;
           total += content;
         }
         else {
           calculation += content;
           total += content;
         };
         for(l=0;l < $('.col-md-1').length; l++) {
           if($(this).hasClass('butn'+ (l+1))) {
             butnPosition = l+1;
           };
         };
       }
       else if (butnPosition == 4 && ($(this).hasClass('butn'+ (butnPosition - 1 )) == true ||
       $(this).hasClass('butn'+ (butnPosition + 3)) ==true ||
       $(this).hasClass('butn'+ (butnPosition + 4)) == true)) {
         if(content >=0) {
           calculation += '+' + content;
           total += content;
         }
         else {
           calculation += content;
           total += content;
         };
         for(l=0;l < $('.col-md-1').length; l++) {
           if($(this).hasClass('butn'+ (l+1))) {
             butnPosition = l+1;
           };
         };
       }
       else if ((butnPosition == 5 || butnPosition == 9) && (
       $(this).hasClass('butn'+ (butnPosition - 4)) == true ||
       $(this).hasClass('butn'+ (butnPosition - 3)) == true ||
       $(this).hasClass('butn'+ (butnPosition + 1)) == true ||
       $(this).hasClass('butn'+ (butnPosition + 4)) == true ||
       $(this).hasClass('butn'+ (butnPosition + 5)) == true))  {
         if(content >=0) {
           calculation += '+' + content;
           total += content;
         }
         else {
           calculation += content;
           total += content;
         };
         for(l=0;l < $('.col-md-1').length; l++) {
           if($(this).hasClass('butn'+ (l+1))) {
             butnPosition = l+1;
           };
         };
       }
       else if ((butnPosition == 6 || butnPosition == 7 || butnPosition == 10 || butnPosition == 11) &&
       ($(this).hasClass('butn'+ (butnPosition - 5)) == true ||
       $(this).hasClass('butn'+ (butnPosition - 4)) == true ||
       $(this).hasClass('butn'+ (butnPosition - 3)) == true ||
       $(this).hasClass('butn'+ (butnPosition - 1)) == true ||
       $(this).hasClass('butn'+ (butnPosition + 1)) == true ||
       $(this).hasClass('butn'+ (butnPosition + 3)) == true ||
       $(this).hasClass('butn'+ (butnPosition + 4)) == true ||
       $(this).hasClass('butn'+ (butnPosition + 5)) == true))  {
         if(content >=0) {
           calculation += '+' + content;
           total += content;
         }
         else {
           calculation += content;
           total += content;
         };
         for(l=0;l < $('.col-md-1').length; l++) {
           if($(this).hasClass('butn'+ (l+1))) {
             butnPosition = l+1;
           };
         };
       }
       else if ((butnPosition == 8 || butnPosition == 12) && (
       $(this).hasClass('butn'+ (butnPosition - 5)) == true ||
       $(this).hasClass('butn'+ (butnPosition - 4)) == true ||
       $(this).hasClass('butn'+ (butnPosition - 1)) == true ||
       $(this).hasClass('butn'+ (butnPosition + 3)) == true ||
       $(this).hasClass('butn'+ (butnPosition + 4)) == true))  {
         if(content >=0) {
           calculation += '+' + content;
           total += content;
         }
         else {
           calculation += content;
           total += content;
         };
         for(l=0;l < $('.col-md-1').length; l++) {
           if($(this).hasClass('butn'+ (l+1))) {
             butnPosition = l+1;
           };
         };
       }
       else if (butnPosition == 13 && ($(this).hasClass('butn'+ (butnPosition - 4 )) == true ||
       $(this).hasClass('butn'+ (butnPosition - 3)) ==true ||
       $(this).hasClass('butn'+ (butnPosition + 1)) == true)) {
         if(content >=0) {
           calculation += '+' + content;
           total += content;
         }
         else {
           calculation += content;
           total += content;
         };
         for(l=0;l < $('.col-md-1').length; l++) {
           if($(this).hasClass('butn'+ (l+1))) {
             butnPosition = l+1;
           };
         };
       }
       else if ((butnPosition == 14 || butnPosition == 15) && (
       $(this).hasClass('butn'+ (butnPosition - 5)) == true ||
       $(this).hasClass('butn'+ (butnPosition - 4)) == true ||
       $(this).hasClass('butn'+ (butnPosition - 3)) == true ||
       $(this).hasClass('butn'+ (butnPosition - 1)) == true ||
       $(this).hasClass('butn'+ (butnPosition + 1)) == true))  {
         if(content >=0) {
           calculation += '+' + content;
           total += content;
         }
         else {
           calculation += content;
           total += content;
         };
         for(l=0;l < $('.col-md-1').length; l++) {
           if($(this).hasClass('butn'+ (l+1))) {
             butnPosition = l+1;
           };
         };
       }
       else if (butnPosition == 16 && ($(this).hasClass('butn'+ (butnPosition - 5 )) == true ||
       $(this).hasClass('butn'+ (butnPosition -4)) ==true ||
       $(this).hasClass('butn'+ (butnPosition - 1)) == true)) {
         if(content >=0) {
           calculation += '+' + content;
           total += content;
         }
         else {
           calculation += content;
           total += content;
         };
         for(l=0;l < $('.col-md-1').length; l++) {
           if($(this).hasClass('butn'+ (l+1))) {
             butnPosition = l+1;
           };
         };
       }
        else {
          $('.circles').removeClass('clicked');
          if(content >=0) {
            calculation = randStart + '+' + content;
            total = randStart + content;
          }
          else {
            calculation = randStart + '-' + content*-1;
            total = randStart + content;
          };
          $(this).addClass('clicked');
          for(l=0;l < $('.col-md-1').length; l++) {
            if($(this).hasClass('butn'+ (l+1))) {
              butnPosition = l+1;
            };
          };
        };
      };
    };
   if (total == randGoal) {
      if (solutionArray.length == 0) {
        solutionArray.push(calculation);
        lastArray = solutionArray[solutionArray.length-1].length;
        for (s=2;s<32;s+=2) {
          if(s == lastArray) {
            points += ((s-2)/2)*50;
            totalPoints += ((s-2)/2)*50 ;
          }
          else if (32 == lastArray){
            points += 2000;
            totalPoints += 2000;
          };
        };
      };
      for(k = 0; k < solutionArray.length; k++) {
        if (solutionArray[k] == calculation) {
          total = randStart;
          calculation = randStart;
          $('.circles').removeClass('clicked');
        };
      };
      if (calculation != randStart) {
      solutionArray.push(calculation);
      var lastArray = solutionArray[solutionArray.length-1].length;
      for (s=2;s<32;s+=2) {
        if(s == lastArray) {
          points += ((s-2)/2)*50;
          totalPoints += ((s-2)/2)*50 ;
        }
        else if (32 == lastArray){
          points += 2000;
          totalPoints += 2000;
        };
      };
      total = randStart;
      calculation = randStart;
      $('.circles').removeClass('clicked');
    };
  };
  $('#calcNumber').text(calculation);
  $('#points').text(points);
  $('#points-end').text(totalPoints);
});
});
});
});
});
});

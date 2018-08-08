$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log(dancerMakerFunction);
    // get the maker function for the kind of dancer we're supposed to make

    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    console.log(window.dancers);
    $('body').append(dancer.$node);
 
  });

  $('.lineUpButton').on('click', function(event) {
    $('.totoro').css('top', 100);
    $('.shinChan').css('top', 800);
  }); 

  $('.dancerInteractButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i ++) {
      
      $(window.dancers[i]).animate({
        width: '70%',
        opacity: 0.4,
        marginLeft: '0.6in',
        fontSize: '3em',
        borderWidth: '10px'
      }, 1500 );
    }
  });
  
  // $('#runAway').mouseover(function() {
  //   var dWidth = $(document).width() - 100, // 100 = image width
  //     dHeight = $(document).height() - 100, // 100 = image height
  //     nextX = Math.floor(Math.random() * dWidth),
  //     nextY = Math.floor(Math.random() * dHeight);
  //   $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
  // });



  // for (var j = 1; j < window.dancers.length; i ++) {
  //   window.dancers[i].css('top', 100000);
  //   $(window.dancers[i]).css('left', 100000);
  //   $(window.dancers[j]).css('top', 100000);
  //   $(window.dancers[j]).css('left', 100000);
  // }
  // }
  // });
  // $('.runAway').mouseover(function() {  
  //   // var offset = $(this).offset();  
  //   // alert('hello');
  //   var maxX = $(window).width() - $(this).width();
  //   var maxY = $(window).height() - $(this).height();
  //   $(this).css('left', getRandomInt(0, maxX));
  //   $(this).css('top', getRandomInt(0, maxY));
  //   // $(this).css({
  //   //   'left': getRandomInt(0, maxX),
  //   //   'top': getRandomInt(0, maxY)
  //   // });
  // });


  // $('.runAway').hover(function() {
  //   $(this).css('top', Math.random() * 500 + 'px').css('left', Math.random() * 600 + 'px');
  // });  
  var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
    
});

    



//add a mouse interaction 

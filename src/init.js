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
    $('body').append(dancer.$node);
 
  });

  $('.lineUpButton').on('click', function(event) {
    $('.totoro').css('top', 100);
  }); 

 
    



  // $('.addShinChanButton').on('click', function(event) {
  //   var shinchandancerMakerFunctionName = $(this).data('shinchandancer-maker-function-name');

  //   var shinchandancerMakerFunction = window[shinchandancerMakerFunctionName];

  //   // make a dancer with a random position

  //   var dancer = new shinchandancerMakerFunction(
      
  //     $('body').height() * Math.random(),
  //     $('body').width() * Math.random(),
  //     Math.random() * 1000
  //   );
  //   window.dancers.push(dancer);
  //   $('body').append(dancer.$node);


  // });

  


  // var totoro = $('.')

  // var runAway = function() {
  //   var randX = Math.floor(Math.random() * (window.innerWidth - 100));
  //   var randY = Math.floor(Math.random() * (window.innerHeight - 100));
  //   console.log([randX, randY]);
  //   $('.totoro').stop().animate({'left': randX + 'px', 'top': randY + 'px'});
  // };

  // $('.totoro').on('mouseenter', runAway);
  // $('.totoro').on('click', function() {
  //   alert('clicked!');
  // });



});

    
    


//add a mouse interaction 

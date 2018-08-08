// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag

  this.$node = $('<div class="runAway"></div>');  
  // this.message = 'yoyoyo';

  this.timeBetweenSteps = timeBetweenSteps;
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  $('.runAway').mouseover(function() {  
    // var offset = $(this).offset();  
    // alert('hello');
    var maxX = $(window).width() - $(this).width();
    var maxY = $(window).height() - $(this).height();
    $(this).css('left', getRandomInt(0, maxX));
    $(this).css('top', getRandomInt(0, maxY));
    // $(this).css({
    //   'left': getRandomInt(0, maxX),
    //   'top': getRandomInt(0, maxY)
    // });
  });
  var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
};

MakeDancer.prototype = {
  step: function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // console.log('wth');
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  },
  setPosition: function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
};


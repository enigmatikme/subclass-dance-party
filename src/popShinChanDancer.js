var PopShinChanDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
  // this.$node.append('<img src = https://thumbs.gfycat.com/HandmadeMediumHart-size_restricted.gif height="100" width="100">');
  this.$node.addClass('shinChan');
  this.$node.append('<img src = https://i0.wp.com/www.087660033.deck.tw/wp-content/uploads/2016/01/55d6c3d32f494.gif?  height="100" width="100">');


};

PopShinChanDancer.prototype = Object.create(MakeDancer.prototype);
PopShinChanDancer.prototype.constructor = PopShinChanDancer;
PopShinChanDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  
  // MakeDancer.prototype.step.apply(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle();
};
var PopShinChanDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
  this.$node.append('<img src = https://thumbs.gfycat.com/HandmadeAdmiredEft-size_restricted.gif height="100" width="100">');
  this.$node.addClass('shinChan');
  
};

PopShinChanDancer.prototype = Object.create(MakeDancer.prototype);
PopShinChanDancer.prototype.constructor = PopShinChanDancer;
PopShinChanDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  
  MakeDancer.prototype.step.apply(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle();
};
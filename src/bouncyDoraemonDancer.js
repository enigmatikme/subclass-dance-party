var BouncyDoraemonDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

};

BouncyDoraemonDancer.prototype = Object.create(MakeDancer.prototype);
BouncyDoraemonDancer.prototype.constructor = BouncyDoraemonDancer;

BouncyDoraemonDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  
  MakeDancer.prototype.step.apply(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle();
};
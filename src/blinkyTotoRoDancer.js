var BlinkyTotoRoDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.oldStep = MakeDancer.step
  this.$node.append('<img class="runAway" src = https://thumbs.gfycat.com/PerkyLinearGordonsetter-size_restricted.gif height="100" width="100">');
  this.$node.addClass('totoro');
  
};

BlinkyTotoRoDancer.prototype = Object.create(MakeDancer.prototype);
BlinkyTotoRoDancer.prototype.constructor = BlinkyTotoRoDancer;
BlinkyTotoRoDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  
  // MakeDancer.prototype.step.apply(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle();
};


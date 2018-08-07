var PopDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

};

PopDancer.prototype = Object.create(MakeDancer.prototype);
PopDancer.prototype.constructor = PopDancer;
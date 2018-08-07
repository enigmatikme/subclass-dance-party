var BouncyDoraemanDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

};

BouncyDoraemanDancer.prototype = Object.create(MakeDancer.prototype);
BouncyDoraemanDancer.prototype.constructor = BouncyDancer;

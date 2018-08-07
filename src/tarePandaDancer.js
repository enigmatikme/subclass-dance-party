var TarePanda = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

};

TarePanda.prototype = Object.create(MakeDancer.prototype);
TarePanda.prototype.constructor = TarePanda; 
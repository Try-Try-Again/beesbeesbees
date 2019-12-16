var HoneyMakerBee = function() {
  this = Object.create(Bee.prototype);
  this.age = 10;
  this.honeyPot = 0;
};


HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}

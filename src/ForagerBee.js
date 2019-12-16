var ForagerBee = function() {
  this = Object.create(Bee.prototype);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push.treasure;
};

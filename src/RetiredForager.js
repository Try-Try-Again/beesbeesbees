var RetiredForagerBee = function() {
  this = Object.create(ForagerBee.prototype);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

ForagerBee.prototype.forage = function(treasure) {
  return "I am too old, let me play cards instead";
};

ForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push.treasure;
};

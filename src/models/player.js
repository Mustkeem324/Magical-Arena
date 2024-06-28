class Player {
    constructor(name, health, strength, attack) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.attack = attack;
    }
  
    takeDamage(damage) {
      this.health = Math.max(this.health - damage, 0);
    }
  
    isAlive() {
      return this.health > 0;
    }
  }
  
  module.exports = Player;
  
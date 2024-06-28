const Player = require('./player');
const Dice = require('./dice');

class Arena {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.dice = new Dice();
  }

  fight() {
    while (this.player1.isAlive() && this.player2.isAlive()) {
      this.takeTurn(this.player1, this.player2);
      if (this.player2.isAlive()) {
        this.takeTurn(this.player2, this.player1);
      }
    }

    return this.player1.isAlive() ? this.player1 : this.player2;
  }

  takeTurn(attacker, defender) {
    const attackRoll = this.dice.roll();
    const defenseRoll = this.dice.roll();
    const attackDamage = attacker.attack * attackRoll;
    const defenseValue = defender.strength * defenseRoll;
    const damageDealt = Math.max(attackDamage - defenseValue, 0);
    console.log('\x1b[32m%s\x1b[0m', '\u2500'.repeat(100));
    console.log(`${attacker.name} attacks ${defender.name}!`);
    console.log(`Attack roll: ${attackRoll}`);
    console.log(`Defense roll: ${defenseRoll}`);
    console.log(`Attack damage: ${attackDamage}`);
    console.log(`Defense value: ${defenseValue}`);
    console.log(`Damage dealt: ${damageDealt}`);

    defender.takeDamage(damageDealt);

    console.log(`${attacker.name} attacks ${defender.name} with roll ${attackRoll}, ${defender.name} defends with roll ${defenseRoll}.`);
    console.log(`${defender.name} takes ${damageDealt} damage, health is now ${defender.health}`);
    console.log('\x1b[32m%s\x1b[0m', '\u2500'.repeat(100));
  }
}

module.exports = Arena;

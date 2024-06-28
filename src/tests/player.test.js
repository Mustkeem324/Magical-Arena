const assert = require('assert');
const Player = require('../models/player');

describe('Player', () => {
  it('should reduce health when taking damage', () => {
    const player = new Player('Test', 100, 10, 10);
    player.takeDamage(30);
    assert.strictEqual(player.health, 70);
  });

  it('should not have negative health', () => {
    const player = new Player('Test', 50, 10, 10);
    player.takeDamage(60);
    assert.strictEqual(player.health, 0);
  });

  it('should be alive if health is greater than 0', () => {
    const player = new Player('Test', 50, 10, 10);
    assert.strictEqual(player.isAlive(), true);
  });

  it('should be dead if health is 0', () => {
    const player = new Player('Test', 0, 10, 10);
    assert.strictEqual(player.isAlive(), false);
  });
});

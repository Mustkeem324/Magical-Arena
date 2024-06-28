const assert = require('assert');
const Player = require('../models/player');
const Arena = require('../models/arena');

describe('Arena', () => {
  it('should declare a winner when one player\'s health reaches 0', () => {
    const playerA = new Player('Player A', 1, 5, 10);
    const playerB = new Player('Player B', 1, 10, 5);
    const arena = new Arena(playerA, playerB);

    const winner = arena.fight();
    assert(winner.isAlive());
    assert(!winner === playerA || !winner === playerB);
  });

  it('should have player with lower health attack first', () => {
    const playerA = new Player('Player A', 10, 5, 10);
    const playerB = new Player('Player B', 20, 10, 5);
    const arena = new Arena(playerA, playerB);

    const firstAttacker = playerA.health < playerB.health ? playerA : playerB;
    const initialAttacker = arena.player1;
    assert.strictEqual(firstAttacker, initialAttacker);
  });

  it('should reduce defender\'s health correctly after an attack', () => {
    const playerA = new Player('Player A', 50, 5, 10);
    const playerB = new Player('Player B', 50, 10, 5);
    const arena = new Arena(playerA, playerB);

    arena.takeTurn(playerA, playerB);
    assert(playerB.health < 50);
  });

  it('should not have negative health for the defender', () => {
    const playerA = new Player('Player A', 50, 5, 100);
    const playerB = new Player('Player B', 10, 10, 5);
    const arena = new Arena(playerA, playerB);

    arena.takeTurn(playerA, playerB);
    assert(playerB.health >= 0);
  });
});

const Player = require('./models/player');
const Arena = require('./models/arena');

const playerA = new Player('Player A', 50, 5, 10);
const playerB = new Player('Player B', 100, 10, 5);

const arena = new Arena(playerA, playerB);
const winner = arena.fight();

console.log(`${winner.name} wins the battle!`);

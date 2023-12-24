const GameServer = require('./game-server');

const min = process.argv[2];
const max = process.argv[3];

if (!min || !max) {
  console.error('Usage: node game-client.js <min> <max>');
  process.exit(1);
}

const gameServer = new GameServer();
const serverAnswer = gameServer.startGame(parseInt(min), parseInt(max));

let guess;

do {
  guess = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
  console.log(`Sending guess to the server: ${guess}`);
} while (gameServer.processHint(guess) !== 'equal');

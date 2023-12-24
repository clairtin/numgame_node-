class GameServer {
    constructor() {
      this.answer = null;
    }
  
    startGame(min, max) {
      this.answer = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(`Ready to start!  Number is between ${min} and ${max}`);
      return this.answer;
    }
  
    processHint(clientHint) {
      if (clientHint < this.answer) {
        console.log('Client hint: more');
        return 'more';
      } else if (clientHint > this.answer) {
        console.log('Client hint: less');
        return 'less';
      } else {
        console.log('Guessed the number! Game over.');
        return 'equal';
      }
    }
  }
  
  module.exports = GameServer;
  
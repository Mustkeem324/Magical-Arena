class Dice {
    roll() {
      return Math.floor(Math.random() * 6) + 1;
    }
  }
//   const dice = new Dice();
//   console.log("First roll:", dice.roll());
//   console.log("Second roll:", dice.roll());
//   console.log("Third roll:", dice.roll());  
  module.exports = Dice;
  
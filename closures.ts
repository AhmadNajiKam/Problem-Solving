// Problem 1:  This function calculates the power of a number to an exponent 
function pow(exponent: number): (base: number) => number {
  return function(base: number): number {
    return Math.pow(base, exponent);
  };
}

const square = pow(2);
console.log('square(3):', square(3));    // 9
// Problem 2: Ping Pong tracker with closures
interface PingPongTracker {
  timeSpentPlaying: () => number;
  playOneGame: () => string;
  myLevel: () => string;
} // This interface is just a contract for the object returned


function pingPongTracker(): PingPongTracker {

  let totalMinutes = 0;

  // Return an object with methods that can access totalMinutes
  return {
    timeSpentPlaying(): number {
      return totalMinutes;
    },

    playOneGame(): string {
      totalMinutes += 15;
      return "Game played";
    },

    myLevel(): string {
      if (totalMinutes < 30) {
        return "I need to improve my game";
      } else if (totalMinutes <= 100) {
        return "You need to improve your game";
      } else {
        return "Wow, I have wasted a lot of time";
      }
    }
  };
}
// This should test if the code is returning the expected code
let myGame = pingPongTracker();
console.log(myGame.playOneGame());         // should return "Game played";
console.log(myGame.playOneGame());         // should return "Game played";
console.log(myGame.timeSpentPlaying());    // should return 30;
console.log(myGame.myLevel());             // should return "You need to improve your game"

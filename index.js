const app = "I don't do much."

function eat(meal) {
  function whatsForDinner() {
    if (!meal) {
      console.log('My belly is empty. Woe is me.');
    } else if (meal === 'Cow') {
      console.log('The wee cow is in my belly!');
    } else {
      console.log(`I'm eatin' a bit of ${meal}! Burp.`);
    }
  }

  function digest() {
    meal = undefined;
  }

  return {
    whatsForDinner,
    digest
  };
}

let { whatsForDinner, digest } = eat('Ribeye');

whatsForDinner();
digest();
whatsForDinner();

// let whatsForDinner = eat('Kobe beef');
// whatsForDinner();

function raspyDoorGuy() {
  const password = 'yarr';

  function givePassword(givenPassword) {
    if (givenPassword === password) {
      console.log('Ye may enter.');
    } else {
      console.log('Begone, landlubber!');
    }
  }

  function willBreakPrinciples(bribeAmount) {
    return bribeAmount >= 50;
  }

  function bribe(amount) {
    if (willBreakPrinciples(amount)) {
      return password;
    } else {
      console.log("Pssht. That won't work.");
    }
  }

  return {
    givePassword,
    bribe
  };
}

// console.log(password) // prints `undefined`
let { givePassword } = raspyDoorGuy();
givePassword('kittens');
let { bribe } = raspyDoorGuy();
bribe(80);

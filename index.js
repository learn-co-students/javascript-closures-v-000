function fatBastard(meal) {
  function whatsForDinner() {
    if (!meal) {
      console.log('My belly is empty. Woe is me.');
    } else if (meal === 'Mini-Me') {
      console.log('The wee man is in my belly!');
    } else {
      console.log(`I'm eatin a bbit of ${meal}.`);
    }
  }

  function digest() {
    meal = undefined;
  }
  return {
    whatsForDinner,
    digest
  }
}

var obj = {a: 1, b: 2, c: 3};
var {a, b, c} = obj;

function raspyDoorGuy() {
  const password = 'yarr';

  function givePassword(givenPassword) {
    if (givenPassword === password) {
      console.log('Ye may enter');
    } else {
      console.log('Begone, landlubber');
    }
  }

  function willBreakPrinciples(bribeAmount) {
    return bribeAmount >= 50
  }

  function bribe(amount) {
    if (willBreakPrinciples(amount)) {
      return password;
    } else {
      console.log('Pssht. What do you take me for?');
    }
  }

  return {
    givePassword,
    bribe
  }
}

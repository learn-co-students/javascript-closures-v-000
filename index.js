const app = "I don't do much."

function fatBastard(meal) {
  function whatsForDinner() {
    if (meal === 'Mini-Me') {
      console.log('The wee man is in my belly!');
    } else {
      console.log(`I'm eatin' a bit of ${meal}! Burp.`);
    }
  }
  return whatsForDinner;
}

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
    givePassword
    bribe
  };
}

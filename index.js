const app = "I don't do much."

function raspyDoorGuy() {
  const password = 'yarr'; // password is a local variable created by raspyDoorGuy()

  function givePassword(givenPassword) { // givePassword() is the inner function, a closure
    if (givenPassword === password) { // givePassword() uses variable declared in the parent function
      console.log('Ye may enter.');
    } else {
      console.log('Begone, landlubber!');
    }
  }

  function willBreakPrinciples(bribeAmount){
    return bribeAmount >= 50;
  }

  function bribe(amount) {
    if (willBreakPrinciples(amount)) {
      return password;
    } else {
      console.log("Pssht. That won't work.")
    }
  }


  return {
    givePassword,
    bribe
  };
}

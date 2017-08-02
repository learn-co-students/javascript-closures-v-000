function fatBastard(meal) {
  function whatsForDinner() { // whatsForDinner() is the inner function, a closure
    if (meal === 'Mini-Me') { // whatsForDinner() uses argument provided to the parent function 
      console.log('The wee man is in my belly!');
    } else {
      console.log(`I'm eatin' a bit of ${meal}! Burp.`);
    }
  }

  return whatsForDinner;
}

const whatsForDinner = fatBastard('Kobe beef');
whatsForDinner(); // prints 'I'm eatin' a bit of Kobe beef! Burp.'

const whatsInHisTummy = fatBastard('Mini-Me');
whatsInHisTummy(); // prints 'The wee man is in my belly!'

function raspyDoorGuy() {
  const password = 'yarr'; // password is a local variable created by raspyDoorGuy()
 
  function givePassword(givenPassword) { // givePassword() is an inner function, a closure
    if (givenPassword === password) { // givePassword() uses variable declared in the parent function 
      console.log('Ye may enter.');
    } else {
      console.log('Begone, landlubber!');
    }
  }
 
  function willBreakPrinciples(bribeAmount) { // willBreakPrinciples() is the private method
    return bribeAmount >= 50;
  }
 
  function bribe(amount) { // bribe() is an inner function, a closure
    if (willBreakPrinciples(amount)) { // bribe() uses private method created in the parent function
      return password; // bribe() uses variable declared in the parent function 
    } else {
      console.log("Pssht. That won't work.");
    }
  }
 
  return {
    givePassword,
    bribe
  };
}

const { bribe } = raspyDoorGuy();
bribe(80); // returns 'yarr'

const app = "I don't do much."

function fatBastard(meal) {
    function whatsForDinner() {
        if (!meal) {
            console.log("My belly is empty. Woe is me.");
        } else if (meal === "Mini-Me") {
            console.log("The wee man is in my belly!");
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
};

//function above returns and object and so must refer to key names

const { whatsForDinner, digest } = fatBastard('ribeye');
// whatsForDinner(); will print 'I'm eatin' a bit of ribeye! Burp.'
// digest(); prints nothing but now...
// whatsForDinner(); will print 'My belly is empty. woe is me.'


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

// if we make a const with a bribe and the call the function with enough money we can get the password without using the givePassword function...

const { bribe } = raspyDoorGuy();
bribe(80); //returns 'yarr';

function fatBastard(meal) {
  function whatsForDinner() {
    if (!meal) {
      console.log("My belly is empty. Woe is me.");
    } else if (meal === 'Mini-Me') {
      console.log("The wee man is in my belly!");
    } else {
      console.log(`I'm having a bit of ${meal}.`);
    }
  }

  function digest() {
    meal = undefined;
  }

  return {
    whatsForDinner,
    digest
  } // the functions are being returned as a reference to their name. They have not been called yet and can be set as variables to be called at a later time.
}


const whatsInHisTummy = fatBastard('Kobe Steak');
whatsInHisTummy(); // Prints "I'm having a wee bit of Kobe Steak."

const {
  whatsForDinner,
  digest
} = fatBastard('ribeye');

whatsForDinner(); // returns "I'm having a wee bit of ribeye."
digest(); // sets meal to undefined
whatsForDinner(); //returns "My Belly is empty. Woe is me." because the meal was set to undefined when the digest function was executed.


function raspyDoorGuy() {
  const password = "yarr"; //because it was defined within the function, the variable is not able to be accessed outside the function. However the inner function can access the variable.

  function givePassword(givenPassword) {
    if (givenPassword === password) {
      console.log("Ye may enter.");
    } else {
      console.log("Begone, landlubber !!");
    }
  }

  // considered a 'private' function becaus eit is not being returned to be accessed outside of the function
  function willBreakPrinciples(bribeAmount) {
    return bribeAmount >= 50
  }

  function bribe(amount) {
    if (willBreakPrinciples(amount)) {
      return password;
    } else {
      console.log("Pssht. What do you take me for?");
    }
  }

  return {
    givePassword,
    bribe
  } // only 2 functions are being returned to be accessed outside of the function
}

const { givePassword } = raspyDoorGuy();
givePassword("kittens"); // returns "Begone,. landlubber !!"

const { bribe } = raspyDoorGuy();
bribe(80); // returns "yarr"

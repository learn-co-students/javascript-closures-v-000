const app = "I don't do much.";


// v1

// const whatsForDinner = fatBastard('Kobe beef');
// const whatsInHisTummy = fatBastard('Mini-Me');

// function fatBastard(meal) {
//   function whatsForDinner() {
//     if (meal === 'Mini-Me') {
//       console.log('The wee man is in my belly!');
//     } else {
//       console.log(`I'm eatin' a bit of ${meal}! Burp.`);
//     }
//   } 
//   return whatsForDinner;
// }


// v2

// const { whatsForDinner, digest } = fatBastard('ribeye');
 
// function fatBastard(meal) {
//   function whatsForDinner() {
//     if (!meal) {
//       console.log('My belly is empty. Woe is me.');
//     } else if (meal === 'Mini-Me') {
//       console.log('The wee man is in my belly!');
//     } else {
//       console.log(`I'm eatin' a bit of ${meal}! Burp.`);
//     }
//   }
 
//   function digest() {
//     meal = undefined;
//   }
 
//   return {
//     whatsForDinner,
//     digest
//   };
// }
// ______________________________________________________
// example of a password v1:

// const { givePassword } = raspyDoorGuy();

// function raspyDoorGuy() {
//   const password = 'yarr';
 
//   function givePassword(givenPassword) {
//     if (givenPassword === password) {
//       console.log('Ye may enter.');
//     } else {
//       console.log('Begone, landlubber!');
//     }
//   }
 
//   return {
//     givePassword
//   };
// }


// _______________________________________________________
// example of a password v2:

const { bribe } = raspyDoorGuy();
 
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


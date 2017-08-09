const app = "I don't do much."

// function fatBastard(meal) {
//   function whatsForDinner() {
//     if (meal === 'Mini-Me') {
//       console.log("The wee man is in my belly!");
//     } else {
//       console.log(`I'm eatin' a bit of ${meal}! Burp.`);
//     }
//   }
//
//   return whatsForDinner;
// }
//
// const whatsForDinner = fatBastard('Kobe beef');
// whatsForDinner();
//
// const whatsInHisTummy = fatBastard("Mini-Me");
// whatsInHisTummy();


function fatBastard(meal) {
  function whatsForDinner() {
    if (!meal) {
      console.log("My belly is empty. Woe is me.");
    } else if (meal === 'Mini-Me') {
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
}

const {whatsForDinner, digest} = fatBastard('ribeye');
whatsForDinner();
 // I'm eatin' a bit of ribeye! Burp.

digest();

whatsForDinner();
// My belly is empty. Woe is me.


function raspyDoorGuy() {
  const password = 'yarr';

  function givePassword(givenPassword) {
    if (givenPassword === password) {
      console.log("Ye may enter.");
    } else {
      console.log('Begone, landlubber!');
    }
  }
  return {givePassword};
}

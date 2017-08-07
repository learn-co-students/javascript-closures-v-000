const app = "I don't do much."
function fatBastard(meal) {
  function whatsForDinner() { // whatsForDinner() is the inner function, a closure
    if (meal === 'Mini-Me') { // whatsForDinner() uses argument provided to the parent function
      console.log('The wee man is in my belly!');
    } else {
      console.log(`I'm eatin' a bit of ${meal}! Burp.`);
    }
  }

  function digest() { // digest() is an inner function, a closure
    meal = undefined; // digest() uses argument provided to the parent function 
  }
 
  return {
    whatsForDinner,
    digest
  };
  
}
const { whatsForDinner, digest } = fatBastard('ribeye');
whatsForDinner(); // prints 'I'm eatin' a bit of ribeye! Burp.'
digest();
whatsForDinner(); // prints 'My belly is empty. Woe is me.'
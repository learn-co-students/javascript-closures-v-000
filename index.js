function fatBastard(meal) {
  function whatsForDinner() {
    if (!meal) {
      console.log('my belly is empty. Woe is me.')
    }else if(meal === 'Mini-Me') {
      console.log('The wee man is in my belly!');
    } else {
      console.log(`I'm eatin' a bit of ${meal}! Burp.`);
    }
  }

  function digest() { // digest() is an inner function, a closure
    meal = undefined; // digest() uses argument provided to the parent function
  }

  return {whatsForDinner, digest};
}

const { whatsForDinner, digest } = fatBastard('ribeye');
whatsForDinner();
digest();
whatsForDinner();

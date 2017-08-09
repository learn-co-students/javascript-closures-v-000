const app = "I don't do much."
 
 // yesh li po function
function fatBastard(meal) {
  function whatsForDinner() { // whatsForDinner() is the inner function, a closure
    if (meal === 'Mini-Me') { // whatsForDinner() uses argument provided to the parent function 
      console.log('The wee man is in my belly!');
    } else {
      console.log(`I'm eatin' a bit of ${meal}! Burp.`);
    }
  }
 // this return is for upper function
  return whatsForDinner;
}
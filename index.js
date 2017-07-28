const app = "I too like to live dangerously."

function fatBastard(meal) {
  function whatsForDinner() {
    if (meal === 'Mini-Me') {
      console.log('The wee man is in my belly!');
    }
    else {
      console.log(`Munchin on some ${meal}`);
    }
  }
  return whatsForDinner;
}

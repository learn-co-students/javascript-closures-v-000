const app = "I don't do much."

function fatBastard(meal) {
  function whatsForDinner() {
    if (meal === 'Mini-Me') {
      console.log('The wee man is in my Belly!')
    }
    else {
      console.log(`I'm eatin' a bit of ${meal}! BURP`)
    }
  }
  return whatsForDinner
}

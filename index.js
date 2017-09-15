const app = "I don't do much."


function fatBastard(meal) {
    function whatsForDinner() {
      if (meal === "Mini-me") {
        console.log('The wee man is in my belly!');
      } else {
        console.log(`I'm eating a wee bit of ${meal}! Burp.`)
      }
    }
    return whatsForDinner;
}


const whatsForDinner = fatBastard('Kobe beef')
whatsForDinner();

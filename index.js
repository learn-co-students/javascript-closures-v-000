const app = "I don't do much."

function fatBastard(meal) {
  function whatsForDinner() {
    if (meal === "Mini-Me") {
      console.log('The wee man is in my belly!')
    } else {
      console.log("I'm eatin' a bit of ${meal}! Burp.");
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

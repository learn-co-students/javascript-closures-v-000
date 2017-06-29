function fatBastard(meal) {

  function whatsForDinner() {
    if (!meal) {
      console.log('My belly is empty. Woe is me.')
    } else if (meal === 'Mini-Me') {
      console.log('The wee man is in my belly!')
    } else {
      console.log(`I'm eatin' a bit of ${meal}! Burp.`)
    }
  }

  function digest() {
    meal = undefined;
  }

  return {
    whatsForDinner,
    digest
  }
}

var {whatsForDinner, digest} = fatBastard('Kobe beef')
whatsForDinner() // "I'm eatin' a bit of Kobe beef! Burp."
digest()
whatsForDinner() // "My belly is empty. Woe is me."

function raspyDoorGuy() {
  const password = "yarr";

  function givePassword(givenPassword) {
    if (givenPassword === password) {
      console.log("Ye may enter.")
    } else {
      console.log("Begone, ye landlubber!")
    }
  }

  function willBreakPrinciples(bribeAmount) {
    // This funciton is private. We cannot find out the amount he'd be brided for.
    return bribeAmount >= 50;
  }

  function bribe(amount) {
    if (willBreakPrinciples(amount)) {
      return password
    } else {
      console.log("Pssht. That won't work.")
    }
  }

  return {
    givePassword,
    bribe
  }

}

var {givePassword, bribe} = raspyDoorGuy()
givePassword('kitty') // "Begone, ye landlubber!"
bribe(45) // "Pssht. That won't work."
bribe(50) // "yarr"
givePassword("yarr") // "Ye may enter."

givePassword // returns givePassword function
bribe // returns bribe function
willBreakPrinciples // throws reference error

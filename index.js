const app = "I don't do much."

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

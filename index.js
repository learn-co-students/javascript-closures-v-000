const app = "I don't do much."

function hat() {
  const bestHat = 'cloche';

  function wearIt(aHat) {
    if (aHat === bestHat ) {
      console.log('Good hat, put it on');
    } else {
      console.log('Bad hat, throw away');
    }
  };

  function tellThem(complaint) {
    return complaint === "I'm at my wit's end!";
  }

  function complain(theyComplain) {
    if (tellThem(theyComplain)) {
      return bestHat;
    } else {
      console.log("Nope")
    }
  }

  return {
    wearIt,
    theyComplain
  };
}

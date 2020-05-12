"use strict"

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    if (blueStart < bluePulled) {
      return "Negali buti melynu daugiau istraukta,negu buvo ideta";
  
    } if (redStart < redPulled) {
      return "Negali buti raudonu daugiau istraukta,negu buvo ideta";
    }
    let blue = (blueStart - bluePulled);
    let red = (redStart - redPulled);
    let like = blue + red;
    return Math.round((1 / like * blue) * 1000000000000000) / 1000000000000000;
    
  
  }
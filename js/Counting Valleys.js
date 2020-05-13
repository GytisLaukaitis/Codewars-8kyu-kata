"use strict"

function countingValleys(s) {
    let val = 0;
    for (let i = 0, Level = 0; i < s.length; i++) {
      if (s[i] == 'U')
        Level++;
      else if (s[i] == 'D')
        Level--;
      if (Level == 0 && s[i] == 'U')
        val++;
    }
    return val;
  }


    
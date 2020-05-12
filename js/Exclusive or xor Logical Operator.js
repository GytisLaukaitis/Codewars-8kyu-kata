"use strict"

const xor = (a, b) => {
    if (a === false && b === false) return false
    if (a === false && b === true) return true
    if (a === true && b === false) return true
    if (a === true && b === true) return false
  }
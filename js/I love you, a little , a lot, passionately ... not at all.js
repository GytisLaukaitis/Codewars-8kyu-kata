"use strict"

function howMuchILoveYou(nbPetals) {
    const phrases = [
      'I love you',
      'a little',
      'a lot',
      'passionately',
      'madly',
      'not at all',
    ]
    const phrasesLimit = phrases.length - 1
    const takedOut = []
    let j = 0
    for (let i = 0; i < nbPetals; i++) {
      takedOut.push(phrases[j])
      if (j >= phrasesLimit) {
        j = 0
        continue
      }
      j++
    }
    const lastPetal = takedOut[takedOut.length - 1]
    return lastPetal
  }
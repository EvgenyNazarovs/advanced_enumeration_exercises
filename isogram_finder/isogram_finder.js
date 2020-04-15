const IsogramFinder = function (word) {
  this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
  let arr = this.word.split('')
  const overallTally = arr.reduce((tally, letter) => {
    if (tally[letter]) {
      tally[letter]++
    } else {
    tally[letter] = 1
  } return tally
}, {})

  const result = Object.values(overallTally).every((n) => (
      n <= 1)
  )

  return result;
}

module.exports = IsogramFinder;

const AnagramFinder = function (word) {
  this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const splitWord = this.word.toLowerCase().split('').sort().join('')
  const result = otherWords.filter((item) => {
    let temp = item.toLowerCase().split('').sort().join('')
    if (temp === splitWord && item !== this.word) {
      return item
    }

  })
  return result
}

module.exports = AnagramFinder;

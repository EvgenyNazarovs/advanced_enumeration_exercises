const AnagramFinder = function (word) {
  this.word = word;
}

const sortedWord = word => word.toLowerCase().split('').sort().join('')

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const splitWord = sortedWord(this.word);
  const result = otherWords.filter((item) => {
    let temp = sortedWord(item);
    if (temp === splitWord && item !== this.word) {
      return item
    }
  })
  return result
}

module.exports = AnagramFinder;

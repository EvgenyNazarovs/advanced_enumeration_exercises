const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
  const upcase = this.words.map(word => word.toUpperCase())
  return upcase;
}

module.exports = UpperCaser;

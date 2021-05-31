const Word = function(data) {
  this.data = data
  this.errors = []
}

Word.prototype.validateUserInput = function() {
if (this.data == "") {
  this.errors.push("Please enter something.")
  }
}

module.exports = Word
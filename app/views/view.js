function View() {
  this.$seedBox = $('#seed');
  this.$largestBox = this.$seedBox;
}

View.prototype.clearScreen = function () {
  this.$seedBox.html('');
};

View.prototype.addBox = function ($box) {
  this.$largestBox.append($box);
  this.$largestBox = $box;
};

View.prototype.scrollDown = function () {
  window.scrollTo(document.body.scrollWidth, document.body.scrollHeight);
};
function RainDrop (borderWidth, borderStyle) {
  this.borderWidth = borderWidth;
  this.borderStyle = borderStyle;
  this.$seed = $("<div></div>").css({
    borderWidth : this.borderWidth,
    borderStyle : this.borderStyle
  });
  this.$largestDrop = this.$seed;
}

RainDrop.prototype.renderSeed = function () {
  $('body').append(this.$seed);
};

RainDrop.prototype.addDrop = function (increment) {
  var size = this.$largestDrop.width() + increment;
  var $drop = $("<div></div>").css({
    borderWidth : this.borderWidth,
    borderStyle : this.borderStyle,
    width: size,
    height: size
  });
  this.$largestDrop.append($drop);
  this.$largestDrop = $drop;
};
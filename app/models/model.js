function Model() {
}

Model.prototype.generateBox = function (size) {
  return $('<div></div>').css({
    'height' : size + 'px',
    'width' : size + 'px'
  });
}
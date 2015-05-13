function randPosInt (num) {
  return Math.floor(Math.random() * num) + 1;
}

function sampleFromArray (array) {
  var length = array.length;
  return array[randPosInt(length) - 1];
}

function scrollPage () {
  window.scrollTo(document.body.scrollHeight,document.body.scrollHeight);
}
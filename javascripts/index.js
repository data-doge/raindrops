var rainDropInterval;
var maxBorderWidth = 30;
var maxSpeed = 2;

$(window).load(function() {

  var borderStyles = ['solid', 'dotted', 'dashed', 'double'];

  $(document).on('keyup', function(e) {

    if (e.keyCode === 13) {

      clearInterval(rainDropInterval);
      $('body').html('');
      var borderWidth = randPosInt(maxBorderWidth);
      var borderStyle = sampleFromArray(borderStyles);
      var speed = randPosInt(maxSpeed);
      var rainDrop = new RainDrop(borderWidth, borderStyle);
      rainDrop.renderSeed();

      var i = 0;
      rainDropInterval = setInterval(function() {
        rainDrop.addDrop(speed);
        scroll();
        if (i > 800) {
          clearInterval(rainDropInterval);
        } else {
          i++;
        }
      }, 10);

    }

  });

});
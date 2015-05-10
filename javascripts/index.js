var rainDropInterval;
var maxBorderWidth = 20;
var maxSpeed = 2;

$(window).load(function() {

  var borderStyles = ['solid', 'dotted', 'dashed', 'double'];
  var colors = ['#52656B', '#FF3B77', '#CDFF00', 'B8B89F'];

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
        var color = sampleFromArray(colors);
        rainDrop.addDrop(speed, color);
        scroll();
        i++;
        if (rainDrop.$largestDrop.width() > $(window).width() * 1.3) {
          clearInterval(rainDropInterval);
        }
      }, 10);

    }

  });

});
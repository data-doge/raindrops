var rainDropInterval;
var maxBorderWidth = 20;
var maxSpeed = 2;
var borderStyles = ['solid', 'dotted', 'dashed', 'double'];
var colors = ['#52656B', '#FF3B77', '#CDFF00', 'B8B89F'];

$(window).load(function() {

  $('p').fadeIn(2000);

  $(document).on('keyup', function(e) {

    if (e.keyCode === 13) {

      clearInterval(rainDropInterval);
      $('body').html('');
      var speed = randPosInt(maxSpeed);
      var rainDrop = new RainDrop({
        borderWidth : randPosInt(maxBorderWidth),
        borderStyle : sampleFromArray(borderStyles)
      });
      rainDrop.renderSeed();

      var i = 0;
      rainDropInterval = setInterval(function() {
        rainDrop.addDrop(speed, sampleFromArray(colors));
        scroll();
        i++;
        if (rainDrop.$largestDrop.width() > $(window).width() * 1.3) {
          clearInterval(rainDropInterval);
        }
      }, 10);

    }

  });

});
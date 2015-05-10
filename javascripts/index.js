$(document).ready(function() {
  var randomNumber = function(num) {
    return Math.floor(Math.random() * num + 1);
  }

  document.body.onkeyup = function(e) {
    if(e.keyCode == 13) {
      var pond = document.body;
      pond.innerHTML = '';
      var circle = document.createElement('DIV');
      var borders = ['solid','dotted','dashed'];
      circle.style.borderWidth = randomNumber(20) + 'px';
      circle.style.borderStyle = borders[randomNumber(2)];
      pond.appendChild(circle);
      var i = 10;
      var newCircle;
      var multiplier = randomNumber(1) + 1;
      var adder = randomNumber(5);
      var wut = setInterval(function() {
        circle.style.height = i * multiplier + 'px';
        circle.style.width = i * multiplier + 'px';
        newCircle = circle.cloneNode();
        circle.appendChild(newCircle);
        circle = newCircle;
        window.scrollTo(document.body.scrollHeight,document.body.scrollHeight);
        i = i + adder;
        if (i > 4200) {
          clearInterval(wut);
        }
      }, 5);
    }

  }
});


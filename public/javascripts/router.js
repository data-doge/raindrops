$(document).ready(function () {
  $('body').on('keyup', function(e) {
    var controller = new Controller();
    if (e.keyCode === 13) {
      controller.partyTime();
    }
  });
});
var totalMinutes = 25;
var alarmMP3 = new Audio("./assets/horn.mp3");

function countdown(minutes) {
  var seconds = 60;
  var mins = minutes;
  function tick() {
    var currentMinutes = mins - 1;
    seconds--;
    $(".timer").html(currentMinutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds));

    if (seconds <= 0 && currentMinutes <= 0) {
      $(".startButton").toggle();
      $("#plusButton").toggle();
      $("#minusButton").toggle();
      alarmMP3.play();
    }
    else if ( seconds > 0 ) { setTimeout(tick, 1000); }
    else if (mins > 1) { countdown(mins-1); }
  }

  tick();
}

$(document).ready(function() {
  $(".timer").html(totalMinutes + ":00");

  $("#minusButton").click(function() {
    if (totalMinutes > 1) totalMinutes -= 1;
    $(".timer").html(totalMinutes + ":00");
  });

  $("#plusButton").click(function() {
    totalMinutes += 1;
    $(".timer").html(totalMinutes + ":00");
  });

  $(".startButton").click(function() {
    $(".startButton").toggle();
    $("#plusButton").toggle();
    $("#minusButton").toggle();
    countdown(totalMinutes);
  });
});

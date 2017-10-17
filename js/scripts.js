$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");
  });
  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye</li>");
    $("ul#webpage").prepend("<li>Goodbye, user.  You will be the last to go.</li>");
  });
  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Very well then.  You have crossed me for the last time.  You shall rue the day you have displayed such insolence, insect.</li>");
  });
});

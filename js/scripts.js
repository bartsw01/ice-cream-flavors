$(document).ready(function(){
  var icecreams = ["vanilla", "strawberry", "Pralines & cream", "chocolate peanut butter"];

  for (var index = 0; index < icecreams.length; index += 1){
    $("ul").append("<li>" + icecreams[index] + "</li>");
  }

});

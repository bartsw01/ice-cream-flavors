$(document).ready(function() {
  var icecreams = ["vanilla", "strawberry", "Pralines & cream", "chocolate peanut butter"];

  icecreams.forEach(function(icecream) {
    $("ul").append("<li>"+icecream+"</li>");
  });

});

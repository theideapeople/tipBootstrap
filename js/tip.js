$(document).ready(function() {
  //open these in new windows
  $("body a[href^='http://']").attr("target","_blank");

  //create a date object
  var tipDate = Date.create();
  var tipYear = parseInt(tipDate.format('{yyyy}')); //as an int

  //set the copyright year
  $('.copyrightYear').html(tipYear);
});
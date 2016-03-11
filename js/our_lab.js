spinner = new Spinner().spin()

$(window).bind("load", function(){
  spinner.stop();
})


$(window).resize(function(){
  $(".Collage img").css("opacity", "0");
  $('.Collage').removeWhitespace().collagePlus();
})


$(document).ready(function() {
  $('.Collage').removeWhitespace().collagePlus()
  var target = document.getElementById("spinner")
  target.appendChild(spinner.el)    
  $('.masthead').visibility({
    once: false,
    onBottomPassed: function() {
      $('.fixed.menu').transition('fade in');
    },
    onBottomPassedReverse: function() {
      $('.fixed.menu').transition('fade out');
    }
  });
});


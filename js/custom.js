$(document).ready(function() {
  $('.ui.sidebar')
    .sidebar('attach events', '.toc.item')
  ;
  $(".join-study").click(function(){
    window.open('https://redcap.ucsf.edu/surveys/?s=849FYFLPA7');
  })
  
	// fix menu when passed
	$('.masthead')
	  .visibility({
	    once: false,
	    onBottomPassed: function() {
	      $('.fixed.menu').transition('fade in');
	    },
	    onBottomPassedReverse: function() {
	      $('.fixed.menu').transition('fade out');
	    }
	  })
	;

	// create sidebar and attach to menu open
	$('.ui.sidebar')
	  .sidebar('attach events', '.toc.item')
	;
});


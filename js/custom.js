$(document).ready(function() {
  // create sidebar and attach to menu open
  $('.ui.sidebar')
    .sidebar('attach events', '.toc.item')
  ;

  $(".show-enrollment-case").click(function(e){
    e.preventDefault();
    $('.ui.modal.case-control').modal('show');    
  })

  $(".show-enrollment-multi").click(function(e){
    e.preventDefault();
    $('.ui.modal.case-multi').modal('show');    
  })    

  $(".show-enrollment-african").click(function(e){
    e.preventDefault();
    $('.ui.modal.case-african').modal('show');    
  })   

  $(".show-enrollment-genes").click(function(e){
    e.preventDefault();
    $('.ui.modal.case-genes').modal('show');    
  })   

  $(".show-enrollment-pediatric").click(function(e){
    e.preventDefault();
    $('.ui.modal.case-pediatric').modal('show');    
  })   

  $(".show-enrollment-twins").click(function(e){
    e.preventDefault();
    $('.ui.modal.case-twins').modal('show');    
  })        

  $(".show-enrollment-microbiome").click(function(e){
    e.preventDefault();
    $('.ui.modal.case-microbiome').modal('show');    
  })     

  $(".remove").click(function(e){
    e.preventDefault();
    $(".modal").modal('hide');
  })             

  $(".join-study").click(function(){
    window.open('https://redcap.ucsf.edu/surveys/?s=RPKGc4');
  })

  $('.research-link').click(function(e){
    e.preventDefault()
    $('html, body').animate({
      scrollTop: $("#" + this.classList[1]).offset().top - 80
      },1000 );
  })

});


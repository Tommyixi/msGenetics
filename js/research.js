$(document).ready(function(){
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

  $(".show-enrollment-quartet").click(function(e){
    e.preventDefault();
    $('.ui.modal.case-quartet').modal('show');    
  })   

  $(".show-enrollment-twins").click(function(e){
    e.preventDefault();
    $('.ui.modal.case-twins').modal('show');    
  }) 

  $(".show-enrollment-arhms").click(function(e){
    e.preventDefault();
    $('.ui.modal.case-twins').modal('show');    
  })          

  $(".remove").click(function(e){
    e.preventDefault();
    $(".modal").modal('hide');
  })             

$('.research-link').click(function(e){
  e.preventDefault()
  $('html, body').animate({
    scrollTop: $("#" + this.classList[1]).offset().top - 40
    },1000 );
  })    
})
$(document).ready(function ()
    {
     $('#enviar').click(function()
     {
       var cidade = $("input").val();       
       
       
       
       $('.lista-cidade ul').append("<li>"+cidade+"</li>");
     });	
     
      
      
      $('#titulo,p').css('color','red');
      console.log(titulo);
      
      
      
    });
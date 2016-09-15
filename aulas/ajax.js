
//########### AJAX ##################

$(document).ready(function ()
{  
  $("#btn-carregar").click(function ()
  {
    $.getJSON('clientes.json',function(dados)
    {
      console.log(dados);      
    });
    
    
  });
  
  
  
  
});
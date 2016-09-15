$(document).ready(function ()
{  
  $('#enviar').click(function (evento)
  {
    evento.preventDefault();
    $('#cidade').parent().removeClass('erro');
    $('#cidade').parent().find('span').remove();
    $('#cidade').focusout();
    
    if($('#cidade').val()=='' || $('#cidade').val()==' ')
    {      
      $('#cidade').focus();
      $('#cidade').parent().addClass('erro'); 
      $('#cidade').parent().append('<span>O campo cidade é obrigatório!</span>');
    }else{    
      novaCidade = $('<li>'+$('#cidade').val()+'</li>');
      $(novaCidade).click(function ()
      {
	$(this).css('color',$('#cores').val());	
      });
      novaCidade.appendTo('#listacidades');
      $('#cidade').val('');
    }
  }); 
  
  $('#listacidades li').click(function ()
  {
    $(this).css('color',$('#cores').val());
    
  });
});



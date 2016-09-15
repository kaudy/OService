$(document).ready(function ()
{  
  
  $('#enviar').click(function()
  { 
    var cortr =cor();    
    var novo=$('<tr>'
	      +'<td>'
	      +$('#nome').val()
	      +'</td>'
	      +'<td>'
	      +$('#telefone').val()
	      +'</td>'
	      +'<td>'
	      +cortr
	      +'</td>'
	      +'<td>'
	      +'<button type="button">Remover</button>'
	      +'</td>'
	      +'</tr>');
    novo.css('background-color',cortr);
    novo.appendTo('#registros');    
    $('#nome').val('');
    $('#telefone').val('');
  });
  
  $('#registros button').click(function()
  {
    console.log('teste');
  });
  
  $('#enviar').mouseleave(function()
  {
    var cortr =cor();
    $(this).css('background-color',cortr);
  });
  
  
});

function cor()
{
    var numeroR = Math.floor(Math.random()*255);
    var numeroG = Math.floor(Math.random()*255);
    var numeroB = Math.floor(Math.random()*255);
    
    return 'rgb('+numeroR+','+numeroG+','+numeroB+')';
}


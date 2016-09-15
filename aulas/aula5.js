var corInicial='';
var evento;

function cor()
{  
  var valor	=document.getElementById('valor').value;
  var texto	=document.getElementById('texto'); 
  var corAtual 	=texto.style.color;
  
  if(corInicial=='')
  {
    corInicial = document.getElementById('texto').style.color;
  }
  
  if(corAtual==valor)
  {
    texto.style.color = corInicial; 
  }else
  {
      texto.style.color = valor;      
  }
  
  console.log(corInicial);
  console.log(corAtual);
  console.log(valor);
}

function pisca()
{ 
  if(evento!=null)
  {
    window.clearInterval(evento);
    evento = null;
  }else
  {
    evento = window.setInterval(cor, 500);
  }
}
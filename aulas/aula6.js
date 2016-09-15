var evento;


function ligaLetreiro()
{ 
  if(evento!=null)
  {
    window.clearInterval(correLetreiro);
    evento=null;
  }else
  {
    evento = window.setInterval(correLetreiro, 100);
  }
}


function correLetreiro()
{
  var letreiro	=document.getElementById('texto');
  var texto	=letreiro.innerHTML;
  
  var primeiraLetra = texto[0];
  
  var textoNovo = texto.substring(1)+primeiraLetra;
  
  letreiro.innerHTML=textoNovo;
}



function escrever()
{
  var valor		=document.getElementById('valor').value;
  var elem 		=document.getElementById('texto');
  var textoInvertido	='';
    
  for(var i=(valor.length-1);i>=0;i--)
  {
    textoInvertido+=valor[i];
  }
  elem.innerHTML=textoInvertido;
  
}

function verificaEmail()
{
  var elemUsuario	=document.getElementById('usuario');
  var elemServidor	=document.getElementById('servidor');
  
  var email 		=document.getElementById('email').value;
  var usuario		=email.substr(0,email.indexOf('@'));
  var servidor		=email.substr((email.indexOf('@')+1),email.length-1);  

  elemUsuario.innerHTML=usuario;
  elemServidor.innerHTML=servidor;  
}

function corrigeTexto()
{
  var textoerrado	=document.getElementById('textoerrado').value.toLowerCase();
  var elemTextoCorreto	=document.getElementById('textocorreto');
  var textocorrigido    ='';
  
  var txt1=textoerrado.split(' ');  
  
  for(var i=0;i<txt1.length;i++)
  {
    for(var j=0;j<txt1[i].length;j++)
    {
	if(j==0)
	{
	    textocorrigido+=txt1[i][j].toUpperCase();
	}else
	{
	    textocorrigido+=txt1[i][j];
	}
    }
    textocorrigido+=' ';
  }
  
   elemTextoCorreto.innerHTML=textocorrigido;  
}













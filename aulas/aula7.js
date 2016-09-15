

function buscaPalavra()
{
    var palavra		=document.getElementById('palavra').value;
    var texto 		=document.getElementById('texto');
    var textoOriginal 	=texto.innerHTML;    
    
    var possicaoTexto = textoOriginal.search(palavra);
    console.log(textoOriginal);
    console.log(possicaoTexto);
    
    if(possicaoTexto>-1)
    {
	var textoNovo = textoOriginal.replace(palavra,"<span>"+palavra+"</span>");
    }else
    {
      window.alert("palavra não encontrada");
    }
    
    texto.innerHTML=textoNovo;  
}
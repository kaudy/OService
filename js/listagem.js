
$(document).ready(function ()
{ 
    $.getJSON('/model/listar-os.php',function(dados)
    {
      for(os in dados)
      {
	var objDados = 
	{
	  solicitante: dados[os].solicitante,
	  data: dados[os].data,
	  departamento: dados[os].departamento,
	  status: dados[os].status	  
	}	
        
	addRegistro(objDados);
        
      } 
    });
});

//==============================================================================
//Adiciona registro do bando de dados na tabela #listaos do arquivo index.html
//==============================================================================
function addRegistro(dados)
{
    
  var linha=$("<tr>"+
	  "<td>"+
	  dados.solicitante+
	  '</td>'+
	  '<td>'+
	  formataDataBr(dados.data)+
	  '</td>'+
	  '<td>'+
	  dados.departamento+
	  '</td>'+
	  '<td>'+
	  verificaStatus(dados.status)+
	  '</td>'+	  
	  '</tr>');
  
  $('#lista-os tbody').append(linha); 
}

//==============================================================================
// Verifica o status da os e devolve icone correto
//==============================================================================
function verificaStatus(status)
{
    if(status=='Aberta')
    {
        return '<span class="label label-success">Aberta</span>';
    }else if(status=='Pendente')
    {
        return '<span class="label label-warning">Pendente</span>';
    }else if(status=='Fechado')
    {
        return '<span class="label label-default">Fechado</span>';
    }else
    {
        return '<span class="label label-danger">'+status+'</span>';
    }    
}

//==============================================================================
// Converte data do banco de dados para data br
//==============================================================================
function formataDataBr(data)
{
    var dataAux = data.slice(1,10).split('-');    
    return dataAux[2]+'/'+dataAux[1]+'/'+dataAux[0]+data.slice(10);
}







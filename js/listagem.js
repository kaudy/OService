
$(document).ready(function ()
{ 
    carregaOS();
});

//==============================================================================
//Adiciona registro do bando de dados na tabela #listaos do arquivo index.html
//==============================================================================
function addRegistro(dados)
{    
  var linha=$('<tr os-num="'+dados.numero+'">'+
          "<td>"+
	  dados.numero+
	  '</td>'+
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
  
    $(linha).click(abreOs);      
    $('#lista-os tbody').append(linha); 
}

//variavel abreOs chama uma função anonima que carrega os dados para o modal
// com base no parametro 'os-num' adicionado na tag <tr>
var abreOs = function()
{       
    var os = {'num': $(this).attr('os-num')};
    $.getJSON('/model/exibir-os.php',os,function(dados)
    {
        $('#modal-os .campo-numero').html('#'+dados[0].numero);
        $('#modal-os .campo-solicitante').html(dados[0].solicitante);
        $('#modal-os .campo-data').html(dados[0].data);
        $('#modal-os .campo-departamento').html(dados[0].departamento);
        $('#modal-os .campo-solicitacao').html(dados[0].solicitacao);
        $('#modal-os').modal(
        {
           show: true       
        });        
    });        
};

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


function carregaOS()
{
    $('#lista-os tbody').empty();
    $.getJSON('/model/listar-os.php',function(dados)
    {
      for(os in dados)
      {
	var objDados = 
	{
          numero: dados[os].numero,
	  solicitante: dados[os].solicitante,
	  data: dados[os].data,
	  departamento: dados[os].departamento,
	  status: dados[os].status,
          solicitacao: dados[os].solicitacao
	}	
        
	addRegistro(objDados);        
      } 
    });
}

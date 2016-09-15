
//########### AJAX ##################

$(document).ready(function ()
{  
  
  for(var i=1;i<=31;i++)
  {
    $('#dia').append('<option value"'+i+'"> '+i+'</option>');
  }
  
  for(var i=1;i<=12;i++)
  {
    $('#mes').append('<option value"'+i+'"> '+i+'</option>');
  }
  
  dataAtual = new Date();  
  for(var i=1970;i<=dataAtual.getFullYear();i++)
  {
    $('#ano').append('<option value"'+i+'"> '+i+'</option>');
  }
//------------------------------------------------------------  
  $('#cpf').keydown(function (evento)
  {
    console.log(evento.keyCode);
    if((evento.keyCode<48 || evento.keyCode>57))
    {
	if(evento.keyCode==8 || evento.keyCode==9)
	{
	  return true;
	}else
	{
	  return false;
	}
    }else
    {
      return true;
    }
  });
//------------------------------------------------------------  
  $('#form-cadastro').submit(function ()
  {
    console.log('entrou no form-cadastro');
    var formErro = false;
    //Reseta o status do form
    $('input, select').each(function (idx, el)
    {
      $(el).parent().removeClass('erro');
      $(el).parent().find('span').remove();
    });
    
    //Verifica se os input forão preenchidos
    $('input').each(function (idx, el)
    {
      if($(el).val() == '')
      {
	formErro = true;
	$(el).parent().addClass('erro');
	$(el).after('<span>O campo é obrigatório</span>');
      }
    });
    
    //Verifica se a data foi preenchida
    var setado = true;
    $('select').each(function (idx, el)
    {     
      if($(el).val()==0)
      {
	setado = false;	
      }
      
    });
    
    if(setado=false)
    {
      formErro =true;
      $('select').parent().addClass('erro');
      $('select').parent().append('<span>O campo é obrigatório</span>');
    }
    
    //Adiciona somente se não houver erros
    if(formErro == true)
    {
      return false
    }else
    {
      var objDados = 
      {
	nome: $('#nome').val(),
	cpf: $('#cpf').val(),
	telefone: $('#telefone').val(),
	sexo: $('input[name=sexo]:checked').val(),
	datanasc: $('#dia').val()+'/'+$('#mes').val()+'/'+$('#ano').val()
      }      
      addRegistro(objDados);      
    }    
  });
  
//------------------------------------------------------------ 
  $("#btn-carregar").click(function ()
  {
    $('#clientes tbody').empty();
    $.getJSON('clientes.php',function(dados)
    {
      for(cliente in dados)
      {
	var objDados = 
	{
	  nome: dados[cliente].nome,
	  cpf: dados[cliente].cpf,
	  telefone: dados[cliente].telefone,
	  sexo: dados[cliente].sexo,
	  datanasc: dados[cliente].datanasc
	}
	
	addRegistro(objDados);
      } 
    });  
  });
//------------------------------------------------------------    
});

/***************************************************/
function verificaSexo(sexo)
{
  if(sexo=='M')
  {
    return 'Masculino';
  }else
  {
    return 'Feminino';
  }
}
/***************************************************/
function trataCpf(cpf)
{
  return novoCpf = cpf.substr(0,3)+'.'+cpf.substr(3,3)+'.'+cpf.substr(6,3)+
		'-'+cpf.substr(9,2);  
}
/***************************************************/

function addRegistro(dados)
{
  linha=$("<tr>"+
	  "<td>"+
	  dados.nome+
	  '</td>'+
	  '<td>'+
	  trataCpf(dados.cpf)+
	  '</td>'+
	  '<td>'+
	  dados.telefone+
	  '</td>'+
	  '<td>'+
	  verificaSexo(dados.sexo)+
	  '</td>'+
	  '<td>'+
	  dados.datanasc+
	  '</td>');    
  
  $('#clientes tbody').append(linha);
  $(linha).fadeIn('slow'); 
}









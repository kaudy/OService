$(document).ready(function ()
{
    $('#filtro-departamento, #filtro-status').change(function (evento)
    {
        var dados = {
            departamento: $('#filtro-departamento').val(),
            status: $('#filtro-status').val(),
            num: $('#pesquisa').val()

        };

        carregaOS(dados);
    });

    //Quando precisonar tecla no campo de busca vai pesquisando
    $('#pesquisa').keyup(function ()
    {
        var num = $(this).val();

        var dados = {
            num: $('#pesquisa').val()
        };

        carregaOS(dados);

    });

    $('#btn-salvar').click(function ()
    {        
        var oldComentario =$('.campo-comentario').html();
        var dados = {
            num: $('.campo-numero').html(),
            status: $('.campo-status').val(),
            comentario: $('.campo-novo-comentario').val() + '<br>---<br>' + oldComentario
        };

        $.post('/model/altera-os.php', dados, function(retorno)
        {
            var retorno = JSON.parse(retorno);

            if (retorno.status == 'ok')
            {
                $('#modal-os').modal('hide');
                carregaOS();

            } else if (retorno.status == 'erro')
            {
                $('#alerta-form').removeClass('hide');
                $('#alerta-form').html(retorno.msg);
            }
        });

    });
    
    carregaOS(function(){
        var btnDel = $('<button class="glyphicon glyphicon-remove-circle"><span></span></button>');
        $(btnDel).click(function(eve)
        {
            eve.preventDefault()
            
        });
        
        var td = $('<td></td>').append(btnDel)
        $('#lista-os tbody tr').append(td);        
    });
    
});
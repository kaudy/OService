$(document).ready(function()
{     
    $('#form-login').submit(function(evento)
    {  
        $('#alerta-form').addClass('hide');
        $('#alerta-form').html('');
        evento.preventDefault();
        
        var dados = {
                usuario: $('#login').val(),
                senha: $('#senha').val()
        };
        
        $.post('/model/login.php',dados,function(retorno)
        {
            var status = JSON.parse(retorno);
            
            if(status.status !='ok')
            {
                $('#alerta-form').removeClass('hide');
                $('#alerta-form').html(status.msg);
            }else
            {                
                location.href='index.php';              
            }
            
        });       
    });
});

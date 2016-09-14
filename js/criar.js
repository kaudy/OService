
$(document).ready(function ()
{ 
    //Quando abrir o modal #modal-abrir limpa os campos e remove a classe has-error
    $('#modal-abrir').on('show.bs.modal',function()
    {
        $('#modal-abrir .modal-body .form-group').removeClass('has-error');
        $('#alerta-form').addClass('hide');
        $('#alerta-form').html('');
        $('#solicitante').val('');
        $('#solicitacao').val('');
    }); 
    
    //Ao clicar no botão btn-criar valida os campos e caso valor seja vazio 
    // adiciona a classe de erro .has-error ao form-group
    $('#btn-criar').click(function()
    {
        $('#modal-abrir .modal-body .form-group').removeClass('has-error');
        $('#alerta-form').addClass('hide');
        $('#alerta-form').html('');
        var valido=true;
        
        if($('#solicitante').val()=='')
        {
            $('#solicitante').parent().parent().addClass('has-error');
            valido=false;
        }
        if($('#solicitacao').val()=='')
        {            
            $('#solicitacao').parent().parent().addClass('has-error');
            valido=false;
        }
        
        //Envia o formulario
        if(valido==true)
        {
            var dados=
                {
                    solicitante: $('#solicitante').val(),
                    solicitacao: $('#solicitacao').val(),
                    departamento: $('#departamento').val()
                };
        
            $.post('/model/criar-os.php',dados, function(retorno)
            {
                var json = JSON.parse(retorno);
                
                if(json.status == 'ok')
                {
                    $('#modal-abrir').modal('hide');                    
                    carregaOS();
                   
                }else if(json.status == 'erro')
                {
                    $('#alerta-form').removeClass('hide');
                    $('#alerta-form').html(json.msg);
                }
            });            
        }
    });     
});


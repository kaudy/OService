$(document).ready(function ()
{ 
    $('#filtro-departamento, #filtro-status').change(function(evento)
    {
        var dados ={
            departamento: $('#filtro-departamento').val(),
            status: $('#filtro-status').val(),
            num: $('#pesquisa').val()
            
        };   
        
        carregaOS(dados);
    }); 
    
    //Quando precisonar tecla no campo de busca vai pesquisando
    $('#pesquisa').keyup(function()
    {
        var num = $(this).val();
        
        var dados ={            
            num: $('#pesquisa').val()
        };   
        
        carregaOS(dados);
        
    });
});
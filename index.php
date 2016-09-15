<?php
    require_once './model/config.php';   
    
    $logado = isset($_SESSION['usuario']);
    
    if($logado !=true)
    {
        header('Location: /login.html');
    }

?>
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="js/jquerymin.js" type="text/javascript"></script>
        <script src="js/bootstrap.js" type="text/javascript"></script>
        <link href="css/bootstrap.css" rel="stylesheet" type="text/css"/>        
        <script src="js/listagem.js" type="text/javascript"></script>
        <script src="js/criar.js" type="text/javascript"></script>
    </head>
    <body>
        <!-- Static navbar -->
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">OService</a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="index.php">Listar</a></li>
                        <li><a href="#" data-toggle="modal" data-target="#modal-abrir">Abrir</a></li>                          
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a id="logout" href="#">Logout </a>
                        </li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </nav>

        <div class="container">
            <h1>Listagem de OS</h1>
            <div class="row">
                <div class="span5">
                    <table class="table table-condensed table-hover" id="lista-os">
                        <thead>
                            <tr>
                                <th>OS</th>
                                <th>Solicitante</th>
                                <th>Date de Registro</th>
                                <th>Departamento</th>
                                <th>Status</th>                                          
                            </tr>
                        </thead>   
                        <tbody>                                                              
                        </tbody>
                    </table>
                </div>
            </div>
        </div>                

        <!-- Modal -->
        <div class="modal fade" id="modal-os" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">Ordem de Serviço <span class="campo-numero"></span></h4>
                    </div>
                    <div class="modal-body">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-4 control-label">Solicitante</label>
                                <div class="col-sm-8">
                                    <p class="form-control-static campo-solicitante" ></p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">Data de Registro</label>
                                <div class="col-sm-8">
                                    <p class="form-control-static campo-data"></p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">Departamento</label>
                                <div class="col-sm-8">
                                    <p class="form-control-static campo-departamento"></p>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">Solicitação</label>
                                <div class="col-sm-8">
                                    <p class="form-control-static campo-solicitacao"></p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>                        
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="modal-abrir" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">Abrir Nova Ordem de Serviço <span class="campo-numero"></span></h4>
                    </div>
                    <div class="modal-body">
                        <div id="alerta-form" class="alert alert-danger hide" role="alert">Erro ao tentar salvar a OS</div>
                        <form id="form-criar" class="form-horizontal">
                            <fieldset>
                                <!-- Select Basic -->
                                <div class="form-group">
                                    <label class="col-md-3 control-label" for="departamento">Departamento</label>
                                    <div class="col-md-8">
                                        <select id="departamento" name="departamento" class="form-control">
                                            <option value="Manutenção">Manutenção</option>
                                            <option value="Costureira">Costureira</option>
                                            <option value="TI">TI</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <!-- Textarea -->
                                <div class="form-group">
                                    <label class="col-md-3 control-label" for="solicitacao">Solicitação</label>
                                    <div class="col-md-8">                     
                                        <textarea class="form-control" id="solicitacao" name="solicitacao"></textarea>
                                    </div>
                                </div>
                            </fieldset>                           
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button> 
                         <button id="btn-criar" name="enviar" class="btn btn-success">Enviar</button>
                    </div>
                </div>
            </div>
        </div>

    </body>
</html>

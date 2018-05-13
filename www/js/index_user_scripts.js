var pessoaDao = new Dao("pessoas");
var pessoas;
var idAlterar;

function listar() { 
	pessoas = pessoaDao.listar();
	$("#lstPessoas").html(""); 
				   for (var i in pessoas) {
					   $("#lstPessoas").append("<a onclick='alterar("+i+")' class='list-group-item widget'>" + "<h4 class='list-group-item-heading'>"+"Cliente: " + pessoas[i].nome + "</h4>" + "<p class='list-group-item-text'>"+" Contato: " + pessoas[i].telefone +" Endereço: "+ pessoas[i].endereco+ "</p>"+"</a>");
                       if($('#rg').is(':checked')){
                           $("#lstPessoas").append("<a class='list-group-item widget'>"+ "</h4>" + "<p class='list-group-item-text'>"+" RG: " + pessoas[i].rg + "</p>"+"</a>");
                       }
                   }
}
function alterar(index){
	$("#txtNome").val(pessoas[index].nome);
    $("#txtDataNasci").val(pessoas[index].datanascimento);
    $("#txtEnde").val(pessoas[index].endereco);
    $("#txtBairr").val(pessoas[index].bairro);        
    $("#txtCpf").val(pessoas[index].cpf); 		
    $("#txtReg").val(pessoas[index].rg);        
    $("#txtPai").val(pessoas[index].pai);        
    $("#txtMae").val(pessoas[index].mae);         
    $("#txtTelefone").val(pessoas[index].telefone);        
    $("#txtLimite").val(pessoas[index].limite);         
    $("#txtConjugue").val(pessoas[index].conjugue);         
    $("#txtReferencia").val(pessoas[index].referencia);        
    $("#txProdutoData").val(pessoas[index].produtoData);
    
    
	idAlterar = index;
	$("#btnExcluir").show();

	$("#popupCadastro").modal("toggle");  

}

/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    listar(); 
    
     /* button  #btnNovo */
    $(document).on("click", "#btnNovo", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
         $("#txtNome").val("");
         $("#txtEmail").val("");
		idAlterar = -1;
		
		$("#btnExcluir").hide();
		$("#popupCadastro").modal("toggle");  
         return false;
    });
    
        /* button  #btnCancelar */
   $(document).on("click", "#btnCancelar", function(evt)
    {
         /* Other options: .modal("show")  .modal("hide")  .modal("toggle")
         See full API here: http://getbootstrap.com/javascript/#modals 
            */
        
         $("#popupCadastro").modal("toggle");  
         return false;
    });
    
        /* button  #btnSalvar */
    $(document).on("click", "#btnSalvar", function(evt)
    {
        
       //INSERE NO BANCO LOCAL, SETA DENTRO DO OBJETO O VALOR PASSADO NO CAMPO DE TEXTO
        var p = {}; 
		p.nome = $("#txtNome").val();
        p.datanascimento = $("#txtDataNasci").val();
        p.endereco = $("#txtEnde").val();
        p.bairro = $("#txtBairr").val();        
        p.cpf = $("#txtCpf").val(); 		
        p.rg = $("#txtReg").val();        
        p.pai = $("#txtPai").val();        
        p.mae = $("#txtMae").val();         
        p.telefone = $("#txtTelefone").val();        
        p.limite = $("#txtLimite").val();         
        p.conjugue = $("#txtConjugue").val();         
        p.referencia = $("#txtReferencia").val();        
        p.produtoData = $("#txProdutoData").val();           
        
        
        
		if(idAlterar<0) {
			
			pessoaDao.inserir(p);
			
		} else  {
			
			pessoaDao.alterar(idAlterar,p);
			
		}
		
		listar();

        
       
        
        $("#txtNome").val("");
        $("#txtDataNasc").val("");
        $("#txtEndereco").val("");                            
        $("#txtBairro").val("");                            
        $("#txtRg").val("");                           
        $("txtPai").val("");                    
        $("txtMae").val("");                        
        $("txtTelefone").val("");                        
        $("txtLimite").val("");                            
        $("txtConjugue").val("");                            
        $("txtReferencia").val(""); 
        $("txProdutoData").val(""); 

        
        $("#popupCadastro").modal("toggle");  
        
         return false;
    });
    
        /* button  #btnExcluir */
    $(document).on("click", "#btnExcluir", function(evt)
    {
        /* your code goes here */ 
		pessoaDao.excluir(idAlterar);
		$("#popupCadastro").modal("toggle");  
		listar();
		
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();












//Criar a função para fazer a troca das imagens
function galeria(){
    //selecionar todas as imagens que estão dentro de galeria_miniaturas
    //miniaturas sera um array-(grupo) de imagens
    var miniaturas = document.querySelectorAll(".galeria_miniaturas img")
    console.log(miniaturas)
    miniaturas.forEach(
        function(imagemIndividual){
            //adicionar um ouvinte em Cada Uma das imagens
            imagemIndividual.addEventListener("click",
                function(){
                    console.log(this.src)       // Exibir o caminho da imagem 
                    document.getElementById("Foto_grande").src = this.src
                }
            )
        }
    )
}





8

function testeDeevento(){
   const testeJs =document.getElementById("teste")
   const teste2Js =document.getElementById("teste2")

   //Adicionar um ouvinte
   testeJs.addEventListener("click",
     function(){                        //funcão anônima
         teste2Js.innerHTML = "Texto alterado pelo javaScript"
        }
    )
//   

   
}
galeria()

// Função para fazer a troca das imagens

function galeria(){
    // Selecionar todas as imagens que estão dentro da classe galeria_miniaturas
    // miniaturas será um arrey de imagens
    var miniaturas = document.querySelectorAll(".galeria_miniatura img")
    // console.log(miniaturas);
    miniaturas.forEach(
        function(imagemIndividual){
            // Adicionar um ouvinte em cada uma das imagens
            imagemIndividual.addEventListener("click",
                function(){
                    console.log(this.src)       // Exibir o caminho da imagem
                    document.getElementById("foto_grande").src = this.src
                }
            )
        }
    )
    
}

galeria()

// Teste de evento

function testeDeEvento(){
    const testeJs = document.getElementById("teste")
    const teste2Js = document.getElementById("teste2")

    // Adicionar ouvinte

    testeJs.addEventListener("click",
        function(){                         // Função anônima
            teste2Js.innerHTML = "Texto alterado pelo Javascript."
        }
    )
}
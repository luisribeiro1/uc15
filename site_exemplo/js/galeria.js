
// Criar a Função para Fazer a troca das imagens 
function galeria(){
//   Selecionar todas as imagens que estão dentro de galeria_miniaturas
var miniaturas = document.querySelectorAll(".galeria_miniaturas img")
// console.log(miniaturas)

   miniaturas.forEach(
       function(imagemindividual){
        //adicionar um ouvinte dem CADA UMA  das imagens
           imagemindividual.addEventListener("click",
              function(){
                 console.log(this.src)   //Exibir o caminho da imagem
                  document.getElementById("foto_grande").src = this.src
        
                }
            )
        }
 


    )


       
   
    
    
       

   
}


//  Criar a função para fazer a troca das imagens
// function testeDeEvento(){
//  const testels = document.getElementById("teste")
//  const teste2ls = document.getElementById("teste2")



//  } 

  //  Adicionar um ouvinte 
//   testels.addEventListener("click",
//     function(){                      // Função anomina
//         teste2js.innerHTML = "Texto alterado pelo javascript"

//     }

// )
galeria()
function galeria(){
    //Selecionar todas as imagens que estão dentro da galeria miniaturas
    // Miniaturas sera um array de imagens
    var miniaturas = document.querySelectorAll(".galeria_miniaturas img")
    // console.log(miniaturas);
   
    miniaturas.forEach(
        function(imagemIndividual){
            // adicionar um ouvinte em cada uma das imagens
            imagemIndividual.addEventListener("click"),
                function(){
                    
                } 
        }
    )
} 

galeria()

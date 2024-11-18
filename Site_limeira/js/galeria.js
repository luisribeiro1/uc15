function galeria(){
    var miniaturas = document.querySelectorAll(".galeria_miniatura img")
    miniaturas.forEach(
        function(imagemIndividual){
            imagemIndividual.addEventListener("click",
                function(){
                    console.log(this.src)
                    document.getElementById("foto_principal").src = this.src
                }
            )
        }
    )
    
}

galeria()
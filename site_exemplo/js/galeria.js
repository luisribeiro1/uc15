function galeria(){
    var miniaturas = document.querySelectorAll(".galeria_miniaturas img")
    miniaturas.forEach(
        function(imagemIndividual){
            imagemIndividual.addEventListener("click",
                function(){
                    document.getElementById("foto_grande").src = this.src
                }
            )
        }
    )
}

galeria()
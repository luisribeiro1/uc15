function galeria(){
    var miniaturas = document.querySelectorAll(".galeria_miniaturas img")


    miniaturas.forEach(
        function(imagemIndividual){
            imagemIndividual.addEventListener("click",
                function() {
                    console.log(this.src)
                    document.getElementById("foto_grande").src = this.src
                }
            ) 
        }
    )
}



function testeDeEvento(){
    const testejs = document.getElementById("teste")
    const teste2js = document.getElementById("teste2")

    testejs.addEventListener("click",
        function(){
            teste2js.innerHTML = "texto alterado pelo javascript"
        }

    )

//     teste2js.innerHTML = "Texto alterado pelo Javascript"
//     console.log(testejs)
// }

}
galeria()

//criar uma função para fazer a troca das imagens 

function galeria() {
    var miniaturas = document.querySelectorAll(".galeria_miniaturas img")
    miniaturas.forEach(
        function (imagemIndividual) {
            imagemIndividual.addEventListener("click",
                function () {
                    console.log(this.src)
                    document.getElementById("foto_grande").src = this.src

                }
            )
        }
    )

}

galeria()

function testeDeEventos() {
    const testeJs = document.getElementById("teste")
    const teste2Js = document.getElementById("teste2")


    teste.addEventListener("click",
        function () {                 //função anonima
            teste2Js.innerHTML = "Texto alterado pelo JavaScript"
        })
    //teste2Js.innerHTML = "Texto alterado pelo JavaScript"
    //console.log(testeJs)
}

testeDeEventos()


function galeria() {
  //Selecionar todas as imagens que estão dentro da galeria miniaturas
  // Miniaturas sera um array de imagens
  var miniaturas = document.querySelectorAll(".galeria_miniaturas img")
  // console.log(miniaturas)

  miniaturas.forEach(function (imagemIndividual) {
    // adicionar um ouvinte em cada uma das imagens
    imagemIndividual.addEventListener("click"),
      function () {
        console.log(this.src) //Exibir o caminho da imagens
        document.getElementById("foto_grande").src = this.src
      }
  })
}

//Criar a função para fazer a troca das imagens
function testeDeEventos() {
    
}

galeria()

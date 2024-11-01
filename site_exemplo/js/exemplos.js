// variáveis em javascript
let nome = "Louis" /* pode ter o valor alterado */
const idade = 25 /* não pode ter seu valor alterado */
var cidade = "Limeira" /* uso genérico */

// usando concatenação
console.log(nome + " tem " + idade + " e mora em " + cidade)
// usando template string
console.log(`${nome} tem ${idade} e mora em ${cidade}`)

//estrutura condicionais
if (idade >= 18) {
  console.log("É maior de idade")
} else {
  console.log("É menor de idade")
}

// mesmo exemplo usando operador ternário
let resultado = idade >= 18 ? "maior de idade" : "menor de idade"
console.log(resultado)

// estrutura de repetição
const lista_pizzas = [
  "Portuguesa",
  "Frango",
  "Quatro Queijos",
  "Peperoni",
  "Americana",
  "Bacon",
]

console.log(lista_pizzas[4])
// foreach para iterar sobre a array
lista_pizzas.forEach(function (pizza) {
  console.log(pizza)
})

// exemplo de tabuada
for(let i = 1; i<=10; i++){
    console.log(`tabuada do ${i}`)
    for(let x = 1; x <= 10; x++){
        let resultado = i * x
        console.log(`${i} x ${x} = ${resultado}`)
    }
}
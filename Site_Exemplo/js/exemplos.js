// variaveis no javascript
let nome = "felipe"        /*pode ter valor alterado*/
const idade = 12         /*não pode ter seu valor alterado*/
var cidade = "limeira"      /* uso genérico*/



//usando concatenação
console.log(nome + " tem " + idade + " e mora em " + cidade)


//usando o template string
console.log(`${nome} tem ${idade} e mora em ${cidade}`)

//estrutura condicional
if (idade >= 18) {
    console.log(" é maior de idade ")
} else {
    console.log(" é menor de idade ")
}

//usado o mesmo exemplo acima usando o operador ternário
let resultado = idade >= 18 ? "maior de idade" : "menor de idade"
console.log(resultado)

//estrutura de repetição
const lista_de_pizzas = ["portuguesa", "frango", "quetro queijos", "peperoni", "americana", "bacon"]

console.log(lista_de_pizzas[4])

//foreach para iterar sobre o array
lista_de_pizzas.forEach(
    function (pizza) {
        console.log(pizza)
    }
)
//exemplo de tabuada

for (let i = 1; i <= 10; i++) {
    console.log(`   `)
    console.log(`tabuada do ${i}`)
    console.log(``)
    for (let x = 1; x <= 10; x++) {
        let resultado = i * x
        
        console.log(`${i} x ${x} = ${resultado}`)
       
    }
}   


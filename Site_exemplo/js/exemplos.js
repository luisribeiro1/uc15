
// Variaveis

let nome = "Denilson"       // Pode ter o valor alterado 
const idade = 22            // Não pode ter seu valor alterado
var cidade = "Limeira"      // Uso genérico

// Usando concatenação
console.log(nome + " tem " + idade + " e mora em " + cidade)

// Usando template string
console.log(`${nome} tem ${idade} e mora em ${cidade}`)

// Estruturas condicionais
if (idade>=18){
    console.log("É maior de idade")
}
else{
    console.log("É menir de idade")
}

// Mesmo exemplo, usando operador ternário
let resultado = idade>=18 ? "Maior de idade" : "Menor de idade"
console.log(resultado)

// Estruturas de repetição
const lista_de_pizzas = ["Portuguesa","Frango","Quatro Queijos","Peperone","Americana","Bacon"]

console.log(lista_de_pizzas[4])

// Foreach para iterar sobre array
lista_de_pizzas.forEach(
    function(pizza){
        console.log(pizza)
    }
)

// Tabuada
for(let i = 1;i <= 10; i++){
    console.log(``)
    console.log(`Tabuada do ${i}`)
    console.log(``)
    for(let x = 1;x <= 10; x++){
        let result = i * x
        console.log(`${i} x ${x} = ${result}`)
    }
}
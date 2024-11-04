
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

// Funções

// 1 - Javascript

const text = "Hoje é segunda-feira, dia de estudar muito."
console.log(text.toUpperCase())
let words = text.split(",")
console.log(words)

const dataUsuario = "04/11/2024"
const itens = dataUsuario.split("/")
console.log(itens);
const dataBanco = `${itens[2]}-${itens[1]}-${itens[0]}`
console.log(dataBanco)

// 2 - Usuário

function dataformatada(data, tipo){
    // alert("A função foi chamada e recebeu como parâmetro a data: " + data)
    if(tipo == "uTOb"){
        const itens = data.split("/")
        const dataFinal = `${itens[2]}-${itens[1]}-${itens[0]}`
        return dataFinal
    }
    else{
        const itens = data.split("-")
        const dataFinal = `${itens[2]}/${itens[1]}/${itens[0]}`
        return dataFinal
    }
}

let dataFormatoBanco = dataformatada("22/12/2024", "uTOb")
console.log("A data no formato banco é: " + dataFormatoBanco);

let dataFormatoUsuario = dataformatada("2024-11-09", "bTOu")
console.log("A data no formato usuário é: " + dataFormatoUsuario);

// Objeto

const pessoa = {
    nome: "João",           // Propriedade chave: valor
    idade: 25,
    cidade: "Limeira"
}

console.log(pessoa.nome);
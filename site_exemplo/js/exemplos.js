
// variavel em javascript
let nome = "Edesom"
const idade = 20
var cidade = "Cordeiropolis"

console.log(nome + " tem " + idade + " e mora em " + cidade)
console.log(`${nome} tem ${idade} e mora em ${cidade}`)

if(idade>=18){
    console.log("É maior de idade");
}else{
    console.log("É menor de idade");
}

let resultado = idade>=18 ? "Maior de idade" : "Menor de idade"
console.log(resultado)

const lista_de_pizzas = ["Portuguesa","Frango","Quatro queijos","Peperoni","Americana","Bacon"]

console.log(lista_de_pizzas[4]);

lista_de_pizzas.forEach(
    function(pizza){
        console.log(pizza);
    }
)

// for(let i = 0;i < 50; i++){
//     console.log(i)
// }

// for(let i = 0;i <= 10; i++){
//     for(let x = 0;x <= 10; x++){
//         let resultado = i * x
//         console.log(`${i} x ${x} = ${resultado}`)
//     }
// }

// function multiplicationTable(size) {
//     for (let i = 0; i <= size; i++) {
//         console.log(`Tabuada do ${i}:`);
//         for (let x = 0; x <= size; x++) {
//             console.log(`${i} x ${x} = ${i * x}`);
//         }
//         console.log(''); // Linha em branco para separar as tabuadas
//     }
// }

// multiplicationTable(10);

function multiplicationTable(size) {
    for (let i = 1; i <= size; i++) { // Começando de 1
        console.log(`Tabuada do ${i}:`);
        for (let x = 0; x <= size; x++) {
            console.log(`${i} x ${x} = ${i * x}`);
        }
        console.log(''); // Linha em branco para separar as tabuadas
    }
}


const texto = "Hoje é segunda-feira, dia de estudar muito."
let palavras = texto.split("-")
console.log(palavras)

const dataUsuario = "04/11/2024"
const itens = dataUsuario.split("/")
console.log(itens)
    const dataBanco = `${itens[2]}-${itens[1]}-${itens[0]}`
    console.log(dataBanco)


function dataformatada(data){
    const itens = data.split("/")
    const dataFinal = `${itens[2]}-${itens[1]}-${itens[0]}`
    return dataFinal
}

let dataFormatoBanco = dataformatada("22/12/2024", "uTOp")
console.log("A data no formato banco é: " + dataFormatoBanco)

let dataFormatoUsuario = dataformatada("2024-11-09", "bTOu")
console.log("A data no formato banco é: " + dataFormatoUsuario)




// function databancouser(data, tipo){
//     if(tipo[0] == "u"){
//         const itens = data.split("/")
//         const  datafinal = `${itens[2]}-${itens[1]}-${itens[0]}`
//         return datafinal 
//     }
//     else if(tipo[0] == "b"){
//         const itens = data.split("-")
//         const  datafinal = `${itens[0]}/${itens[1]}/${itens[2]}`
//         return datafinal 
//     }
//     else{
//         return "Digite o tipo certo"
//     }
// }

// console.log(databancouser("01/24/2003", "uTOb"))

// console.log(databancouser("01-24-2003", "bTOu"))

const pessoa = {
    nome: "João",
    idade: 25,
    cidade: "Limeira"
}
console.log(pessoa.nome)


let nome = "pablo"           /*pode ter o valor alterado*/
const idade = 18             /*não pode ter seu valor alterado*/
var cidade = "Limeira"      /* uso genérico*/

console.log(nome + " tem " + idade + " e mora em " + cidade)

console.log(`${nome} tem ${idade} e mora em ${cidade}`)

if(idade>=18){
    console.log("E maior de idade")
}else{
    console.log("E menor de idade")
}

// MESMO EXEMPLO ACIMA, UTILIZANDO OPERADOR TERNÁRIO
let resultado = idade>=18 ? "Maior de idade" : "Menor de idade"
console.log(resultado)



const lista_de_pizzas = ["Portuguesa", "Frango", "Quatro queijos", "Peperoni", "Americana", "Bacon"]

console.log(lista_de_pizzas[4])
//FOREACH PARA ITERAR O ARRAY
lista_de_pizzas.forEach(function(pizza){
    console.log(pizza);
}
)

for(let i = 1;i <= 10; i++){
    console.log(`TABUADA DO ${i}`)
    for(let x = 0;x <= 10; x++){
        let resultado = i * x
        console.log(`${i} x ${x} = ${resultado}`)
    }
}

const texto = "Hoje é segunda-feira, dia de estudar muito."
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
let palavras = texto.split("-")
console.log(palavras);

const dataUsuario = "04/11/2024"
const itens = dataUsuario.split("/")
console.log(itens);
const dataBanco = `${itens[2]}-${itens[1]}-${itens[0]}`
console.log(dataBanco);

function dataformatada(data, formato){
    //alert("a função foi chamada e recebeu como parâmetro: " + data")
    if(formato == "uTOb"){
        const itens = data.split("/")
        const dataFinal = `${itens[2]}-${itens[1]}-${itens[0]}`
        return dataFinal
    }else{
        const itens = data.split("-")
        const dataFinal = `${itens[2]}-${itens[1]}-${itens[0]}`
        return dataFinal
    }
}

let dataFormatoBanco = dataformatada("22/12/2024","uTOb")
console.log("A data formato banco é: " + dataFormatoBanco)

let dataFormatoUsuario = dataformatada("2024-11-09","bTOu")
console.log("A data formato usuário é: " + dataFormatoUsuario)

//objeto em javascript
const pessoa = {
    nome: "João",
    idade: 25,
    cidade: "Limeira"
}

console.log(pessoa.nome);








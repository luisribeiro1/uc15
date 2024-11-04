// variaveis em javascript
let nome = "Inacio"             /*pode  ter o seu valor alterado */ 
const idade = 25               /*não pode ter seu valor alterado */
var cidade = "Limeira"         /*uso genérico */


/*Usando concatenação*/
console.log(nome +" tem "+idade+" e mora em "+ cidade)
/*Usando template strig*/
console.log(`${nome} tem ${idade} em mora ${cidade}`)


// Estrutura condicionais
if(idade>=18){
    console.log("É maior de idade")

}else{
    console.log("É menor de idade")
}

// Mesmo exemplo acima, usando operador ternário 
let resultado = idade>=18 ? "Maior de idade":"Menor de idade"
console.log(resultado)

//Estruturas de repetição 
const pizza = ["Portuguesa","Frango","Quatro queijos","Peperoni","Americana","Bacon"]

console.log(pizza)
pizza.pop()
console.log(pizza)

//Foreach para iterar sobre o array
pizza.forEach(
    function(pizza){
        console.log(pizza)
    }
)

// Exemplo de tabuada

// for(let i = 1 ; i <= 10 ; i++){
//     console.log(`Tabuada do ${i}`) 
    
//     for(let x = 1 ;x <= 10 ; x++){
//         let resultado = i * x
//     console.log(`${i} x ${x} = ${resultado}`)
//     }
// }

// Funções javascript

const texto = "Hoje é segunda-feira e amanha é terça-feira"
console.log(texto.toLowerCase())

// const datausuario = "04/11/2024"
// const itens = datausuario.split("/")
// const databanco = `${itens[2]}-${itens[1]}-${itens[0]}`
// console.log(databanco)


function dataformatada(data, formato){
    if(formato[0].toLowerCase()  == "u"){
    const itens = data.split("/")
    const databanco = `${itens[2]}-${itens[1]}-${itens[0]}`
    return databanco
    }
    else if (formato[0].toLowerCase() == "b"){
        const itens = data.split("-")
        const databanco = `${itens[2]}/${itens[1]}/${itens[0]}`
        return databanco
    }
    else {
        return "Selecione o metodo correto! [uTOB ou bTOu]"
    }
}

console.log(dataformatada("24/11/1992", "utob"))

console.log(dataformatada("1992-11-24", "btou"))

console.log(dataformatada("1992-11-24", "3"))


const pessoa = {
    nome: "Joao",
    cidade: "Limeira",
    idade: 25
}

pessoa.cidade
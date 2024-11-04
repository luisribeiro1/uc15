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

console.log(pizza[4])

//Foreach para iterar sobre o array
pizza.forEach(
    function(pizza){
        console.log(pizza)
    }
)

// Exemplo de tabuada

for(let i = 1 ; i <= 10 ; i++){
    console.log(`Tabuada do ${i}`) 
    
    for(let x = 1 ;x <= 10 ; x++){
        let resultado = i * x
    console.log(`${i} x ${x} = ${resultado}`)
    }
}

// Uso de funções na javascript. 1 -Funções do Javascript . 2 - Funções de usuários

const texto = "Hoje é segunda-feira, dia de estudar muito ."
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
let palavras = texto.split("-")
console.log(palavras)

const dataUsuario = "04/11/2024"
const itens = dataUsuario.split("/")
console.log(itens)
const DataBanco = `${itens[2]}-${itens[1]}-${itens[0]}`
console.log(DataBanco)


// function dataformatada(data){
//     // alert("A função foi chamada e recebeu como paramentro : " + data)
//     const itens = data.split("/")
//     const datafinal = `${itens[2]}-${itens[1]}-${itens[0]}`
//     return datafinal
// }

// let dataformatoBanco = 
// console.log("A data  no usuario é :" + dataformatoBanco)

// let dataformatoUsuario = dataformatada("22/12/2024","bTOu")
// console.log("A data  no usuario é :" + dataformatoUsuario)


function dataformatada(data, formato){
    if(formato[0] == "u"){
        const itens = data.split("/")
        const DataBanco =`${itens[2]}-${itens[1]}-${itens[0]}`
        return DataBanco 
    }
    else if(formato[0] == "b"){ 
        const itens = data.split("-")
        const DataBanco = `${itens[2]}/${itens[1]}/${itens[0]}`   
        return DataBanco 
    }
    else{
        return "Selecione o metodo correto ! [uTOb ou bTOu]"
    }
}
 console.log(dataformatada("22/12/2024","uTOb"))
 console.log(dataformatada("2024-12-22","bTOu"))

 // objeto em Javascript
 const pessoa= {
    nome:"João",                //propriedade chave : valor
    idade:25,
    cidade:"Limeira"
 }
console.log(pessoa.nome)


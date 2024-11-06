// variaveis em javascript
let nome ="moises"   /*pode ter o valor alterad0*/
const idade = 20    /*não pode ter o seu valor alterado*/
var cidade ="limeira" /*uso generico*/

// usando concatenação
console.log(nome + "tem" + idade + "e mora em" + cidade)

// usando template string
console.log(`${nome} tem {$idade}  e mora em  ${cidade}`)


// Estruturas condicionais
if(idade>=18){
 console.log("é maior de idade");
}else{
    console.log("é mernor de idade");
}

// Mesmo exemplo acima, usando operador ternário
let resultado = idade>=18 
  ? "Maior de idade " 
  : "Menor de idade"
console.log(resultado)

// Estruturas de repetição
const lista_de_pizzas =["Calabresa","Quatro queijos","peperone","Americana","Bacon"]







console.log(lista_de_pizzas[4]);

// Foreach para iterar sobre o array
lista_de_pizzas.forEach(
    function(pizza){
       console.log(pizza);
    }
)

// Exemplo de tabuada
for(let i =0;i <10; i++){
  for(let x =0;x <10; x++){
    let resultado = i * x
    console.log(`${i} x ${x} = ${resultado}`)
  }  
 
}

// uso de funções no javascript. 1- Funções do javascript. 2- Funções de usuarios

const texto = "hoje é segunda-feira, dia de estudar muito."
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
let palavras = texto.split("-")
console.log(palavras)

const dataUsuario = "04/11/2024"
const itens = dataUsuario.split("/")
console.log(itens)
const databanco = `${itens[2]}-${itens[1]}-${itens[0]}`
console.log(databanco)



function dataformatada(data,Formato){
  // alert("a função foi chamada e recebeu como parâmetro; " + data)
 if (Formato =="uTOb") {
  const itens = data.split("/")
  const dataFinal = `${itens[2]}-${itens[1]}-${itens[0]}`
  return dataFinal
 } else{
  const itens = data.split("/")
  const dataFinal = `${itens[2]}-${itens[1]}-${itens[0]}`
  return dataFinal
 }
 
  
}


let dataFormatoBanco = dataformatada("22/12/2024","uTOb")
console.log("A data no formato banco  é: " + dataFormatoBanco)


let dataFormatoUsario = dataformatada("22/12/2024","bTOu")
console.log("A data no formato Usuario  é: " + dataFormatoUsario)

 
// Objeto em javascript 
const pessoa = {
  nome: "Moisés",              // proprieade chave: valor
  idade: 20,
  cidade: "São Paulo" 
}
console.log(pessoa.nome)

 










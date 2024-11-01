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
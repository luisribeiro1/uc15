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
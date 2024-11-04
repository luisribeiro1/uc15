// variáveis em javascript
let nome = "Louis"; /* pode ter o valor alterado */
const idade = 25; /* não pode ter seu valor alterado */
var cidade = "Limeira"; /* uso genérico */

// usando concatenação
console.log(nome + " tem " + idade + " e mora em " + cidade);
// usando template string
console.log(`${nome} tem ${idade} e mora em ${cidade}`);

//estrutura condicionais
if (idade >= 18) {
  console.log("É maior de idade");
} else {
  console.log("É menor de idade");
}

// mesmo exemplo usando operador ternário
let resultado =
  idade >= 18 ? "maior de idade" : "menor de idade"; /* ? = if, : = else */
console.log(resultado);

// estrutura de repetição
const lista_pizzas = [
  "Portuguesa",
  "Frango",
  "Quatro Queijos",
  "Peperoni",
  "Americana",
  "Bacon",
];

console.log(lista_pizzas[4]);
// foreach para iterar sobre a array
lista_pizzas.forEach(function (pizza) {
  console.log(pizza);
});

// exemplo de tabuada
for (let i = 1; i <= 10; i++) {
  console.log(`tabuada do ${i}`);
  for (let x = 1; x <= 10; x++) {
    let resultado = i * x;
    console.log(`${i} x ${x} = ${resultado}`);
  }
}

// Uso de funções no javascript. 1- funções do javascript. 2- funções de usuários

const texto = "Hoje é segunda-feira, dia";
console.log(texto.toUpperCase());
let palavras = texto.split("-");
console.log(palavras);

const dataUsuario = "04/11/2024";
const itens = dataUsuario.split("/");
/* const dataBanco = itens.reverse()*/
const dataBanco = `${itens[2]}-${itens[1]}-${itens[0]}`;
console.log(dataBanco);

/* function dataFormatado(data, formato) {
  // alert("A função foi chamada e recebeu como parâmetro: " + data)
  const itens = data.split("/");
  const datafinal = `${itens[2]}-${itens[1]}-${itens[0]} `
  return datafinal
} */

// exemplo de função de usuario
function dataFormatado(data, formato) {
  if (formato == "uTOb") {
    const itens = data.split("/");
    const datafinal = `${itens[2]}-${itens[1]}-${itens[0]} `;
    return datafinal;
  }else{
    const itens = data.split("-")
    const datafinal = `${itens[2]}/${itens[1]}/${itens[0]} `;
    return datafinal
  }
}

let dataFormatoBanco = dataFormatado("22/12/2024", "uTOb");
console.log("A data no formato banco é: " + dataFormatoBanco);

let dataFormatoUsuario = dataFormatado("2024-11-09", "bTOu");
console.log("A data no formato usuario é: " + dataFormatoUsuario);

// Objeto em Javascript
const pessoa = {
  nome: "João", /* propriedade chave: valor */
  idade: 25,
  cidade: "Limeira"
}

console.log(pessoa.nome)

// criar a função para fazer a troca das imagens
function exemplo() {
  const testeJS = document.getElementById("teste")
  const teste2JS = document.getElementById("teste2")

  // Adicionar um ouvinte
  testeJS.addEventListener("click", function () { //função anonima
    teste2JS.innerHTML = "Texto alterado pelo js"
  });

  // console.log(testeJS)
}
// Exercícios de interpretação de código

// 1.Leia o código abaixo

/*  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })


  a) O que vai ser impresso no console?  */

// RESPOSTA: Vai ser impresso um novo array com 
// os mesmo objetos da const usuarios, mostrando item por item, o indice e o array origiral.


/// 2.Leia o código abaixo

/* 
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)  */

// a) O que vai ser impresso no console?
//RESPOSTA: Vai retorna somente aos nomes dos item.


  // 3.Leia o código abaixo
/* RESPOSTA:

  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)

 // a) O que vai ser impresso no console?

 // O FILTER vai filtrar do array origiral e vai criar outro variavel para guardar o valor  
 //e o resultado so pode ser verdadeiro ou falsa, logo oq esta sendo pedido na funçao e pra comparar
 // e retorna o item.apelido diferentes de chijo, logo tera (2)array amanda Rangel"mandi"
// Lais Petra"Laura"

*/


// ---> Exercícios de escrita de código

    const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 // a) Crie um novo array que contenha apenas o nome dos doguinhos

const dogs = pets.map((nomes)=> {
          return nomes.nome
 })
 console.log(dogs)

// b) Crie um novo array apenas com os [cachorros salsicha]

const dogsSalsicha = pets.filter((nomes) =>{
    return nomes.raca === "Salsicha"
}
)

console.log(dogsSalsicha)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!" */

const poodlesMsg = pets.filter((racas) => {
    return racas.raca === "Poodle"

}).map((raca)=> {
  console.log(raca.nome) 
  return ("voce ganhou um cupom de desconto de 10% para tosar o " + raca.nome)

}

)

console.log(poodlesMsg)


//Dado o seguinte array de produtos, realize as
//operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 //a) Crie um novo array que contenha apenas o nome de cada item

 const listaMercado = produtos.map((lista)=> {
    return lista.nome
})

console.log(listaMercado)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

let descontoProdutos = produtos.map((produto) =>{
     let novoObj = {
          nome: produto.nome ,
          preco: produto.preco - (produto.preco * 0,5),
          
     }

     return novoObj
}

)

console.log(descontoProdutos)

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const listaBebidas = produtos.filter((bebidas) =>{
    return bebidas.categoria === "Bebidas"

})

console.log(listaBebidas)


//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
 
const palavraYpe = produtos.filter((palavra) =>{
    return palavra.nome.includes("Ypê")
}


)
console.log(palavraYpe)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const palavraYpe1 = produtos.filter((palavra) =>{
    return palavra.nome.includes("Ypê") 
    return palavra.preco

}).map((palavraYpe1) => {
      return (" compre " +  palavraYpe1.nome + " por " + palavraYpe1.preco)
    
})
    
 console.log(palavraYpe1)


 // 🏅  Desafios

 const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 // Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

 const ordemPokemons = pokemons.map((nomes)=> {
    return (nomes.nome)

 }
 )
 console.log(ordemPokemons.sort())


 
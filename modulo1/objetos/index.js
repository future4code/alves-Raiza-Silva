// exercicio de interpretação 

 /*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

//1. Leia o código abaixo

//a) O que vai ser impresso no console?

 resposta --- > 

console.log(filme.elenco[0]) // primeria elemento ""Matheus Nachtergaele""

console.log(filme.elenco[filme.elenco.length - 1]) 

 ultima posiçao do elenco "Virginia Cavendish"

console.log(filme.transmissoesHoje[2] 
 
"canal: globo , hoario : "14h" */


/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

//const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
*/

/*2. Leia o código abaixo 

a) O que vai ser impresso no console?

console.log(cachorro) // nome: juca idade : 3 raca: "SRD"
console.log(gato) // nome: juba idade: 3 raca "SRD"
console.log(tartaruga) // nome: jubo idade: 3 : "SRD"


 b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

 copia a estrutura da funcao , podendo ser aproveitada e se quiser pode ser adicioanda outras coisas.



3. Leia o código abaixo 
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}


a) O que vai ser impresso no console? 


console.log(minhaFuncao(pessoa, "backender"))  // false
console.log(minhaFuncao(pessoa, "altura")) //indefinido



 b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

 pq "altura não foi definido dentro do objeto"


*/

//EXERCICIO DE ESCRITA DE CODIGO

// 1. respostas

const pessoa = {
    nome: "Raiza",
    apelido: ["iza", "rah", "india"]

}

console.log(`Eu sou ${pessoa.nome}, mas pode chamar de: ${pessoa.apelido}`)
 

const novaPessoa = {
     ...pessoa, 
    nome : "Raiza" ,
    apelido: ["iza", "rah", "india"]

}

novaPessoa.apelido = ["raisa", "rai", "rainha"]
console.log(novaPessoa)


// 2.respostas

//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
 const objetos1 = {
    nome : "raiza", 
    idade: 22 , 
    profisao: "mkt" ,
    objetos2 : { 
         nome : "carol",
         idade: 21 ,
         profisao : "vendedora"

    }
    
 }
 console.log(objetos1)



//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

const pessoaUser = {
nome: " maria" ,
idade : 34 ,
profisao : "empresaria"
}


 /*1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão`*/

const minhaFuncao = {
	nome: "maria", 
  idade: 34, 
	profissao: "empresaria"
}

console.log([minhaFuncao.nome.length, minhaFuncao.nome, minhaFuncao.idade,
     minhaFuncao.profissao, minhaFuncao.profissao.length])



 

 //3 Resolva os passos a seguir
//a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

const carrinho = [""]

console.log(carrinho)



//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as 
//seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

const frutasSacolao = {
objeto1: {nome: "pera", disponibilidade: true} , 
objeto2: {nome: "uva", disponibilidade: true} ,
objeto3: {nome: "maca", disponibilidade: false}


}
console.log(frutasSacolao)


//c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a 
//dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. */


// essa nao consegui fazer 

     
 








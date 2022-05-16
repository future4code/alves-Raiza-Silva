// EXERCICIOS AULA DE FUNCAO

/* 1.

function minhaFuncao(variavel) {
	return variavel * 5
}


console.log(minhaFuncao(2))
console.log(minhaFuncao(10)) */


 /*  function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10)) */


// a) resposta: 

// VAI SER RETORNADO O VALOR QUE FOI DEFINIDO NA VARIAVEL PELO USUARIO 2*5 = 10 
// 10*5 = 50



// b) resposta: 

// A FUNCAO VAI SER RETORNADA COM O RESULTADO PARA O USUARIO, POIS E OUTRA FORMA DE USAR A FUNÇAO COM O RETURN 
// 10 , 50 .



// 2 .L o código abaixo
/*


let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)



/* a. Explique o que essa função faz e qual é sua utilidade
RESPOSTA:

FOI UMA CRIADA UMA VARIAVEL PARA O USUARIO DIGITAR
DEPOIS FOI CRIADO UMA CONSTANTE DE FUNCAO PARA SER INSERIDO TEXTO DO USUARIO 
COM RETORNO DE UM TEXTO, COM PROTOTIPOS DE MUDAR PARA LETRA MINUSCULA E INCLUIR SE 
A PALAVRA CENOURA / TRUE OU FALSE DENTRO DA STRING.




b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
    

i.   `Eu gosto de cenoura`  = eu gosto de cenoura
     ii.  `CENOURA é bom pra vista` = cenoura é bom pra vista 
     iii. `Cenouras crescem na terra` = cenouras crescem na terra 


*/

//  2.Exercícios de escrita de código

/* 1.A função não deve receber nenhum parâmetro e deve imprimir 
uma mensagem falando algumas informações sobre você, como:*/


  
/* const nome = function() {
          console.log(nome)= ("Eu sou Raiza, tenho 24 anos, moro em marabá e sou estudante.")
return nome
}

 console.log(nome) */


/* b)  Agora escreva uma função que receba 4 parâmetros que correspondem às
 informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique 
 todas as informações da pessoa em uma só mensagem com o template: */ 

 
 

/*  

function nome(nomeUser) {
console.log(nomeUser)
return resposta

}

const usernome = "raiza"
const idade = 24
const cidade = "maraba"
const profissão = "Estudante"
const resposta = ("ola sou" + usernome +  "tenho"  + idade + "moro em " + cidade + "e sou" + profissão)
console.log(resposta)


*/


//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
//faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.


/* function doisNumeros(a, b ) {
    console.log = (a + b)

    return somaResposta 
}

const n1 = 2
const n2 = 4
const somaResposta= (n1 + n2)
console.log(somaResposta)
 
// 6 */






//b) Faça uma função que recebe 2 números e retorne um booleano que 
//informa se o primeiro número é **maior ou igual** ao segundo.

/*

function doisNumeros(a, b ) {
    console.log = (a>=b)

    return somaResposta 
}

const n1 = 4
const n2 = 4
const somaResposta= (n1>=n2)
console.log(somaResposta)
 
// true


*/


//c) Escreva uma função que receba um número e devolva um 
//booleano indicando se ele é par ou não




function digiteUmNumber(numero) {
    console.log("digite um numero")
return repostaImparouPar
}

const numeroimpar = true
const numeropar = false
const repostaImparouPar = (numeroimpar || numeropar)
console.log(repostaImparouPar)





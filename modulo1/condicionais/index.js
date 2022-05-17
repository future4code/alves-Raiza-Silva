// Exercícios de interpretação de código
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}



 a) Explique o que o código faz. Qual o teste que ele realiza? 

 RESPOSTA: o codigo vai pedi ao usuario para digitar um numero, depois disso vai 
comparar se o numero que foi digitado for mol de 2 ===0

se(if) se o numero que foi digitado o mol for igual a 0 passara no teste, 
senao(else) 
sera exibido a msg que nao passou no teste.


b) Para que tipos de números ele imprime no console "Passou no teste"? 

 RESPOSTA:  Quando for numeros pares

c) Para que tipos de números a mensagem é "Não passou no teste"?

 RESPOSTA: Quando for numeros impas e numeros que nao seja inteiros.
 

*/


/* 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar
 algumas tarefas de um supermercado:
    
    
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    



    a) Para que serve o código acima?

    RESPOSTA= o comando serve para comparar um bloco ou lista com condiçoes e variaveis na case. 



    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    
    RESPOSTA: A msg sera o preço da maça que saira do bloco 



    c) Considere que um usuário queira comprar uma `Pêra`, qual seria
     a mensagem impressa no console se retirássemos o `break` que está 
     logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? */
     
     // RESPOSTA: se tira o break depois de pera ele vai indentificar o proximo case como igual da operacao.
     



     // 3.Leia o código abaixo:


     const numero = Number(prompt("Digite o primeiro número."))
     let mensagem = "Essa mensagem é secreta!!!"

     if(numero > 0) {
       console.log("Esse número passou no teste")
         let mensagem = "Essa mensagem é secreta!!!"
     }
     
        console.log(mensagem)

     

    //a) O que a primeira linha está fazendo?
    // RESPOSTA:
    // foi criada uma variavel para guarda a resposta do usuario quando for digitado um numero

     /*b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    RESPOSTA:
     se o numero que foi digitado foi maior que 0, por exeplo um 10 aparecera uma msg com o
     frase: "Esse número passou no teste", se o numero for menor que 10, como o -10 nao aparecera a msg "Essa mensagem é secreta!!!"
      pois mensagem nao foi definido dentro de uma variavel de condicao.
     */

     // correto: 

    /*  const numero = Number(prompt("Digite o primeiro número."))
        const mensagem = "Essa mensagem é secreta!!!"

     if(numero > 0) {
       console.log("Esse número passou no teste")

    } else if (mensagem){
          {
            console.log("Essa mensagem é secreta!!!")
         } 
     }

    
     */ 

    // c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
    
    //RESPOSTA: Sim, erro que nao foi definido a variavel de "mensagem"



     // 2. Exercícios de escrita de código

     //a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
       
     //b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

     // idadeUser = Number (prompt("digite sua idade"))


     //c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
    // Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."
    
      
    let idadeUser = Number (prompt("digite sua idade"))
     verificarIdade = (idadeUser) => {

       idadeMaiorOuMenor = idadeUser=>18
       return idadeUser

     }

     calculoMaior = verificarIdade(idadeUser)

     if (calculoMaior) {
         console.log("você pode dirigir")}
         
         else { 
           console.log("voce nao pode dirigir")
         
          }

// Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
//  Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

const perguntaAluno = prompt ("digite a primeira letra do seu turno: matutino, vespetino ou noturno")

function respotaDoAluno (perguntaAluno) 

if (respotaDoAluno=== "M") {
  console.log("Bom dia ")
} 
else { (respotaDoAluno=== "V")
  console.log("Boa tarde")

}

if (respotaDoAluno==="N") {
console.log("Boa Noite") }

respotaDoAluno(perguntaAluno)

//
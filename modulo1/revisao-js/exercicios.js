// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01


function retornaTamanhoArray(array) { 
  return array.length
}
 console.log(retornaTamanhoArray.length([3, 2, 1, 4, 7]))

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}
 console.log(retornaTamanhoArray.reverse()[6, 8, 9, 10])


 // EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b)=>a-b)
}

let array0 = [5,6,9,2,3]
console.log(retornaArrayOrdenado(array0))

// EXERCÍCIO 04
function retornaNumerosPares(array) {
       
  let numPar = []
    
  for(let num of array){
      if(num % 2 == 0){
         numPar.push(num)

      }
  }
  return numPar
}
 

console.log(retornaNumerosPares([4,6,5,8,10]))

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let numPar = []
    
  for(let num of array){
      if(num % 2 == 0 ){
         numPar.push(num ** 2)

      }
  }
  return numPar
}

console.log(retornaNumerosPares([4,6,5,8,10]))


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   
  let numMaior = 0

  for (let num of array){
    if (num > numMaior){
         numMaior = num
    }
    
  }
  return numMaior
}

console.log(retornaMaiorNumero([4,2,9]))


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let pares = []
  let controle = 0

  while(pares.length < n){

      if(controle % 2 == 0){
          pares.push(controle)
      }
      controle++
  }

  return pares
}
 console.log(retornaNPrimeirosPares([5,2,4,8]))


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10

function retornaSegundoMaiorESegundoMenor(array) {
     
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   const filme1 = {

   nome: 'O Diabo Veste Prada',
   ano: 2006,
   diretor: 'David Frankel',
   atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']

  } 
  console.log(` :Venha assistir ao filme${filme1.nome} de ${filme1.ano}dirigido por ${filme1.diretor},e estrelado por ${filme.atores}`)

}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for(i=0; i< contas.length; i++){
        let somaContas= 0;
        for(j=0; j< contas[i].compras.length; j++){
            somaContas += contas[i].compras[j];
        }
            contas[i].saldoTotal= contas[i].saldoTotal- somaContas;
            contas[I].compras=[];
    }

            return contas
}


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
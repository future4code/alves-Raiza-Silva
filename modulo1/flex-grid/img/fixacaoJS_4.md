
 let ocorrencias = 0
 arrayDeNumeros.map((numero)=>{
 if(numero === numeroEscolhido){
   ocorrencias ++
 }
})
if(ocorrencias>0){
  return `O numero ${numeroEscolhido} aparece ${ocorrencias}`
} else {
  return `numero não encontrado`
}
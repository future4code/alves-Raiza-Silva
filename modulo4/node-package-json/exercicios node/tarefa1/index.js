
//Exercício 1
// Passamos pela proprieda process.argv[2]

const name1 = process.argv[2]
const age = Number(process.argv[3])


const testando = (agr1, agr2)=>{
    return `Olá,${agr1}! Você tem ${agr2} anos.Em sete anos você terá ${agr2 + 7}`
}

console.log(testando(name1,age))


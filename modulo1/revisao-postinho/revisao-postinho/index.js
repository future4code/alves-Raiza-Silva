
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
/* Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    return `No comparador de iguadade ${a}===${b} é ${a === b}`
}
 console.log(checarIgualdade(4, 3))

// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior(a, b) {
   return `No comparador de iguadade ${a} > ${b} é ${a > b}`

}

console.log(verificaSeEMaior(321, 2156)); 


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'=  false 
// b-) 1=='1' // true
// c-) 'a'==='b' // true
// d-) 'b'>'a' // true
// e-) 0!==null // true


// CONDICIONAIS

/*Exercício 3------------------------------------------------------------------------------------





 const nomeDoUsuari = prompt("digite seu nome")
 const anoDeNasciment = Number (prompt ("digite seu ano de nascimento"))
 const senhaDoUsuario = prompt("digite uma senha com 6 caracteres")
 const nacionalidad = prompt("qual a sua nacionalidade")
 const anoAtual = 2022
 
const cadastro = (nome, anoDeNascimento, senha1, nacionalidade) => {
    const usuario = [ ]
    let maiorIdade = 2022 - anoDeNasciment
    if  ( maiorIdade >= 18 && (senha1.length >= 6 ) && nacionalidade === "brasileira" ) {
        usuario.push(nome,anoDeNascimento, senha1,nacionalidade)
    } else {
        console.log("não pode ser cadastrado")
    }
       return usuario
    }   


console.log(cadastro(nomeDoUsuari, anoDeNasciment, senhaDoUsuario, nacionalidad));

*/

/* Exercício 4-----------------------------------------------------------------------------------------------

const senhaUsuario = prompt("digite uma senha")
const repostaUser2 = (senhaUsuario)

const login = (senha) => {
    const login = "labenu"

    if (senha === "labenu"){
        console.log("Logado")
    } else if (senha != "labenu"){
        console.log("senha invalida")
    }
    
}
 
console.log(login(respostaUser2))  

//Exercício 5----------------------------------------------------------------------------------------------------

const nomeDoPaciente = prompt("qual o seu nome?")
const nomeDaVacina = prompt("qual o nome da vacina que você tomou ?")




const primeiraDose = (nome, vacina) => {
    let tempo = []
    let data = []

    if(vacina === "coronavac"){
        tempo.push("28")
        data.push("18/06/2022")
        return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    } else if  (vacina === "Astrazenica"){
        tempo.push("90")
        data.push("20/08/2022")
        return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
     } else (vacina === "Pfizer")
        tempo.push("28")
        data.push("20/08/2022")
       return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`


}

console.log(primeiraDose(nomeDoPaciente, nomeDaVacina))



// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]  

    for(let doseVerificar of usuarios){
        
        if (nomeDoUsuario === doseVerificar.nome){
            doseVerificar.imunizacao = "completa"
            return doseVerificar 

        }
    }

}
console.log(segundaDose("barbara"));


// Exercício 7 --------------------------------------------------------------------------------------



const avisoAosAtrasados = (nome, imunizacao) => {
    const tomarVacinas = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

         for(let verifica of tomarVacinas) {

                 if (verifica.imunizacao !== "incompleta"){
                     console.log(verifica.nome)
                 } else {
                     console.log(`Olá ${verifica.nome}! Sua imunização está ${verifica.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
                    )
                 }
                 
                }
 }       
           console.log(avisoAosAtrasados())
           



//DESAFIO------------------------------------------------------------------------------------------
*/
const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]




//Refatoraçao ex 3


const nomeDoUsuario2 = prompt("digite seu nome")
const anoDeNascimento = Number(prompt("digite seu ano de nascimento"))
const senhaDoUsuario2 = prompt("digite uma senha com 6 caracteres")
const nacionalidade2 = prompt("qual a sua nacionalidade")
const anoAtual2 = 2022
const respostaDoUsuario = { nomeDoUsuario2, anoDeNascimento, senhaDoUsuario2, nacionalidade2 }

const cadastroDesafio = (respostaDoUsuario) => {
    const usuario2 = []

    let maiorIdade = 2022 - anoDeNascimento
    if (maiorIdade >= 18 && (respostaDoUsuario.length >= 6) && nacionalidade2 === "brasileira") {
        usuario2.push(respostaDoUsuario)
    } else {
        console.log("não pode ser cadastrado")
    }
    return usuario2

}
console.log(cadastroDesafio(respostaDoUsuario));


//REFATORAÇÃO EX 4

const loginDesafio = () => {
    const verificarLoginUser = "labenu"

    for (let cadastro of usuarios) {
        if (cadastro !== usuarios) {
            cadastro === "labenu"
            console.log("cadastrado")

        } else {
            console.log("não cadastrado")
        }
    }

}
console.log(loginDesafio());



//REFATORAÇÃO EX 5
const primeiraDoseDesafio = (incompleta) => { }

console.log(primeiraDoseDesafio())


//REFATORAÇÃO EX 6

const segundaDoseDesafio = (nomeDoUsuario) => {
    for (let segundaDose2 of usuarios) {

        if (nomeDoUsuario === segundaDose2.nome) {
            segundaDose2.imunizacao = "completa"
            return segundaDose2
        }
    }
}
console.log(segundaDoseDesafio("Carlos"));


//REFATORAÇÃO EX 7

const avisoAosAtrasadosDesafio = (mensagem) => {


    for (let avisoAtraso of usuarios) {

        if (avisoAtraso.imunizacao === "incompleta") {
            console.log(avisoAtraso.nome)
        } else {
            console.log(`Olá ${avisoAtraso.nome}! Sua imunização está ${avisoAtraso.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
            )
        }

    }
}

console.log(avisoAosAtrasadosDesafio());







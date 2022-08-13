console.log("teste 3333")
const nomeFilme : string = "helly poter"
const anoFilme :number= 2023
enum tipoFilme {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const notaFilme = 6.7
const exerc3 = (nomeFilme: string, anoFilme: Number, tipoFilme:string, notaFilme?: number)=>{
    const teste = ()=>{
        if(notaFilme){
            return`nome:${nomeFilme}, ${anoFilme},${tipoFilme}, pontuação ${nomeFilme}`
        }else{
            return`nome${nomeFilme}, ${anoFilme},${tipoFilme}`
           
        }
    } 
    
}
console.log(exerc3("helly poter", 2023, tipoFilme.COMEDIA, 6))

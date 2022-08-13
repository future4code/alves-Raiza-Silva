console.log("teste 1111")

/*- Exercício 1
    
Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento (ex.: “24/04/1993”).
A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato: */

const Exercício1 = (nome:string, data:string,mes:string, ano:string )=>{
    const dividirData = String
    return `Olá me chamo ${nome}, nasci no dia ${data} do mês de ${mes} do ano de ${ano}` 
}

console.log(Exercício1("Raiza", "29", "agosto","1997"))


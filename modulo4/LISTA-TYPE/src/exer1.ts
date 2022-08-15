console.log("teste 1111")

/*- Exercício 1
    
Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento (ex.: “24/04/1993”).
A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato: */

const Exercício1 = (nome:string, data:string):string=>{
    const [dia, mes, ano] = data.split("/")
    return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}` 
}

console.log(Exercício1("Ray","29/08/1997"))


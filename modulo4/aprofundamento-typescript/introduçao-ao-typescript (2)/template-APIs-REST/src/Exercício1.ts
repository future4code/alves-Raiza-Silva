//a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. 
//Tente atribuir um número a esta variável. O que acontece?


// A)const minhaString : string = 23 

//resposta--> O tipo 'number' não pode ser atribuído ao tipo 'string', tem  que ser atribuido uma string "oooo"

/*b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja,
 como criamos no typescript uma variável que aceite mais de um tipo de valor? */

// RESPOSTA --> USAMOS | PARA DEFINIR 
// B) const meuNumero : number | string = "fffffff"
// const meuNumero : number | string = 3444

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

//d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.

enum Rainbow {
    RED = "red",
    ORANGE = "orange",
    BLUE = "blue",
    YELLOW = "Yellow",
    GREEN = "Green",
    VIOLET = "Violet",
    INDIGO = "Indigo"
    }

type pessoa = {
    nome: string
    age: number
    corFavorita: Rainbow 
}


const anaa: pessoa = {
    nome: "ana",
    age: 30,
    corFavorita: Rainbow.ORANGE 
}

const pedro: pessoa = {
    nome: "pedro",
    age: 34,
    corFavorita: Rainbow.RED
}

const ju: pessoa = {
    nome: "juju",
    age: 14,
    corFavorita: Rainbow.GREEN
}


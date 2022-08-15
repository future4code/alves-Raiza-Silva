console.log("teste 3333")

enum tipoFilme {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type filme = {
    titulo: string,
    genero: tipoFilme,
    ano: number,
    pontuaçao?: number
}

const exerc3 = (titulo: string, ano: number, genero: tipoFilme, pontuaçao?: number): filme => {
    if (pontuaçao) {
        return {
            titulo,
            ano,
            pontuaçao,
            genero
        }
    }
    else {
        return {
            titulo,
            ano,
            genero
        }

    }

}
console.log(exerc3("scoob-dow", 2023, tipoFilme.COMEDIA, 6))

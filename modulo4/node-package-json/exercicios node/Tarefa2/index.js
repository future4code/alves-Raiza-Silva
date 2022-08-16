const numero1 = +(process.argv[2])
const numero2 = +(process.argv[3])
const operation = process.argv[4]

const calc = (n1, n2, op) => {
    if (n1 && n2) {
        switch (op) {
            case "add":
                return (n1 + n2)
            case "sub":
                return (n1 - n2)
            case "mult":
                return (n1 * n2)
            case "div":
                return (n1 / n2)
            default:
                "Operação não identificada"

        }
    } else {
        return "verificar os dados."
    }
}

console.log(`Resposta: ${calc(numero1, numero2, operation)} `) 
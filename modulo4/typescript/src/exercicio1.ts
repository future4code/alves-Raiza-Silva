console.log("exerccio 1!");


const checaTriangulo = (a: number, b: number, c: number) : string | number => {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  console.log(checaTriangulo(10, 15, 20))
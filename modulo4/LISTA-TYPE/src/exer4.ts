console.log("teste 4444")

enum setor{
  MKT= "mkt",
  FINANCEIRO = "financeiro",
  VENDAS = "vendas"
}

type Peoples = {
  nome:string,
  salário: number,
  presencial: boolean,
  setor: setor
}

const funcionarios: Peoples[]=[
	{ nome: "Marcos", salário: 2500, setor: setor.MKT, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: setor.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: setor.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: setor.MKT, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: setor.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: setor.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: setor.MKT, presencial: true }
]

function retornaFuncionarios(lista: Peoples[]): Array<Peoples>{
    const listaAtualizada: Peoples[]=lista.filter((funcionarios)=>{
        funcionarios.setor === setor.MKT && funcionarios .presencial ===true;
    })
    return listaAtualizada
}
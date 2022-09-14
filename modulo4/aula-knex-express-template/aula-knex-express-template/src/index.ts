import app from "./app"
import { Request, Response } from "express"
import connection from "./connection"

/* Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

    return result[0][0]
}
getActorById("001")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });

// Assim a chamada funciona fora dos endpoints com await
(async () => {
  console.log(await getActorById("001") )
})()

*/


//b) *Faça uma função que busque um ator pelo nome;

const searchActor = async (name: string): Promise<any> => {
    const [result] = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
}

searchActor("tony Ramos")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });

//c) Faça uma função que receba um gender retorne a 
//quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.C)

const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
          SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
        `);
    // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
    // o valor no resultado!
    const count = result[0][0].count;
    return count;
};

countActors("gender")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });

//exercici2

//a)
const updateActor = async (id: string, salary: number): Promise<any> => {
    const result = await connection("Actor")
        .update({
            salary: salary
        })
        .where('id', id)

    return result
}

//b)

const deleteActor = async (id: string): Promise<any> => {
    const result = await connection("Actor")
        .delete()
        .where('id', id)

    return result
}

//c)
// Função que retorna a média de salário de todos os atores de um gênero
const getAverageSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg(gender)
        .where('gender', gender)

    return result
}


//endepoits

app.get('/actors', async (req: Request, res: Response) => {
    try {

        const result = await getActors()

        res.status(200).send(result)

    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

// Criar um ator
app.post('/actors', async (req: Request, res: Response) => {
    try {

        const { id, name, salary, birth_date, gender, favorite_ice_cream_flavor, type } = req.body

        await createActor(id, name, salary, birth_date, gender, favorite_ice_cream_flavor, type)

        res.status(201).send("Ator criado com sucesso!")
    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.sqlMessage || error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})

// Atualizar salário de um ator
app.put('/actors', async (req: Request, res: Response) => {
    try {

        const { id, salary } = req.body

        await updateActor(id, salary)

        res.status(200).send("Ator atualizado com sucesso!")

    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.sqlMessage || error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})

// Quantidade de atores por gênero
app.get('/actors/count', async (req: Request, res: Response) => {
    try {

        const gender: string = req.query.gender as string

        const result = await countActors(gender)
        
        res.status(200).send(result[0])
    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.sqlMessage || error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})


// Pegar ator por id
app.get('/actors/:id', async (req: Request, res: Response) => {
    try {

        const id: string = req.params.id

        if (!id) {
            res.statusCode = 400
            throw new Error('Id não informado')
        }

        const result = await getActorById(id)

        res.status(200).send(result[0])

    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.sqlMessage || error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})

// Deletar um ator
app.delete('/actors/:id', async (req: Request, res: Response) => {
    try {

        const id: string = req.params.id

        const searchId = await getActorById(id)
        console.log(searchId)

        if (searchId.length == 0) {
            res.statusCode = 400
            throw new Error('ID não encontrado')
        }
        

        await deleteActor(id)

        res.status(200).send("Ator deletado com sucesso!")

    } catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.sqlMessage || error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})
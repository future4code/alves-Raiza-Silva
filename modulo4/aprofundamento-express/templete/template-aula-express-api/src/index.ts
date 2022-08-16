console.log("Hello, world!")
import express, {Request, Response}from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
const fs = require('fs')
const i = JSON.parse(fs.readFileSync('src/i.json'))


//ex1 

app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong! 🏓")
})

//ex2
 type Todos = {
    userId :number,
    id: number,
    title: string,
    completed: boolean
 }

//ex3
let afazeres : Todos[]= [
    {
        userId :1,
        id: 12,
        title: "Caminhar",
        completed: false
          
    },
    {
        userId :3,
        id: 111,
        title: "Treinar",
        completed: true
          
    },
    {
        userId :4,
        id: 122,
        title: "Caminhar",
        completed: false
          
    },
    {
        userId :5,
        id: 123,
        title: "cozinhar",
        completed: true
          
    },
    {
        userId :6,
        id: 144,
        title: "limpar casa",
        completed: true
          
    },
    {
        userId :7,
        id: 12,
        title: "ir ao shopping",
        completed: false
          
    },

]

//ex4

app.get("/todo/:completed", (req: Request, res: Response) => {
    let completed = req.params.completed
    let verificar: boolean = true;
    if (completed == 'false') {
        verificar = false
    }
    const filteredList = afazeres.filter((item) => item.completed === verificar)
    res.send(filteredList)
})

//exr5 
app.post("/todo/add", (req: Request, res: Response) => {
    const { userId, id, title, completed } = req.body
    i.push({
        userId: userId,
        id: id,
        title: title,
        completed: completed
    })
    fs.writeFileSync('src/i.json', JSON.stringify(i, null, '\t'))
    res.send(i)
})

//exec6
app.put("/todo/edit/:id", (req: Request, res: Response) => {
    afazeres = afazeres.map((item) => {
        if (item.id === +req.params.id) {
            item.completed = !item.completed
        }
        return item
    })
    res.send(afazeres)
})

//exer7

app.delete("/todo/delete/:id", (req: Request, res: Response) => {
    afazeres = afazeres.filter((item)=> item.id !== +req.params.id)
    res.send(afazeres)
})

// Exercicio 8
app.get("/todo/user/:userId", (req: Request, res: Response)=> {
    res.send({
        todos: {
            selectedUser: [
                afazeres.filter((item)=>item.userId === +req.params.userId)
            ],
            others: [
                afazeres.filter((item)=>item.userId !== +req.params.userId)
            ]
        }
    })
})






app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});
console.log("Hello, world!")
import express, { Request, Response } from "express";
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

//exerc1

app.get("/", (req:Request, res:Response) => {          
    res.send("Hello from Express")
})

//exerc 

// Ex 2

type Users = {
    id: number
    name: string
    phone: number
    email: string
    website: string
}

//ex 3

let users : Users[] = [
  {
    id: 1,
    name: "anna",
    phone: 32000000,
    email: "anna@gmail.com",
    website: "www.annaartesa.com.br"

  },

  {
    id: 2,
    name: "calla",
    phone: 92000000,
    email: "calla@gmail.com",
    website: "www.calla.com.br"

  },

  {
    id: 3,
    name: "Paulo",
    phone: 22002000,
    email: "Paulo@gmail.com",
    website: "www.Paulo.com.br"

  },

  {
    id: 4,
    name: "joy",
    phone: 92330000,
    email: "joy@gmail.com",
    website: "www.joyjoy.com.br"

  },

  {
    id: 5,
    name: "jo",
    phone: 72055000,
    email: "jo@gmail.com",
    website: "www.joo.com.br"

  },

  {
    id: 6,
    name: "pedro",
    phone: 92030000,
    email: "Pedro@gmail.com",
    website: "www.pedro.com.br"

  },
]

//exerc4

app.get("/users", (req: Request, res: Response) => {
    const getUsers = users.map((user) => {
        return user
    })
    res.send(getUsers)
    
})

//exerc5

type Posts = {
    id: number,
    title: string,
    body: string,
    userId: number
}

//exerc6

let post : Posts[]=[
    {
        id: 10,
        title: "oooooooooooo",
        body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
        userId: 22 
    },

    {
        id: 9,
        title: "oooooooooooo",
        body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
        userId: 27 
    },

    {
        id: 5,
        title: "borboletas",
        body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
        userId: 26 
    },

    {
        id: 6,
        title: "oooooooooooo",
        body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
        userId: 22 
    },

]
    
//exer7

app.get('/posts', (req: Request, res: Response) => {
    res.status(200).send(post)
})

//exer8

app.get('/posts/:userId', (req: Request, res: Response) => {
    let userId = req.params.userId
    const postid: Posts[] = post.filter((post) => {
        return post.userId === Number(userId)
    })
    res.send(postid)
})

// Ex 9

app.delete("/posts/:postId", (req: Request, res: Response) => {
    const postId = req.params.postId
    const deletePost = post.filter((post) => {
        return post.id !== Number(postId)
    })
    post = deletePost
    res.end()
})

// Ex 10

app.delete("/users/:userId", (req: Request, res: Response) => {
    const userId = req.params.userId
    const deleteUser = users.filter((user) => {
        return user.id !== Number(userId)
    })
    users = deleteUser
    res.end()
}) 



app.listen(3003, () => {
    console.log("servido rodando na porta 3003");
   });
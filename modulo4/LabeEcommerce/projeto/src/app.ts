import express,{Express} from "express"
import cors from "cors"

const app : Express = express()
app.use(express.json())
app.use(cors())

app.listen(3003, ()=>{
    console.log("servido rodando na port 3003")
})

export default app
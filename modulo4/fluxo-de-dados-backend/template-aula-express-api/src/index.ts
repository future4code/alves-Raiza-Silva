import express,{Request, Response} from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
import {products} from "./data";
//ex1

app.get("/test", (req: Request, res: Response) => {          
    res.send("testanndooooo")
})

app.put("/create", (req: Request, res: Response) => {
    try {
      const { name, price } = req.body;
  
      if(typeof(name) !== 'string'){
        res.statusCode = 401;
        throw new Error('A variável name precisa ser uma string!');
      }
      if(typeof(price) !== 'number'){
        res.statusCode = 401;
        throw new Error('A variável price precisa ser um número!');
      }
      if(typeof(price) === 'number' && price <= 0){
        res.statusCode = 401;
        throw new Error('A variável price precisa ser um número maior que zero!');
      }
  
      products.push({
        id: Date.now(),
        name: name,
        price: price
      });
      res.send(products);
  
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message })
    }
  })
  
  // Exercício 4
  app.get("/products", (req: Request, res: Response) => {
    res.send(products);
  })
  
  // Exercício 5 
  app.put("/editprice", (req: Request, res: Response) => {
    try {
      const { id, price } = req.body;
  
      if(typeof(price) !== 'number'){
        res.statusCode = 401;
        throw new Error('A variável price precisa ser um número!');
      }
      if(typeof(price) === 'number' && price <= 0){
        res.statusCode = 401;
        throw new Error('A variável price precisa ser um número maior que zero!');
      }
      if(typeof(id) !== 'number'){
        res.statusCode = 401;
        throw new Error('A variável id precisa ser um número!');
      }
      const idExist = products.filter( (product:any) => {
        return product.id === id
      })
      if(!idExist.length) {
        res.statusCode = 401;
        throw new Error(`Não existe produto com o id ${id} cadastrado!`);
      }
  
      products.forEach( (product:any) => {
        if(product.id === id) {
          product.price = price;
        }
      })
  
      res.send(products);
  
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message })
    }
  })
  
  // Exercício 6 
  app.delete("/delete/:id", (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
  
      const idExist = products.filter( (product:any) => {
        return product.id === id
      })
  
      if(!idExist.length) {
        res.statusCode = 401;
        throw new Error(`Não existe produto com o id ${id} cadastrado!`);
      }
  
      const newListProducts = products.filter( (product:any) => {
        return product.id !== id;
      })
  
      res.send(newListProducts);
  
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message })
    }
  })





app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});
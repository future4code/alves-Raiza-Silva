import { Request, Response } from "express";
//import connection from "../connection";
import {User} from "../types"

export default async function createCaracter(
    req: Request,
    res:Response
){
    try {
        const {name, email, password }:User=req.body

        if(!name || !email ||!password ){
            throw new Error ("esta faltando um parametro")
        }
         
        res.status(201).send("criado com sucesso")
    } catch (error) {
        res.status(500).send('erroo no servido')
        
    }
    
   
}

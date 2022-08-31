import { Request, Response } from 'express';
import selectByName from "../data/selectByName"

export const getbyName = async(
    req: Request,
    res: Response): 
    Promise<void> =>{
    try {
        let name = req.query.name as string 
       
 
       if(!name){
          name = "%"
       }
 
       const users = await selectByName(name)
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }
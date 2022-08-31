import { Request, Response } from 'express';
import selectByOrdenaçao from '../data/selectByOrdenaçao';

export const getOrdem = async(
   req: Request,
   res: Response
): Promise<void> =>{
   try {
      let sort = req.query.sort as string
      let order = req.query.order as string

      if (!sort || !order) {
         throw new Error(`erro`)
      }

      sort = sort.toLocaleLowerCase() === "name"? "name" : sort.toLocaleLowerCase() === "type"? "type" : "email";   
      order = order.toLocaleUpperCase() === "DESC"? "DESC" : "ASC";  

      const users = await selectByOrdenaçao(sort, order);

      res.status(200).send(users);
      
   } catch (error: any) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
   };
};
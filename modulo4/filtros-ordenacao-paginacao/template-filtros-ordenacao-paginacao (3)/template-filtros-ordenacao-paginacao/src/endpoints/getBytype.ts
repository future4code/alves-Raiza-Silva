import { Request, Response } from 'express';
import selectByType from '../data/selectByType';

export const getUsersFilterByType = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const type: string = req.params.type;

      if (type.toUpperCase() !== "OPERATIONS" &&
         type.toUpperCase() !== "TEACHER" &&
         type.toUpperCase() !== "CX"
      ) {
         res.statusCode = 422;
         throw new Error(`erro desconhecido`)
      }

      const users = await selectByType(type);
      
      res.status(200).send(users);

   } catch (error: any) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
   };
};
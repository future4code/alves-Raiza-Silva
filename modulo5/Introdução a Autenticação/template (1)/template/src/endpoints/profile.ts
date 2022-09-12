import { Request, Response } from "express"
import { UserData } from "../data/baseData"
import Authentication from "../services/Autentication"

const profile = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization

        if (!token) {
            res.statusCode = 401
            throw new Error("Null or invalid headers")
        }

        const authentication = new Authentication().getData(token)

        const user = new UserData().getUserById(authentication.id)

        res.send(user)
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
}
export default profile
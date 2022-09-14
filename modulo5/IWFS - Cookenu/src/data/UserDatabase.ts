import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public create = async (newUser:any) => {
        await this.getConnection()
            ('to_do_list_users')
            .insert(newUser)

    }
   
    public getByEmail = async (email: string) => {
        const [result] = await this.getConnection()('to_do_list_users')
            .where({ email })
        return result
    }
}
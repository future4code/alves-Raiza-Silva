import {connection} from "../data/connection"

export default async function selectByName(
    name: string
):Promise<any> {
    const result = await connection("aula48_exercicio")
        .where("name", "LIKE", `%${name}%`);
 
    return result;
};
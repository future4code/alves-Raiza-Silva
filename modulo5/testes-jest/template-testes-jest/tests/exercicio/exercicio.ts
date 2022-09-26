export const checkIfEven = (n: number): boolean => {
    if (n % 2 === 0) {
        return true
    }
    return false
}

//1
export const checarUpperCase = (str: string): string => {
	return str.toUpperCase()
}

//2

export const toSplit = (str: string): string[] => {
	return str.split("")
}

//3 

export const toNumber = (str: string): number => {
	return Number(str)
}

//4

export const getLength = (str:string): number =>{ 
  return str.length
}

//5

export const randomNumberBetween1And10 = (): number => {
    const min = 1
const max = 10
    const result = Math.floor(Math.random() * (max - min + 1)) + min

    return result
}

//6

interface IUser {
    name: string,
   
}

 export const users: IUser[] = [
    {
        name: "Raiza",
        
    },
    {
        
        name: "Anna",
        
    },
    {
       
        name: "Astrodev",
     
    }
]

//7

export const calculateTheAverage = (array: number[]): number => {
    let sum = 0
    array.map((number) => {
        return sum = sum + number
    })

    const average = Math.ceil(sum / (array.length))

    return average

}

// 8
export const calculateAge = (yearOfBirth: number): number => {
    const currentYear = new Date().getFullYear()
    return currentYear - yearOfBirth
}

// 9
export const modifyDate = (date: string): string => {
    const newDate = date.split("/").reverse().join("/")

    return newDate
}
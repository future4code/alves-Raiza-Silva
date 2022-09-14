export enum ROLE_TYPE {
   ADMIN = 'admin',
   NORMAL = 'normal'
}

// Exercício 3 b) 

export interface authenticationData {
   id: string
   role: string
} 
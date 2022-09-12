console.log("Hello, world!")

//exercicio1

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  

      public getName(): string {
          return this.name
      }
      public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }
    
  }
  

const userDados = new User ('1',"RAIZA@GMAIL", "Raiza", '123445' )
console.log(userDados.getId())
console.log(userDados.getEmail())
console.log(userDados.getName())



//A) NÃO E POSSIVEL IMPRIMIR POR ESTÁ PRIVADA A INFORMAÇÃO.
//B) APARECEU A MSG QUE ESTÁ "Chamando o construtor da classe User" apenas 1 vez

//Exercício 2

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }


const newCustomer = new Customer ('1',"ANA@GMAIL", "ANA", '123445', "DDDDD"  );
//a)APENAS UMA VEZ
//B)FOI IMPRESSO UMA VEZ, PQ A CLASSE USER E HEDEIRA DO CUSTUMER, POR ISSO E IMPRIMDA PRIMEIRO.

// Exercício 3
console.log(newCustomer.getId())
console.log(newCustomer.getEmail())
console.log(newCustomer.getName())
console.log(newCustomer.purchaseTotal)
console.log(newCustomer.getCreditCard())

//B) NAO E POSSIVEL ACESSA-LA FORA DA CLASSE POR POR E UMA INFORMAÇÃO PRIVADA.

//exercicio 4 e 5

console.log(newCustomer.introduceYourself())

//-----------------------------------------------------------------
//Polimorfismo

export interface Client {
    name: string;
    // Refere-se ao nome do cliente
  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
      // como se fosse um id
  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês
  
    calculateBill(): number;
    // Retorna o valor da conta em reais
  }

  const client: Client = {
    name: "Raiza",
    registrationNumber: 3,
    consumedEnergy: 100,
    calculateBill: () => {
      return 2;
    }
    
  }

  console.log(client)

//exercio 2

export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

//A) Não é possível criar uma instância de uma classe abstrata 
//b) tem que criar uma class filha pra depois conseguir criar 

//exercicio 3


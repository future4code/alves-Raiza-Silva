import app from "./app"
//import {Transaction} from "./types"

/*

//b) *Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
// resposta: construtor e um metodo de objetos de classe

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    };

    public getName(): string {
        return this.name;
    };
    public getCPF(): string {
        return this.name;
    };
    public getCpf(): string {
        return this.cpf;
    };

    public getAge(): number {
        return this.age;
    };

    public getBalance(): number {
        return this.balance;
    };

    public getTransactions(): Transaction[] {
        return this.transactions;
    };
}

const contaUser: UserAccount = new UserAccount("131.234.344-11", "Raiza", 25);
console.log(contaUser);

// apareceu só uma vez


//c) *Como conseguimos ter acesso às propriedades privadas de uma classe?*

 Resposta: Para acessar informações privadas é necessário que se crie métodos de classe
do tipo públicos que chamem as informações necessárias.
 como o set e get
*/


class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
        this.description = description;
        this.value = value;
        this.date = date
    };
    public getDescription(): string {
        return this.description;
    };

    public getValue(): number {
        return this.value;
    };

    public getDate(): string {
        return this.date;
    };
};


// Exercício 3

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    };

    public getAccounts(): UserAccount[] {
        return this.accounts;
    };

    public setAccounts(newAccount: UserAccount): void {
        this.accounts.push(newAccount);
    };
};
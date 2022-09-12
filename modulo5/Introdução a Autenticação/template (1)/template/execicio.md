### RESPOSTAS

1) 
a - a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

RES: Sim, acredito que a junçao de string e number deixa o id mais seguro.

2)
a)- Explique o código acima com as suas palavras

RES: E uma tabela que está conectando no banco de dados e passando as informçoess a serem inseridas na tabela.

b) *Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*

CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

obs: Tabela onde o id vai ser um primary key, vai ter um email onde ter  q ser unico e ñ nulo e a senha ñ nula.

3)

a)- O que a linha as string faz? Por que precisamos usar ela ali?

RES: ela está tipando a informação que sera recebida como uma string "dddd"



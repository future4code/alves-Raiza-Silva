## exercicios

## 1

*a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*

# resposta
Tem o varchar(n) que represta a quantidade de caracteres permitidos.

e o Date que represta sempre como datas em formato americano


*b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*

 show tables mostra as tabelas da minha database e o comando show databases mostra todas as data bases que tenho acesso


*c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*

me retornou toda descriçao

## Exercício 2

b) *Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*

as query foram criadas na questão a) 
porem ñ e permitido criar outra query com memso ID.

*C)A contagem de colunas não corresponde à contagem de valores 

*D)O campo 'nome' não tem um valor padrão
está faltando colocar na coluna

*E)Valor de data incorreto: '1950' para a coluna 'birth_date', está faltando colcoar as aspas.

*F)INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

## Exercício 3

A)SELECT id, name from Actor WHERE gender = "feme";

B)SELECT name,salary from Actor WHERE name = "Tony Ramos"

C) me retornou nuul

E)Coluna desconhecida 'nome' na 'lista de campos' seria "name'

## exercicio4 

a)where significa se, logo: SE name tiver alguma string com A ou J E o salario for maior de 30000 ele aparece a tabela o valor maior .

b)SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

gloria piris

c)SELECT * FROM Actor
WHERE (name LIKE "g%" OR name LIKE "G%");

d)SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "a%" OR name LIKE "G%" OR name LIKE "g%") AND salary > 300000;

## exercicio5 

a) CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

c)
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
d)
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

### Exercicio 6)
a)
SELECT id, title, rating from Movie WHERE id = 003;

c)
SELECT id, title, synopsis from Movie WHERE rating > 7;
### Exercicio 7)
a)
SELECT * FROM Movie
WHERE (title LIKE "vida%" );
b)
SELECT * FROM Movie
WHERE (title NOT LIKE "A%");





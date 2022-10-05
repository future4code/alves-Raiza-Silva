## exercicios 1
a)ALTER TABLE Actor DROP COLUMN salary;
resposta: o comando apagaria a coluna salary


b)ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
resposta: Basicamente o change serve para renomear uma coluna, alterar o tipo, valor padrão etc
nesse caso ele ia altera o nome de gender por sex de 6 caracters


c)ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
 resposta: nesse caso ele ia alterar a quantidade de caracter de gender


d) *Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres*

ALTER TABLE Actor CHANGE gender gender VARCHAR(100); 

alterado 

## exercicio 2 

a) *Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`*

UPDATE Actor
SET 
	name = "Marta Gomes",
	birth_date = "2019-02-10"
WHERE id = "003";

OBS:o WHERE altera todas as linhas pelo ID


b) *Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.*
UPDATE Actor
    SET name = "JULIANA PAES",
    WHERE name = "Juliana Paes"

    obs: rodar o SET SQL_SAFE_UPDATES = 0; pq a where n estava permitindo modificar a coluna 



c) *Escreva uma query que atualize todas as informações do ator com o id `005`*
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

alterado 

## exercicio 3

A) apagado 

## exercicio 4

a) *Escreva uma query que pegue o maior salário de todos os atores e atrizes*
SELECT MAX(salary) FROM Actor ;

LIMIT 0, 1000 1 linha(s) retornada(s)

b) *Escreva uma query que pegue o menor salário das atrizes*
SELECT MAn(salary) FROM actor WHERE gender = "feme";

c) *Escreva uma query que pegue a quantidade de atrizes*
SELECT COUNT(*) FROM Actor WHERE gender = "feme"
resposta : 1

d) *Escreva uma query que pegue a soma de todos os salários*
SELECT SUM(salary) FROM Actor

resp: 200000


## exercicio 5

a) Releia a última query. Teste-a. Explique o resultado com as suas palavras
resposta: a query retorna a quantidade de genero em tabela. feme e male

b) b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética

SELECT id, name FROM Actor
ORDER BY name DESC;

me retornou o id e name em ordem descrecente

c) Faça uma query que retorne todos os atores ordenados pelo salário

SELECT * FROM Actor 
ORDER BY salary;

(* significa todos )

d)SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e)SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

## exerccios 6
a) *Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.* 

ALTER TABLE Movie ADD playing_limit_date DATE;

b) *Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*
ALTER TABLE Movie CHANGE rating rating FLOAT;


c) *Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*

UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";

D)Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.

DELETE FROM Movie WHERE id = "001"

## EXERCICIOS7

a) *Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?*
 
 SELECT COUNT(*) FROM Movie WHERE rating > 7.5;


b) *Qual a média das avaliações dos filmes?*

SELECT AVG(rating) FROM Movie;

c) *Qual a quantidade de filmes em cartaz?*
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();


d) *Qual a quantidade de filmes que ainda irão lançar?*
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();

e) *Qual a maior nota dos filmes?*
SELECT MAX(rating) FROM Movie;

f) *Qual a menor nota dos filmes?*
SELECT MAN(rating) FROM Movie;



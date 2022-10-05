
## exercicios

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);


*A)a) Explique o que é uma chave estrangeira

uma chave estrageira é uma chave que permite a referência a registros oriundos de outras tabelas. Ou seja, é o campo ou conjunto de campos que compõem a chave primária de uma outra tabela.
 
não se pode criar uma Foreign Key sem relacionar com outtra tabela existente.

*B)*Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"007",
    "muito bom",
    10,
	"005"
);


*c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.*



d) *Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*

alterado --> ALTER TABLE Movies 
DROP COLUMN rating;

*e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*

-- 2)exercicios

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

EXPLICAÇÃO,--> essa tabela está criando outra tabela movieCast, que sera relacionada a tabela movies pela chave estrangeira, fazendo referencias a tabela movie e actor pelo seu ID.  

b) Crie, ao menos, 6 relações nessa tabela


*c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*

*d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*

Exercício 3

*a) Explique, com suas palavras, a query acima. O que é o operador `ON`?*
O operador ON faz a relaçao entre tabelas

*b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*
 
 SELECT Movies.id, name, rate FROM Movies
INNER JOIN Rating
ON Movies.id = Rating.movie_id;

-- 4)EXERCICIOS

a.
SELECT Movies.id, name, comment, rate FROM Movies
LEFT JOIN Rating
ON Movies.id = Rating.movie_id;

-- b.
SELECT Movies.id, name, MovieCast.actor_id FROM Movies
RIGHT JOIN MovieCast
ON Movies.id = MovieCast.movie_id;

-- c.
SELECT AVG(Rating.rate), name, Movies.id FROM Movies
lEFT JOIN Rating
ON Movies.id = Rating.movie_id
GROUP BY Movies.id;


5)EXERCICIOS 

SELECT * FROM Movies
LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;

 b.
SELECT Movies.id as movie_id, Movies.name as movie_name, Actor.id as actor_id, Actor.name as actor_name 
FROM Movies
LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id;

 d.
SELECT Movies.id as movie_id, Movies.name as movie_name, Actor.id as actor_id, Actor.name as actor_name, rate, comment 
FROM Movies
LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id
JOIN Actor ON Actor.id = MovieCast.actor_id
JOIN Rating ON Rating.movie_id = Movies.id;
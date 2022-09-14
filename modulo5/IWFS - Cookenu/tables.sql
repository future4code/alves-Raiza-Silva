CREATE TABLE cookenu_uses (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255)UNIQUE NOT NULL,
    password VARCHAR(65) NOT NULL
);


CREATE TABLE cookenu_Recipes (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(1000)UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    creator_userId VARCHAR(255),
    FOREIGN KEY(creator_userId) REFERENCES cookenu_uses(id)

);


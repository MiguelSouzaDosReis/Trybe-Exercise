DROP DATABASE IF EXISTS Normalizando;
CREATE DATABASE Normalizando;

CREATE TABLE Normalizando.Setor(
id INT PRIMARY KEY AUTO_INCREMENT,
Setor VARCHAR(50) NOT NULL
) engine = InnoDB;

CREATE TABLE Normalizando.Fucionarios(
id INT PRIMARY KEY AUTO_INCREMENT,
Nome VARCHAR(50) NOT NULL,
Sobrenome VARCHAR(50) NOT NULL,
Contato VARCHAR(50) NOT NULL,
Telefone VARCHAR(50) NOT NULL,
data_cadastro DATETIME NOT NULL
) engine = InnoDB;

CREATE TABLE Normalizando.Setor_e_Fucionarios(
Setor_ID INT NOT NULL,
Fucionario_id INT NOT NULL,
CONSTRAINT PRIMARY KEY (Setor_ID,Fucionario_id),

FOREIGN KEY (Setor_ID) REFERENCES Normalizando.Setor(id),
FOREIGN KEY (Fucionario_id) REFERENCES Normalizando.Fucionarios(id)
)engine = InnoDB;

INSERT INTO Normalizando.Fucionarios (Nome,Sobrenome,Contato,Telefone,data_cadastro)
VALUES('Joseph','Rodrigues','jo@gmail.com','(35)998552-1445','2020-05-05 08:50:25'), 
      ('André','Freeman','andre1990@gmail.com','(47)99522-4996','2020-02-05 00:00:00'), 
      ('Cíntia','Duval','cindy@outlook.com','(33)99855-4669','2020-05-05 10:55:35'), 
      ('Fernanda','Mendes','fernandamendes@yahoo.com','(33)99200-1556','2020-05-05 11:45:40');

INSERT INTO Normalizando.Setor (Setor)
VALUES  ('Adminstração'), ('Vendas'), ('Operacional'), ('Estratégico'), ('Vendas'), ('Marketing');

INSERT INTO Normalizando.Setor_e_Fucionarios (Setor_ID,Fucionario_id)
VALUES (1,12), (2,12), (3,13), (4,14), (5,14), (6,15);
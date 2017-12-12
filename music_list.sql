DROP DATABASE IF EXISTS music_listDB;

CREATE DATABASE music_listDB;

USE music_listDB;

CREATE TABLE songs(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);


insert into songs(title, artist, genre)
values("human", "bones", "r & b");

insert into songs(title, artist, genre)
values("I wanna dance with somebody", "whitney houston", "r & b");

insert into songs(title, artist, genre)
values("golddigger", "jamie foxx", "r & b");

insert into songs(title, artist, genre)
values("darling nikki", "prince", "dance");


-- Drops the favorite_db if it exists currently it will delete any databases named favorite_db --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --
USE favorite_db;

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
 ID Integer (11) auto_increment NOT NULL PRIMARY KEY, 
 -- Make a string column called "food" which cannot contain null --
  FOOD varchar (50) NOT null,
  -- Make an numeric column called "score" --
  SCORE INTEGER (20)
);

CREATE TABLE favorite_songs (
  ID Integer (11) auto_increment NOT NULL PRIMARY KEY,
  -- Make a string column called "song" which cannot contain null --
  SONG varchar (30) NOT null,
  -- Make a string column called "artist" --
  ARTIST varchar (30),
  -- Make an integer column called "score" --
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  ID Integer (11) auto_increment NOT NULL PRIMARY KEY,
  -- Create a string column called "movie" which cannot be null --
  MOVIE VARCHAR (30) NOT NULL,
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  FIVE_TIMES BOOLEAN default FALSE,
  -- Make an integer column called "score" --
  score INTEGER(10)
  -- Set the primary key of the table to id   
  
);

-- Creates new rows containing data in all named columns --
INSERT INTO favorite_foods (FOOD, SCORE)
VALUES ("PICKLES", 15);

INSERT INTO favorite_songs (SONG, ARTIST, SCORE)
VALUES ("Pretty Woman", "Tom Petty", 66);

INSERT INTO favorite_movies (MOVIE, FIVE_TIMES, SCORE)
VALUES ("Wonder Woman", true, 10);



-- Updates the row where the column name is favorite movies --
UPDATE favorite_movies
SET five_times = true, MOVIE = "Franklin", score = 2
WHERE id = 1;

SELECT * FROM favorite_movies;


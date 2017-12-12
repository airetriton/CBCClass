-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --
USE programming_db;

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
	ID Integer(4) auto_increment NOT NULL, 
  -- Create a string column called "language" --
	LANGUAGES varchar(50),
  -- Create an integer column called "rating" --
	RATING integer(3),
  -- Create a boolean column called "mastered" which will automatically fill --
	MASTERED BOOLEAN default TRUE,
  -- with true when a new row is made and the value isn't otherwise defined. --

  -- Set the id as this table's primary key
  PRIMARY KEY (ID)
);

-- Create new example rows
INSERT INTO programming_languages (languages, rating)
VALUES ("Java", 25);

INSERT INTO programming_languages (languages, rating)
VALUES ("JavaScript", 36);
INSERT INTO programming_languages (languages, rating)
VALUES ("Bootstrap", 666);
INSERT INTO programming_languages (languages, rating)
VALUES ("CSS", 3000);
INSERT INTO programming_languages (languages, rating)
VALUES ("Peaches", 999);

SELECT * FROM PROGRAMMING_LANGUAGES;
-- Create a new table
CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  city VARCHAR(30) NOT NULL,
  state VARCHAR(30) NOT NULL,
  population INT
);

-- Insert data into the table
INSERT INTO cities (city, state, population)
VALUES ('Alameda', 'California', 79177),
  ('Mesa', 'Arizona', 496401),
  ('Boerne', 'Texas', 16056),
  ('Boerne', 'Texas', 16056),
  ('Anaheim', 'Texas', 352497),
  ('Tucson', 'Arizona', 535677),
  ('Garland', 'Texas', 238002);

-- View the table data
SELECT *
FROM cities;

-- Use a query to view only the cities
SELECT city
FROM cities;

-- Create a query to view cities in Texas
SELECT city, state
FROM cities
WHERE state = 'Texas';

-- Create a query to view cities and states
-- with a population less than 100,000
SELECT *
FROM cities
WHERE population < 100000;

-- Create a query to view the city in California
-- with a population of less than 100,000
SELECT *
FROM cities
WHERE population < 100000
AND state = 'California';

--  Create a query to update the state for the city of Anaheim.
UPDATE cities
SET state = 'California'
WHERE city = 'Anaheim';

-- Create a query to removed the duplicate "('Boerne', 'Texas', 16056)" by id=4.
DELETE FROM cities
WHERE id = 4;
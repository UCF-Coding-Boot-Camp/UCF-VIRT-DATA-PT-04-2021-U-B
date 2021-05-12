-- Select everything from film table
SELECT * FROM film;

-- Count the amount of film_id's in film table
SELECT COUNT(film_id) FROM film;

-- Create an alias
SELECT COUNT(film_id) AS "Total films"
FROM film;

-- Group by rating and aggregate the film_id count
SELECT rating, COUNT(film_id) AS "Total films"
FROM film
GROUP BY rating;

-- Select the average rental duration
SELECT AVG(rental_duration)
FROM film;

-- Create an Alias
SELECT AVG(rental_duration) AS "Average rental period"
FROM film;

-- Group by the rental duration, average the rental rate and give alias
SELECT rental_duration, AVG(rental_rate) AS "Average rental rate"
FROM film
GROUP BY rental_duration;

-- Find the rows with the minimum rental rate
SELECT rental_duration, MIN(rental_rate) AS "Min rental rate"
FROM film
GROUP BY rental_duration;

-- Find the rows with the maximum rental rate
SELECT rental_duration, MAX(rental_rate) AS "Max rental rate"
FROM film
GROUP BY rental_duration;

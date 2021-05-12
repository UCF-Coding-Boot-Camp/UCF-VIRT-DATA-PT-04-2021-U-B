-- First select customer_id, inventory_id, and rental_date from the rental date and order by customer_id.
SELECT customer_id, inventory_id, rental_date
FROM rental
ORDER BY customer_id, rental_id DESC;

-- Using the previous query we add the DISTINCT statement to get the different values
SELECT DISTINCT customer_id, inventory_id, rental_date
FROM rental
ORDER BY rental_date;

-- Use Join to find the inventory, film and store id
SELECT DISTINCT customer_id, rental_date
FROM rental
WHERE customer_id = 130
ORDER BY rental_date;

-- Use DISTINCT ON and pass the customer_id in the parentheses to get each unique customer's latest rental date. 
SELECT DISTINCT ON (customer_id) customer_id, rental_date
FROM rental
ORDER BY customer_id, rental_date DESC;


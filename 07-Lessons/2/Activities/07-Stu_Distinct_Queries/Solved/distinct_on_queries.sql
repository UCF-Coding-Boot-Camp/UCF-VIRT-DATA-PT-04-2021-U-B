-- Query 1

SELECT DISTINCT ON (r.customer_id) c.first_name, c.last_name, c.email, r.rental_date 
FROM rental AS r
JOIN customer AS c 
ON (r.customer_id=c.customer_id)
ORDER BY r.customer_id, r.rental_date DESC;


-- Query 2

SELECT DISTINCT ON (f.title ) f.title, r.rental_date
FROM rental AS r
JOIN inventory as i
ON (i.inventory_id = r.inventory_id)
JOIN film as f
ON (f.film_id = i.film_id)
ORDER BY f.title, r.rental_date DESC;

-- Bonus

SELECT film_id, title
FROM film 
WHERE film_id NOT IN
  (SELECT film_id 
   FROM inventory);

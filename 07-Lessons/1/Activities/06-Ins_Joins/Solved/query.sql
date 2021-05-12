-- Drop table if exists
DROP TABLE players;

-- Create the players table
CREATE TABLE players (
	player_id INT,
	first_name VARCHAR,
	last_name VARCHAR,
	hand VARCHAR,
	country_code VARCHAR
);

-- Check data import
SELECT *
FROM players;

-- Create the matches table
CREATE TABLE matches (
	loser_age DEC,
	loser_id INT,
	loser_name VARCHAR,
	loser_rank INT,
	winner_age DEC,
	winner_id INT,
	winner_name VARCHAR,
	winner_rank INT
);

-- Check data import
SELECT *
FROM matches;

-- Perform an INNER JOIN on the two tables
SELECT players.first_name, players.last_name, players.hand, matches.loser_rank
FROM matches
INNER JOIN players ON
players.player_id=matches.loser_id;

-- Alternative solution:
-- Perform an INNER JOIN on the two tables
SELECT p.first_name, p.last_name, p.hand, m.loser_rank
FROM matches AS m
INNER JOIN players AS p ON
p.player_id=m.loser_id;

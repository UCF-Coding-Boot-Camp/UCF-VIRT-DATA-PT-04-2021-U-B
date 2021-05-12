-- Drop table if exists
DROP TABLE bird_song;

-- Create new table
CREATE TABLE bird_song (
	english_name VARCHAR,
	country VARCHAR,
	latitude DEC,
	longitude DEC
);


-- View table columns and datatypes
SELECT * FROM bird_song;

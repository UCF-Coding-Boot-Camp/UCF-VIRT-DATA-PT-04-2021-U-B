-- Add primary key
ALTER TABLE firepower
ADD COLUMN id SERIAL PRIMARY KEY;

-- Delete and update data
DELETE FROM firepower
WHERE ReservePersonnel = 0;

UPDATE firepower
SET FighterAircraft = 1
WHERE FighterAircraft = 0;

UPDATE firepower
SET TotalAircraftStrength = TotalAircraftStrength + 1
WHERE FighterAircraft = 1;

-- Select averages and rename columns
SELECT AVG(TotalMilitaryPersonnel) AS AvgTotMilPersonnel,
	AVG(TotalAircraftStrength) AS AvgTotAircraftStrength,
	AVG(TotalHelicopterStrength) AS AvgTotHelicopterStrength,
	AVG(TotalPopulation) AS AvgTotalPopulation
FROM firepower;

-- Insert new data
INSERT INTO firepower(Country, TotalPopulation, TotalMilitaryPersonnel, TotalAircraftStrength, TotalHelicopterStrength)
VALUES ('GlobalLand', 60069024, 524358, 457, 183);

-- View table
SELECT * FROM firepower;

CREATE TABLE orbital_elements (
	planetName VARCHAR(70) PRIMARY KEY NOT NULL,
	meanDistanceToSun NUMERIC(12, 4),
	eccentricity NUMERIC (8, 4),
	inclination NUMERIC (8, 4),
	ascendingNodeLongitude NUMERIC(8, 4),
	perihelionArgument NUMERIC(8, 4),
	perihelionPassingTime NUMERIC(8, 4)
);
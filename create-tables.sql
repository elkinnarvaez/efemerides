CREATE TABLE orbital_elements (
	planetName VARCHAR(70) PRIMARY KEY NOT NULL,
	meanDistanceToSun NUMERIC(12, 4),
	eccentricity NUMERIC (8, 4),
	inclination NUMERIC (8, 4),
	ascendingNodeLongitude NUMERIC(8, 4),
	perihelionArgument NUMERIC(8, 4),
	perihelionPassingTime NUMERIC(8, 4)
);

INSERT INTO orbital_elements(planetName, meanDistanceToSun, eccentricity, inclination, ascendingNodeLongitude, perihelionArgument, perihelionPassingTime)
VALUES ('Tierra', 1.0, 0.0167, 0.000, 0.5, 0.0, 4.3);
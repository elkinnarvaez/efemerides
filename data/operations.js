const selectAll = async (client) => {
  return new Promise((resolve, reject) => {
    client.query('SELECT * FROM orbital_elements', (err, res) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(res.rows);
      }
    });
  });
};

const selectByPlanet = async (client, planetName) => {
  return new Promise((resolve, reject) => {
    client.query(
      'SELECT * FROM orbital_elements WHERE planetName = $1',
      [planetName],
      (err, res) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(res.rows);
        }
      }
    );
  });
};

const update = async (client, row, oldPlanetName) => {
  const {
    planetName,
    meanDistanceToSun,
    eccentricity,
    inclination,
    ascendingNodeLongitude,
    perihelionArgument,
    perihelionPassingTime,
  } = row;
  return new Promise(async (resolve, reject) => {
    if (oldPlanetName != planetName) {
      try {
        const rows = await selectByPlanet(client, planetName);
        if (rows.length > 0) {
          return reject(new Error('El nombre del planeta ingresado ya existe'));
        }
      } catch (err) {
        return reject(err);
      }
    }
    client.query(
      `UPDATE orbital_elements 
      SET planetName = $1,
      meanDistanceToSun = $2,
      eccentricity = $3,
      inclination = $4,
      ascendingNodeLongitude = $5,
      perihelionArgument = $6,
      perihelionPassingTime = $7
      WHERE planetName = $8`,
      [
        planetName,
        meanDistanceToSun,
        eccentricity,
        inclination,
        ascendingNodeLongitude,
        perihelionArgument,
        perihelionPassingTime,
        oldPlanetName,
      ],
      (err, res) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(true);
        }
      }
    );
  });
};

module.exports = {
  selectAll,
  selectByPlanet,
  update,
};

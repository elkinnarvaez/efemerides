const selectAll = async (client) => {
  return new Promise((resolve, reject) => {
    client.query('SELECT * FROM orbital_elements;', (err, res) => {
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
      'SELECT * FROM orbital_elements WHERE planetName = $1;',
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

const insert = async (client, row) => {
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
    try {
      const rows = await selectByPlanet(client, planetName);
      if (rows.length > 0) {
        return reject(new Error('El nombre del planeta ingresado ya existe'));
      } else {
        client.query(
          `INSERT INTO orbital_elements (planetName, meanDistanceToSun, eccentricity, inclination, ascendingNodeLongitude, perihelionArgument, perihelionPassingTime)
          VALUES($1, $2, $3, $4, $5, $6, $7);`,
          [
            planetName,
            meanDistanceToSun,
            eccentricity,
            inclination,
            ascendingNodeLongitude,
            perihelionArgument,
            perihelionPassingTime,
          ],
          (err, res) => {
            if (err) {
              return reject(err);
            } else {
              return resolve(true);
            }
          }
        );
      }
    } catch (err) {
      return reject(err);
    }
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
    try {
      if (oldPlanetName != planetName) {
        const rows = await selectByPlanet(client, planetName);
        if (rows.length > 0) {
          return reject(new Error('El nombre del planeta ingresado ya existe'));
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
          WHERE planetName = $8;`,
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
    } catch (err) {
      return reject(err);
    }
  });
};

module.exports = {
  selectAll,
  selectByPlanet,
  update,
  insert,
};

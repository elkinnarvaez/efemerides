const { response } = require('express');

const fetchAll = async (req, res = response) => {
  res.status(200).json({
    message: 'Orbital elements retrieved successfully',
    orbitalElements: [
      {
        planetName: 'venus',
        altitud: 10,
      },
      {
        planetName: 'jupiter',
        altitud: 20,
      },
    ],
  });
};

module.exports = {
  fetchAll,
};

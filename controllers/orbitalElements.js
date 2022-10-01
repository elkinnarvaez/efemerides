const { response } = require('express');
const { connectToDatabaseClient } = require('../data/index');
const { selectAll } = require('../data/operations');

const fetchAll = async (req, res = response) => {
  try {
    const client = await connectToDatabaseClient();
    selectAll(client);
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
  } catch (err) {
    res.status(400).json({
      message: 'Orbital elements could not be retrieved successfully',
      error: err,
    });
  }
};

module.exports = {
  fetchAll,
};

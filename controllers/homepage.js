const { response } = require('express');

const getPlanets = async (req, res = response) => {
  const { name } = req.params;
  res.json({
    planetName: name,
    altitud: 10,
  });
};

module.exports = {
  getPlanets,
};

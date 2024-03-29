const { response } = require('express');
const { formatRows } = require('./helpers');
const { connectToDatabaseClient } = require('../data/index');
const {
  selectAll,
  selectByPlanet,
  update,
  insert,
} = require('../data/operations');

const fetchAll = async (req, res = response) => {
  try {
    const client = await connectToDatabaseClient();
    const rows = formatRows(await selectAll(client));
    res.status(200).json({
      message: 'Orbital elements retrieved successfully',
      orbitalElements: rows,
    });
  } catch (err) {
    res.status(400).json({
      message: 'Orbital elements could not be retrieved successfully',
      error: err,
    });
  }
};

const fetchByPlanet = async (req, res = response) => {
  try {
    const { planetName } = req.params;
    const client = await connectToDatabaseClient();
    const rows = formatRows(await selectByPlanet(client, planetName));
    if (rows.length === 0) {
      throw new Error('No orbital elements were found for the given planet');
    }
    res.status(200).json({
      message: 'Planet orbital elements retrieved successfully',
      planetOrbitalElements: rows[0],
    });
  } catch (err) {
    res.status(400).json({
      message:
        err.message ||
        'Planet orbital elements could not been retrieved successfully',
      error: JSON.stringify(err, Object.getOwnPropertyNames(err)),
    });
  }
};

const updateRecord = async (req, res = response) => {
  try {
    const { row, oldPlanetName } = req.body;
    const client = await connectToDatabaseClient();
    await update(client, row, oldPlanetName);
    res.status(200).json({
      message: 'Record updated successfully',
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || 'Record failed to be updated',
      error: err,
    });
  }
};

const createRecord = async (req, res = response) => {
  try {
    const { row } = req.body;
    const client = await connectToDatabaseClient();
    await insert(client, row);
    res.status(200).json({
      message: 'Record created successfully',
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || 'Record failed to be created',
      error: err,
    });
  }
};

module.exports = {
  fetchAll,
  fetchByPlanet,
  updateRecord,
  createRecord,
};

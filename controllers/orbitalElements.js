const { response } = require('express');
const { formatRows } = require('./helpers');
const { connectToDatabaseClient } = require('../data/index');
const { selectAll, update } = require('../data/operations');

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

module.exports = {
  fetchAll,
  updateRecord,
};

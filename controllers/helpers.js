const formatRows = (rows) => {
  let formattedRows = [];
  rows.forEach((row) => {
    formattedRows.push({
      planetName: row.planetname,
      meanDistanceToSun: parseFloat(row.meandistancetosun),
      eccentricity: parseFloat(row.eccentricity),
      inclination: parseFloat(row.inclination),
      ascendingNodeLongitude: parseFloat(row.ascendingnodelongitude),
      perihelionArgument: parseFloat(row.perihelionargument),
      perihelionPassingTime: parseFloat(row.perihelionpassingtime),
    });
  });
  return formattedRows;
};

module.exports = {
  formatRows,
};

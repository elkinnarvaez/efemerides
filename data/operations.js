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

module.exports = {
  selectAll,
};

const selectAll = async (client) => {
  return Promise((resolve, reject) => {
    client.query('SELECT * FROM orbital_elements', (err, res) => {
      if (err) {
        return reject(err);
      } else {
        console.log(res);
        resolve(true);
      }
    });
  });
};

module.exports = {
  selectAll,
};

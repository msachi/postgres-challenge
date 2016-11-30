const dbConn = require('./db-connection');

module.exports = (cb, params) => {
  dbConn.query('INSERT INTO exotic_fruits (name, colour, stone) VALUES ($1, $2, $3);', [params.name, params.colour, params.stone], (error, data) => {
    error ? cb(error) : cb(null, data.rows);
  });
};

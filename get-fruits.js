const dbConn = require('./db-connection');

module.exports = cb => {
  dbConn.query('SELECT * FROM exotic_fruits', (error, data) => {
    error ? cb(error) : cb(null, data.rows);
  });
};

const fs = require('fs');
const env = require('env2');

env('./config.env');

const dbConn = require('./db-connection');

const sql = fs.readFileSync(`${__dirname}/database.sql`).toString();

dbConn.query(sql, (error, result) =>
  (error
  ? console.log('Error', error)
  : console.log('Result', result)));

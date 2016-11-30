const { Pool } = require('pg');
const url = require('url');

const params = url.parse(process.env.DB_URL);

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
};

console.log(options);

module.exports = new Pool(options);

const pg = require('pg')

const Pool = pg.Pool;
const pool = new Pool({
  database: 'react_gallery',
  host: 'localhost',
  port: 5432,
  max: 15,
  idleTimeoutMillis: 20000 //20 seconds
});

//below not needed, but will inform of errors for easier troubleshooting
pool.on('connect', () => console.log('connected to database'));
pool.on('error', error => console.log(`Error on connecting to database: ${error}`))

module.exports = pool

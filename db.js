const Pool = require('pg').Pool

const pool = new Pool({
  username: 'postgres',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'pern_test_api'
})

module.exports = pool

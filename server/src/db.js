var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 's5project',
  port: 4406,
  multipleStatements: true,
  timezone: '+00:00'
})

module.exports = connection

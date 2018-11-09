var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'banking',
  port: 4406
})

/*
let _db

function initDB (callback) {
  if (_db) {
    console.warn('Trying to init DB again!')
    return callback(null, _db)
  }
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'banking',
    port: 4406
  })
  connection.connect()
  return connection
}

function getDB () {
  assert.ok(connection, 'Db has not been initialized. Please called init first.')
  return connection
}

function closeDB () {
  connection.close()
}
*/

module.exports = connection

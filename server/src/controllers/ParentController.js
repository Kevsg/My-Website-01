const connection = require('../db.js')

module.exports = {
  async insert (req, res) {
    connection.query('SELECT * from account', function (error, results, fields) {
      if (error) throw error
      console.log(results[0].balance)
      return results[0].balance
    })
  }
}

const connection = require('../db.js')

module.exports = {
  async insert (req, res) {
    console.log(req.body)
    let parent = req.body
    var query = connection.query('INSERT INTO parent SET ?', parent, function (error, results, fields) {
      if (error) throw error
      // Neat!
    })
    console.log(query.sql) // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
    return 1
    /*
    connection.query(`INSERT INTO parent`, function (error, results, fields) {
      if (error) throw error
      console.log(results)
      return results
    })
    */
  }
}

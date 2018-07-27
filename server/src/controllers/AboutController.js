// const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    console.log('test1')
    try {
      let info = {
        name: 'Harry Potter',
        age: 18
      }
      res.send(info)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the about info'
      })
    }
  }
}

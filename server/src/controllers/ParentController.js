module.exports = {
  async insert (req, res) {
    console.log(req.body)
    try {
      // insert into database
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to insert parent'
      })
    }
  }
}

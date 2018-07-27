const AboutController = require('./controllers/AboutController')

module.exports = (app) => {
  app.get('/about',
    AboutController.index)
}

const AboutController = require('./controllers/AboutController')
const ParentController = require('./controllers/ParentController')

module.exports = (app) => {
  app.get('/about', AboutController.index)
  app.get('/parent/insert', ParentController.insert)
  app.post('/parent/insert', ParentController.insert)
}

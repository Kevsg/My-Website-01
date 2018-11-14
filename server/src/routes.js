const AboutController = require('./controllers/AboutController')
const ParentController = require('./controllers/ParentController')

module.exports = (app) => {
  app.get('/about', AboutController.index)

  app.get('/parent/index', ParentController.index)
  app.post('/parent/insert', ParentController.insert)
  app.put('/parent/update/:id', ParentController.update)
  app.delete('/parent/delete/:id', ParentController.delete)
}

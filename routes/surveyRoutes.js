const requireLogin = require('../middlewares/requireLogin')
const requireCredits =require('../middlewres/requireCredits')

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {

  })
}
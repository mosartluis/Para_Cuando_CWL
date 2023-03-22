const express = require('express')
const routesUsers = require('./users.routes')

const routesPublications = require('./publications.routes')
const routesPublicationsTypes = require('./publicationsTypes.routes')
const routesStates = require('./states.routes')
// const routesUsers = require('./users.routes')

// const isAuthenticatedByPassportJwt = require('../libs/passport')

const routesAuth = require('./auth.routes')

function routerModels(app) {
  const router = express.Router()

  app.use('/api/v1', router)
  router.use('/auth', routesAuth)
  router.use('/users', routesUsers)
  router.use('/publications-types', routesPublicationsTypes)
  router.use('/publications', routesPublications)
  router.use('/states', routesStates)
}

module.exports = routerModels

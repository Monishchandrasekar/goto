const router = require('express').Router()
const {Profile} = require('../db/models')

router.use('/profile', require('./profile'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router

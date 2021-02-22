const router = require('Express').Router()
const {Profile} = require('../db/models')

router.get('/stages', async (req, res, next) => {
  try {
    let data = await Profile.findAll({
      where: {
        collegeTier: req.query.college,
        race: req.query.race,
        gender: req.query.gender,
        income: req.query.income
      }
    })
    res.send(data[0])
  } catch (err) {
    next(err)
  }
})

module.exports = router

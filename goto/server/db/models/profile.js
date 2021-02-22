const Sequelize = require('sequelize')
const db = require('../db')

const Profile = db.define('profile', {
  age: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  race: {
    type: Sequelize.ENUM(
      'Black/African-American',
      'White/Caucasian',
      'Native American',
      'Hispanic/Latino',
      'Pacific Islander/Asian-American'
    )
  },
  gender: {
    type: Sequelize.ENUM('female', 'male')
  },
  collegeTier: {
    type: Sequelize.ENUM(
      'elite college',
      'state university',
      'community college',
      'online college'
    )
  },
  income: {
    type: Sequelize.ENUM('working', 'middle', 'upper')
  },
  stage1: {type: Sequelize.TEXT},
  stage2: {type: Sequelize.TEXT},
  stage3: {type: Sequelize.TEXT}
})

Profile.getDescription = async college => {
  const profiles = await Profile.findAll({
    where: {
      collegeTier: college
    }
  })
  return profiles[0].description
}

module.exports = Profile

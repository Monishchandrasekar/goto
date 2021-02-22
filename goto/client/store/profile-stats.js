import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_STATS = 'GET_STATS'

/**
 * INITIAL STATE
 */
const defaultProfile = {
  age: '',
  gender: '',
  income: '',
  collegeTier: '',
  race: ''
}

/**
 * ACTION CREATORS
 */
export const getStats = stats => ({type: GET_STATS, stats})

export default function(state = defaultProfile, action) {
  switch (action.type) {
    case GET_STATS:
      return {
        ...state,
        gender: action.stats.gender,
        age: action.stats.age,
        income: action.stats.income,
        collegeTier: action.stats.collegeTier,
        race: action.stats.race
      }
    default:
      return state
  }
}

import axios from 'axios'

/**
 * ACTION TYPES
 */
const GOT_STAGES = 'GOT_STAGES'
const SET_STAGE = 'SET_STAGE'

/**
 * INITIAL STATE
 */
const defaultStage = {
  currentNum: 0,
  stage1: '',
  stage2: '',
  stage3: ''
}

export const gotStages = (stage1, stage2, stage3) => ({
  type: GOT_STAGES,
  stage1,
  stage2,
  stage3
})
export const setStage = currentNum => ({
  type: SET_STAGE,
  currentNum
})

export const getStages = values => async dispatch => {
  try {
    const {data} = await axios.get(
      `/api/profile/stages?college=${values.collegeTier}&race=${
        values.race
      }&gender=${values.gender}&income=${values.income}`
    )
    let {stage1, stage2, stage3} = data
    dispatch(gotStages(stage1, stage2, stage3))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = defaultStage, action) {
  switch (action.type) {
    case GOT_STAGES:
      return {
        ...state,
        stage1: action.stage1,
        stage2: action.stage2,
        stage3: action.stage3
      }
    case SET_STAGE:
      return {
        ...state,
        currentNum: action.currentNum
      }
    default:
      return state
  }
}

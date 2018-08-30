import { SET_ANSWERS } from '../_types/answers'
import { RESET_ANSWERS } from '../_types/answers'
export const setAnswers = (answers) => {
  return dispatch => {
    dispatch({
      type: SET_ANSWERS,
      payload: {
        answers
      }
    })
  }
}

export const resetAnswers = () => {
  return dispatch => {
    dispatch({
      type: RESET_ANSWERS
    })
  }
}
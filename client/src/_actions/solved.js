import { SET_SOLVED, RESET_SOLVED } from '../_types/solved'
export const setSolved = (solved) => {
  return dispatch => {
    dispatch({
      type: SET_SOLVED,
      payload: {
        solved
      }
    })
  }
}

export const resetSolved = () => {
  return dispatch => {
    dispatch({
      type: RESET_SOLVED
    })
  }
}
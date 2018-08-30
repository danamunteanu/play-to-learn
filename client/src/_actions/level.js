import { SET_LEVEL } from '../_types/level'
export const setLevel = (level) => {
  return dispatch => {
    dispatch({
      type: SET_LEVEL,
      payload: {
        level
      }
    })
  }
}
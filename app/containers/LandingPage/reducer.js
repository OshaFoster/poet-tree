/*
 *
 * LandingPage reducer
 *
 */
import produce from 'immer'
import { DEFAULT_ACTION, SAVE_FILLERS } from './constants'

export const initialState = {}

/* eslint-disable default-case, no-param-reassign */
const landingPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SAVE_FILLERS:
        draft.fillers = action.payload
        break

      case DEFAULT_ACTION:
        break
    }
  })

export default landingPageReducer

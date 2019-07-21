/*
 *
 * LandingPage actions
 *
 */

import { DEFAULT_ACTION, TEST_CALL, SAVE_FILLERS } from './constants'

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  }
}

export function testAction() {
  return {
    type: TEST_CALL,
  }
}

export function saveFillers(payload) {
  return {
    type: SAVE_FILLERS,
    payload,
  }
}

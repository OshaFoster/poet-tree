/*
 *
 * LandingPage actions
 *
 */

import { DEFAULT_ACTION, TEST_CALL } from './constants'

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  }
}

export function testAction() {
  console.log('in test action')
  return {
    type: TEST_CALL,
  }
}

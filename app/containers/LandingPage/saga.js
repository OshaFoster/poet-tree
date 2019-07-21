import { takeLatest, call } from 'redux-saga/effects'
import { db } from 'components/Initialize'

import { TEST_CALL } from './constants'

// Individual exports for testing
export function* landingPageSaga() {
  // See example in containers/HomePage/saga.js
}

export function* makeTestCall() {
  // See example in containers/HomePage/saga.js
  console.log('in makeTestCall')
  try {
    const fillers = yield call(
      db
        .collection('fillers')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log(doc.data())
          })
        }),
    )
    // yield put(saveData(fillers))
  } catch (err) {
    console.log(err)
  }
}

export default function* defaultSaga() {
  console.log('in defaultSaga')
  yield takeLatest(TEST_CALL, makeTestCall)
}

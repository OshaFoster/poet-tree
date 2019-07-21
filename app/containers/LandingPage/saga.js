import { takeLatest, call, put } from 'redux-saga/effects'
import { db } from 'components/Initialize'

import { TEST_CALL } from './constants'
import { saveFillers } from './actions'

export function* makeTestCall() {
  try {
    let fillersData = {}
    const fillers = yield call(() =>
      db
        .collection('fillers')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            fillersData = {
              ...fillersData,
              ...doc.data(),
            }
          })
        })
        .then(() => fillersData),
    )
    yield put(saveFillers(fillers))
  } catch (err) {
    console.log(err)
  }
}

export default function* defaultSaga() {
  yield takeLatest(TEST_CALL, makeTestCall)
}

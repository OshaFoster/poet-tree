import firebase from 'firebase/app'
import '@firebase/firestore'
import { takeLatest, call, put } from 'redux-saga/effects'

import { TEST_CALL } from './constants'

firebase.initializeApp({
  apiKey: 'AIzaSyBBcpAywBVDPhG-4vehBvIbHPtpkeQNnIU',
  authDomain: 'poet-tree.firebaseapp.com',
  databaseURL: 'https://poet-tree.firebaseio.com',
  projectId: 'poet-tree',
  storageBucket: 'poet-tree.appspot.com',
  messagingSenderId: '721416476712',
  appId: '1:721416476712:web:2679f51b047f4d87',
})

const db = firebase.firestore()

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

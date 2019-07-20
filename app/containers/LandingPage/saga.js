import firebase from 'firebase'
import '@firebase/firestore'
import ReduxSagaFirebase from 'redux-saga-firebase'
import { takeLatest, call } from 'redux-saga/effects'

import { TEST_CALL } from './constants'

const myFirebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBBcpAywBVDPhG-4vehBvIbHPtpkeQNnIU',
  authDomain: 'poet-tree.firebaseapp.com',
  databaseURL: 'https://poet-tree.firebaseio.com',
  projectId: 'poet-tree',
  storageBucket: 'poet-tree.appspot.com',
  messagingSenderId: '721416476712',
  appId: '1:721416476712:web:2679f51b047f4d87',
})

const rsf = new ReduxSagaFirebase(myFirebaseApp)

// Individual exports for testing
export function* landingPageSaga() {
  // See example in containers/HomePage/saga.js
}

export function* makeTestCall() {
  // See example in containers/HomePage/saga.js
  console.log('in saga')
  // try {
  //   const doc = yield call(rsf.firestore.getCollection('fillers'))
  //   console.log(doc)
  // } catch (err) {
  //   console.log(err)
  // }
}

export default function* defaultSaga() {
  console.log('in here')
  yield takeLatest(TEST_CALL, makeTestCall)
}

/**
 *
 * Initialize
 *
 */
import firebase from 'firebase/app'
import '@firebase/firestore'
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

firebase.initializeApp({
  apiKey: 'AIzaSyBBcpAywBVDPhG-4vehBvIbHPtpkeQNnIU',
  authDomain: 'poet-tree.firebaseapp.com',
  databaseURL: 'https://poet-tree.firebaseio.com',
  projectId: 'poet-tree',
  storageBucket: 'poet-tree.appspot.com',
  messagingSenderId: '721416476712',
  appId: '1:721416476712:web:2679f51b047f4d87',
})

export const db = firebase.firestore()

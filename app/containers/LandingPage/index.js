/**
 *
 * LandingPage
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import makeSelectLandingPage, { selectFillers } from './selectors'
import reducer from './reducer'
import saga from './saga'
import { testAction } from './actions'

export function LandingPage(props) {
  useInjectReducer({ key: 'landingPage', reducer })
  useInjectSaga({ key: 'landingPage', saga })

  useEffect(() => {
    // figure out how to not create loop
    props.dispatch(testAction())
  })
  return (
    <div>
      <Helmet>
        <title>LandingPage</title>
        <meta name="description" content="Description of LandingPage" />
      </Helmet>
    </div>
  )
}

LandingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // landingPage: PropTypes.object,
  // fillers: PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
  landingPage: makeSelectLandingPage(),
  fillers: selectFillers(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(LandingPage)

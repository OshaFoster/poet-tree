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

  const useMountEffect = () => {
    useEffect(() => {
      // include anything that only needs to run on mount in here
      props.dispatch(testAction())
    }, [])
  }

  useMountEffect()
  useEffect(() => {
    console.log('mounted or updating')
  })

  console.log(props.fillers)

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
  fillers: PropTypes.object,
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

import React from 'react'
import {compose} from 'recompose'
import {Route, Switch, withRouter} from 'react-router-dom'
import HandleError from './hocs/handleError'
import MainContainer from './containers/MainContainer/MainContainer'

const App = () => (
  <Switch>
    <Route exact path="/" component={MainContainer}/>
  </Switch>
)

export default compose(
  HandleError,
  withRouter
)(App)

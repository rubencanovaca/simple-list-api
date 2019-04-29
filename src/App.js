import React from 'react'
import {compose} from 'recompose'
import {Route, Switch, withRouter} from 'react-router-dom'
import HandleError from './hocs/handleError'
import MainContainer from './containers/MainContainer/MainContainer'
import ItemContainer from './containers/ItemContainer/ItemContainer'

const App = () => (
  <Switch>
    <Route exact path="/" component={MainContainer}/>
    <Route exact path="/item/:itemId" component={ItemContainer}/>
  </Switch>
)

export default compose(
  HandleError,
  withRouter
)(App)

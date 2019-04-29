import {combineReducers} from 'redux-immutable'
import routeReducer from './routeReducer'
import isbnReducer from './itemReducer'

const rootReducer = asyncReducers => combineReducers({
  route: routeReducer,
  itemData: isbnReducer,
  ...asyncReducers
})

export default rootReducer

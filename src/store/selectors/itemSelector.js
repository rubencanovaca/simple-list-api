import {createSelector} from 'reselect/lib/index'

const itemState = state => state.get('itemData')

const itemSelector = () => createSelector(
  itemState,
  state => {
    const data = state.get('data')

    return data
  }
)

const fetchingSelector = () => createSelector(
  itemState,
  state => state.get('fetching')
)

const errorSelector = () => createSelector(
  itemState,
  state => {
    const error = state.get('error')

    return error
  }
)
export {
  itemSelector,
  fetchingSelector,
  errorSelector
}

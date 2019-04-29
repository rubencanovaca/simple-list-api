import {all, fork} from 'redux-saga/es/effects'
import watchExampleSagas from './itemSagas'

export default function * rootSaga () {
  yield all([
    fork(watchExampleSagas)
  ])
}

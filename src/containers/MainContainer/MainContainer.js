import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import {createStructuredSelector} from 'reselect/lib/index'
import {connect} from 'react-redux'

import {itemSelector, fetchingSelector} from '../../store/selectors/itemSelector'

import {item} from '../../store/actions'
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation'
import ListComponent from '../../components/ListComponent/ListComponent'
import HandleError from '../../hocs/handleError'

class MainContainer extends Component {
  static propTypes = {
    data: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]).isRequired,
    fetching: PropTypes.bool,
    load: PropTypes.func.isRequired
  }

  static defaultProps = {
    fetching: false
  }

  componentDidMount () {
    const {load} = this.props
    load()
  }

  render () {
    const {data, fetching} = this.props
    return (
      <div className="container-fluid">
        <h1>Items</h1>
        <div className="row">
          <div className="col-12">
            <div className="item-search">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Item ID" aria-label="Item" aria-describedby="ISBN"/>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button" onClick={value => item.requestOne(value)}>Search</button>
                </div>
              </div>
            </div>
            <ListComponent data={data}/>
          </div>
        </div>
        {fetching && <LoadingAnimation/>}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  data: itemSelector(),
  fetching: fetchingSelector()
})

const mapDispatchToProps = {
  load: item.request
}

export default compose(
  HandleError,
  connect(mapStateToProps, mapDispatchToProps)
)(MainContainer)

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import {createStructuredSelector} from 'reselect/lib/index'
import {connect} from 'react-redux'
import _ from 'lodash'

import {fetchingSelector, itemSelector} from '../../store/selectors/itemSelector'
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

  constructor (props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  componentDidMount () {
    const {load} = this.props
    load()
  }

  onChangeInput (e) {
    this.setState({input: e.target.value})
  }

  clearInput () {
    this.setState({input: ''})
  }

  render () {
    const {data, fetching} = this.props
    const {input} = this.state
    const filteredList = input ? _.filter(data, item => _.includes(item.title, input)) : data
    return (
      <div className="container-fluid">
        <h1>Items</h1>
        <div className="row">
          <div className="col-12">
            <div className="item-search">
              <div className="input-group mb-3">
                <input
                  type="text"
                  value={input}
                  className="form-control"
                  placeholder="Find in title"
                  aria-label="Item"
                  aria-describedby="Item"
                  onChange={this.onChangeInput.bind(this)}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    disabled={!input}
                    onClick={this.clearInput.bind(this)}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
            <ListComponent data={filteredList}/>
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

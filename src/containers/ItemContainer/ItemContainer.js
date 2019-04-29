import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import {createStructuredSelector} from 'reselect/lib/index'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchingSelector} from '../../store/selectors/itemSelector'

import {item} from '../../store/actions'
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation'
import HandleError from '../../hocs/handleError'

class ItemContainer extends Component {
  static propTypes = {
    itemId: PropTypes.string,
    fetching: PropTypes.bool,
    loadOne: PropTypes.func.isRequired
  }

  static defaultProps = {
    itemId: '',
    fetching: false
  }

  constructor (props) {
    super(props)
    this.state = {
      item: {
        title: '',
        body: ''
      }
    }
  }

  componentDidMount () {
    const {itemId, loadOne} = this.props
    loadOne(itemId)
    this.setState({item: {title: item.title}})
  }

  onChangeInput (e) {
    this.setState({item: {title: e.target.value}})
  }

  saveItem () {
    const {item} = this.state
    item.save(item)
  }

  render () {
    const {itemId, fetching} = this.props
    const {item} = this.state
    return (
      <div className="container-fluid">
        <Link to="/">Back</Link>
        <h1>
          Item id #
          {itemId}
        </h1>
        <div className="row">
          <div className="col-12">
            <div className="item-container">
              <div className="mb-3">
                <input
                  type="text"
                  value={item.title}
                  className="form-control"
                  placeholder="Title"
                  aria-label="Item"
                  aria-describedby="Item"
                  onChange={this.onChangeInput.bind(this)}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    disabled={!item.title}
                    onClick={this.saveItem.bind(this)}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {fetching && <LoadingAnimation/>}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  fetching: fetchingSelector()
})

const mapDispatchToProps = {
  loadOne: item.requestOne
}

export default compose(
  HandleError,
  connect(mapStateToProps, mapDispatchToProps)
)(ItemContainer)

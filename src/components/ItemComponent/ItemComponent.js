import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

const EditButton = withRouter(({itemId, history}) => (
  <button type="button" className="btn btn-warning" onClick={() => { history.push(`/item/${itemId}`) }}>
    Edit
  </button>
))

const ItemComponent = props => {
  const {item} = props
  return (
    <div className="item-data">
      <div className="card">
        <div className="card-header">
          <h4>{item.title}</h4>
          <div className="btn-group btn-group-sm" role="group" aria-label="Item actions">
            <EditButton itemId={item.id}/>
            <button type="button" className="btn btn-danger">
              Remove
            </button>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">
            {item.body}
          </p>
        </div>
      </div>
    </div>
  )
}

ItemComponent.propTypes = {
  item: PropTypes.object.isRequired
}

export default ItemComponent

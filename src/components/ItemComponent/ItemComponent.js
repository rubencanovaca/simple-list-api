import React from 'react'
import PropTypes from 'prop-types'

const ItemComponent = props => {
  const {item} = props
  return (
    <div className="item-data">
      <div className="card">
        <div className="card-header">
          <h4>{item.title}</h4>
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

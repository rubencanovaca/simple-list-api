import React from 'react'
import PropTypes from 'prop-types'

import ItemComponent from '../ItemComponent/ItemComponent'

const ListComponent = props => {
  const {data} = props
  return (
    <div className="list-data">
      {data.map(item => <ItemComponent item={item} key={item.id}/>)}
    </div>
  )
}

ListComponent.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
}

export default ListComponent

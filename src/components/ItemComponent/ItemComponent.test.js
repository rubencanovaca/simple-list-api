import React from 'react'
import {shallow} from 'enzyme/build'
import ItemComponent from './ItemComponent'

describe('<ItemComponent/>', () => {
  it('should render', () => {
    const wrapper = shallow(<ItemComponent/>)
    expect(wrapper)
      .toBeDefined()
  })
})

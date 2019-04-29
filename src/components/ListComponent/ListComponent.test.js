import React from 'react'
import {shallow} from 'enzyme/build'
import ListComponent from './ListComponent'

describe('<ListComponent/>', () => {
  it('should render', () => {
    const wrapper = shallow(<ListComponent/>)
    expect(wrapper)
      .toBeDefined()
  })
})

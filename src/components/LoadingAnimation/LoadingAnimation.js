import React from 'react'
import './LoadingAnimation.scss'
import image from '../../assets/images/loading-animation.svg'

const ExampleCompnonent = () => (
  <div className="loading-animation">
    <div className="loader-icon">
      <img src={image} alt="Loading..."/>
    </div>
  </div>
)

export default ExampleCompnonent

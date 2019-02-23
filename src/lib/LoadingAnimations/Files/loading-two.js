import React from 'react'
import propTypes from 'prop-types'

const icon = (props) => {
  return (
    <g>
      <circle cx='24.5' cy='62.5' r='6' fill={props.animationFill ? props.animationFill[0] : '#e15b64'}>
        <animate attributeName='cy' calcMode='spline' keySplines='0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5' repeatCount='indefinite' values='62.5;37.5;62.5;62.5' keyTimes='0;0.25;0.5;1' dur='1s' begin='-0.5s' />
      </circle>
      <circle cx='41.5' cy='62.5' r='6' fill={props.animationFill ? props.animationFill[1] : '#f47e60'}>
        <animate attributeName='cy' calcMode='spline' keySplines='0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5' repeatCount='indefinite' values='62.5;37.5;62.5;62.5' keyTimes='0;0.25;0.5;1' dur='1s' begin='-0.375s' />
      </circle>
      <circle cx='58.5' cy='62.5' r='6' fill={props.animationFill ? props.animationFill[2] : '#f8b26a'}>
        <animate attributeName='cy' calcMode='spline' keySplines='0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5' repeatCount='indefinite' values='62.5;37.5;62.5;62.5' keyTimes='0;0.25;0.5;1' dur='1s' begin='-0.25s' />
      </circle>
      <circle cx='75.5' cy='53.0362' r='6' fill={props.animationFill ? props.animationFill[3] : '#abbd81'}>
        <animate attributeName='cy' calcMode='spline' keySplines='0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5' repeatCount='indefinite' values='62.5;37.5;62.5;62.5' keyTimes='0;0.25;0.5;1' dur='1s' begin='-0.125s' />
      </circle>
    </g>
  )
}

icon.propTypes = {
  animationFill: propTypes.array
}

export default icon

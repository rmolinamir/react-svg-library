import React from 'react'
import propTypes from 'prop-types'

const icon = (props) => {
  return (
    <g>
      <g transform='translate(10 50)'>
        <circle cx='0' cy='0' r='10' fill={props.animationFill ? props.animationFill[0] : '#FFCC80'} transform='scale(0.842474 0.842474)'>
          <animateTransform attributeName='transform' type='scale' begin='-0.375s' calcMode='spline' keySplines='0.3 0 0.7 1;0.3 0 0.7 1' values='0;1;0' keyTimes='0;0.5;1' dur='1s' repeatCount='indefinite' />
        </circle>
      </g>
      <g transform='translate(36.67 50)'>
        <circle cx='0' cy='0' r='10' fill={props.animationFill ? props.animationFill[1] : '#FFA726'} transform='scale(0.512362 0.512362)'>
          <animateTransform attributeName='transform' type='scale' begin='-0.25s' calcMode='spline' keySplines='0.3 0 0.7 1;0.3 0 0.7 1' values='0;1;0' keyTimes='0;0.5;1' dur='1s' repeatCount='indefinite' />
        </circle>
      </g>
      <g transform='translate(63.34 50)'>
        <circle cx='0' cy='0' r='10' fill={props.animationFill ? props.animationFill[2] : '#FB8C00'} transform='scale(0.176231 0.176231)'>
          <animateTransform attributeName='transform' type='scale' begin='-0.125s' calcMode='spline' keySplines='0.3 0 0.7 1;0.3 0 0.7 1' values='0;1;0' keyTimes='0;0.5;1' dur='1s' repeatCount='indefinite' />
        </circle>
      </g>
      <g transform='translate(90 50)'>
        <circle cx='0' cy='0' r='10' fill={props.animationFill ? props.animationFill[3] : '#FFB080'} transform='scale(0.000202672 0.000202672)'>
          <animateTransform attributeName='transform' type='scale' begin='0s' calcMode='spline' keySplines='0.3 0 0.7 1;0.3 0 0.7 1' values='0;1;0' keyTimes='0;0.5;1' dur='1s' repeatCount='indefinite' />
        </circle>
      </g>
    </g>
  )
}

icon.propTypes = {
  animationFill: propTypes.array
}

export default icon

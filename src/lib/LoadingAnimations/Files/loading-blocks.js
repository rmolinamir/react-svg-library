import React from 'react'
import propTypes from 'prop-types'

const icon = (props) => {
  return (
    <g>
      <rect ng-attr-fill='{{config.c1}}' ng-attr-x='{{config.x}}' ng-attr-y='{{config.x}}' ng-attr-width='{{config.w}}' ng-attr-height='{{config.w}}' ng-attr-rx='{{config.radius}}' ng-attr-ry='{{config.radius}}' fill={props.animationFill ? props.animationFill[0] : '#ff7c81'} x='21.5' y='21.5' width='25' height='25' rx='3' ry='3'>
        <animate attributeName='x' calcMode='linear' values='21.5;53.5;53.5;53.5;53.5;21.5;21.5;21.5;21.5' keyTimes='0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1' dur='1.5' begin='-1.375s' repeatCount='indefinite' />
        <animate attributeName='y' calcMode='linear' values='21.5;53.5;53.5;53.5;53.5;21.5;21.5;21.5;21.5' keyTimes='0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1' dur='1.5' begin='-1s' repeatCount='indefinite' />
      </rect>
      <rect ng-attr-fill='{{config.c2}}' ng-attr-x='{{config.x}}' ng-attr-y='{{config.x}}' ng-attr-width='{{config.w}}' ng-attr-height='{{config.w}}' ng-attr-rx='{{config.radius}}' ng-attr-ry='{{config.radius}}' fill={props.animationFill ? props.animationFill[1] : '#ffec58'} x='21.5' y='53.5' width='25' height='25' rx='3' ry='3'>
        <animate attributeName='x' calcMode='linear' values='21.5;53.5;53.5;53.5;53.5;21.5;21.5;21.5;21.5' keyTimes='0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1' dur='1.5' begin='-0.875s' repeatCount='indefinite' />
        <animate attributeName='y' calcMode='linear' values='21.5;53.5;53.5;53.5;53.5;21.5;21.5;21.5;21.5' keyTimes='0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1' dur='1.5' begin='-0.5s' repeatCount='indefinite' />
      </rect>
      <rect ng-attr-fill='{{config.c3}}' ng-attr-x='{{config.x}}' ng-attr-y='{{config.x}}' ng-attr-width='{{config.w}}' ng-attr-height='{{config.w}}' ng-attr-rx='{{config.radius}}' ng-attr-ry='{{config.radius}}' fill={props.animationFill ? props.animationFill[2] : '#7cd7ff'} x='53.5' y='42.919' width='25' height='25' rx='3' ry='3'>
        <animate attributeName='x' calcMode='linear' values='21.5;53.5;53.5;53.5;53.5;21.5;21.5;21.5;21.5' keyTimes='0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1' dur='1.5' begin='-0.375s' repeatCount='indefinite' />
        <animate attributeName='y' calcMode='linear' values='21.5;53.5;53.5;53.5;53.5;21.5;21.5;21.5;21.5' keyTimes='0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1' dur='1.5' begin='0s' repeatCount='indefinite' />
      </rect>
    </g>
  )
}

icon.propTypes = {
  animationFill: propTypes.array
}

export default icon

import React from 'react'
import propTypes from 'prop-types'

const icon = (props) => {
  return (
    <g>
      <defs>
        <clipPath id='ratingPath'>
          <path stroke='null' d='m99.50955,37.57049c0.94362,2.93569 0.20969,5.24231 -2.09692,7.02469l-23.70571,18.04402l9.12161,29.3674c1.15331,4.089 -1.88723,7.86346 -5.66169,7.86346c-1.25815,0 -2.41146,-0.41938 -3.45992,-1.25815l-23.70571,-18.03353l-23.70571,18.04402c-2.62115,1.78238 -6.18592,1.25815 -8.178,-1.25815c-1.25815,-1.67754 -1.57269,-3.45992 -0.83877,-5.34715l9.01677,-29.1577l-23.81055,-18.26419c-2.20177,-1.78238 -2.93569,-4.089 -1.99208,-7.02469c0.83877,-2.51631 3.04054,-4.19384 5.452,-4.19384l29.3674,0l9.12161,-29.1577c0.73392,-2.41146 2.93569,-4.089 5.452,-4.089c2.62115,0 4.92777,1.78238 5.66169,4.29869l9.12161,28.94801l29.3674,0c2.43243,0 4.6342,1.67754 5.47297,4.19384z' />
        </clipPath>
      </defs>
      <rect x='0' y='0' fill='rgb(217,217,217)' width='100%' height='100%' clipPath='url(#ratingPath)' />
      <rect x='0' y='0%' fill={props.fill} width={props.clipPathFill ? `${props.clipPathFill * 100}%` : '100%'} height='100%' clipPath='url(#ratingPath)' />
    </g>
  )
}

icon.propTypes = {
  fill: propTypes.string,
  clipPathFill: propTypes.number
}

export default icon

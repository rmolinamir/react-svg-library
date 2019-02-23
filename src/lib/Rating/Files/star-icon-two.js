import React from 'react'
import propTypes from 'prop-types'

const icon = (props) => {
  return (
    <g>
      <clipPath id='starRatingPath'>
        <path stroke='null' d='m54.81748,5.28241l11.2543,22.80417c0.78262,1.58605 2.29582,2.68505 4.0463,2.93898l25.1666,3.65708c4.40847,0.64108 6.16728,6.05697 2.97853,9.16455l-18.21045,17.75045c-1.26551,1.23429 -1.84415,3.01391 -1.54442,4.75607l4.29816,25.06461c0.75348,4.38974 -3.85481,7.73668 -7.79705,5.66566l-22.50861,-11.83294c-1.56524,-0.82217 -3.43644,-0.82217 -5.00168,0l-22.50861,11.83294c-3.94223,2.07311 -8.55052,-1.27592 -7.79705,-5.66566l4.29816,-25.06461c0.29973,-1.74216 -0.27891,-3.52178 -1.54442,-4.75607l-18.21045,-17.75045c-3.18875,-3.10966 -1.42994,-8.52555 2.97853,-9.16455l25.1666,-3.65708c1.75048,-0.25393 3.26369,-1.35293 4.0463,-2.93898l11.2543,-22.80417c1.96903,-3.99427 7.66383,-3.99427 9.63495,0z' fill='#ED8A19' />
      </clipPath>
      <rect x='0' y='0' fill='rgb(217,217,217)' width='100%' height='100%' clipPath='url(#starRatingPath)' />
      <rect x='0' y='0%' fill={props.fill} width={props.clipPathFill ? `${props.clipPathFill * 100}%` : '100%'} height='100%' clipPath='url(#starRatingPath)' />
    </g>
  )
}

icon.propTypes = {
  fill: propTypes.string,
  clipPathFill: propTypes.number
}

export default icon
import React from 'react'
import propTypes from 'prop-types'

const mountainMeadow = (props) => {
  return (
    <svg
      className={props.className}
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 210 20'
      width='210'
      height='20'
      style={{ fill: 'transparent' }}>
      <defs>
        <path d='' id='b6XFDCkjKV' />
        <path d='M45.17 16.5C153.27 4.18 206.19 0.97 203.93 6.86C201.66 12.75 135.02 13.02 4 7.66' id='aoEHCql77' />
      </defs>
      <g>
        <g>
          <g>
            <g>
              <use xlinkHref='#b6XFDCkjKV' opacity='1' floodColor='0' stroke='#000000' strokeWidth='1' strokeOpacity='1' />
            </g>
          </g>
          <g>
            <g>
              <filter id='shadow8138377' x='-7' y='-7' width='223' height='35.5' filterUnits='userSpaceOnUse' primitiveUnits='userSpaceOnUse'>
                <feFlood />
                <feComposite in2='SourceAlpha' operator='in' />
                <feGaussianBlur stdDeviation='1.41' />
                <feOffset dx='1' dy='1' result='afterOffset' />
                <feFlood floodColor='#021d17' floodOpacity='0.5' />
                <feComposite in2='afterOffset' operator='in' />
                <feMorphology operator='dilate' radius='1' />
                <feComposite in2='SourceAlpha' operator='out' />
              </filter>
              <path d='M45.17 16.5C153.27 4.18 206.19 0.97 203.93 6.86C201.66 12.75 135.02 13.02 4 7.66' id='hDO2nCzzF' fill='none' stroke='white' filter='url(#shadow8138377)' />
            </g>
            <use xlinkHref='#aoEHCql77' opacity='1' fill={props.color ? props.color : '#23bd99'} floodColor='0' />
            <g>
              <use xlinkHref='#aoEHCql77' opacity='1' floodColor='0' stroke={props.color ? props.color : '#23bd99'} strokeWidth='5' strokeOpacity='1' />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

mountainMeadow.propTypes = {
  className: propTypes.className,
  color: propTypes.string
}

export default mountainMeadow

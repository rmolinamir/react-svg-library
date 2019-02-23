import React from 'react'
import propTypes from 'prop-types'

const porsche = (props) => {
  return (
    <svg
      className={props.className}
      preserveAspectRatio='xMidYMid meet'
      viewBox='0 0 210 20'
      width='210'
      height='20'
      style={{ fill: 'transparent' }}>
      <defs>
        <path d='M204.08 9.74L5.92 3.76' id='afkMHwf1' />
        <path d='M204.08 9.74L5.92 3.76' id='a1OZ0VaYdH' />
        <path d='M137.19 16.24L20.63 16.24' id='c2jT5fuRj7' />
        <path d='M137.19 16.24L20.63 16.24' id='c3vjduC9DT' />
      </defs>
      <g>
        <g>
          <g>
            <g>
              <filter id='shadow1422002' x='-3.08' y='-5.24' width='217.15' height='24.98' filterUnits='userSpaceOnUse' primitiveUnits='userSpaceOnUse'>
                <feFlood />
                <feComposite in2='SourceAlpha' operator='in' />
                <feGaussianBlur stdDeviation='1' />
                <feOffset dx='1' dy='1' result='afterOffset' />
                <feFlood floodColor='#000000' floodOpacity='0.5' />
                <feComposite in2='afterOffset' operator='in' />
                <feMorphology operator='dilate' radius='1' />
                <feComposite in2='SourceAlpha' operator='out' />
              </filter>
              <path d='M204.08 9.74L5.92 3.76' id='cr8nYfe24' fill='none' stroke='white' filter='url(#shadow1422002)' />
            </g>
            <use xlinkHref='#afkMHwf1' opacity='1' fill={props.color ? props.color : '#e4ab5c'} floodColor='1' />
            <g>
              <use xlinkHref='#afkMHwf1' opacity='1' floodColor='0' stroke='#000000' strokeWidth='1' strokeOpacity='0' />
            </g>
          </g>
          <g>
            <g>
              <filter id='shadow1850732' x='-3.08' y='-5.24' width='217.15' height='24.98' filterUnits='userSpaceOnUse' primitiveUnits='userSpaceOnUse'>
                <feFlood />
                <feComposite in2='SourceAlpha' operator='in' />
                <feGaussianBlur stdDeviation='1' />
                <feOffset dx='1' dy='1' result='afterOffset' />
                <feFlood floodColor='#000000' floodOpacity='0.5' />
                <feComposite in2='afterOffset' operator='in' />
                <feMorphology operator='dilate' radius='1' />
                <feComposite in2='SourceAlpha' operator='out' />
              </filter>
              <path d='M204.08 9.74L5.92 3.76' id='a1qfM4LZkf' fill='none' stroke='white' filter='url(#shadow1850732)' />
            </g>
            <use xlinkHref='#a1OZ0VaYdH' opacity='1' fill='#000000' floodColor='0' />
            <g>
              <use xlinkHref='#a1OZ0VaYdH' opacity='1' floodColor='0' stroke={props.color ? props.color : '#e4ab5c'} strokeWidth='6' strokeOpacity='1' />
            </g>
          </g>
          <g>
            <use xlinkHref='#c2jT5fuRj7' opacity='1' fill={props.color ? props.color : '#e4ab5c'} floodColor='1' />
            <g>
              <use xlinkHref='#c2jT5fuRj7' opacity='1' floodColor='0' stroke='#000000' strokeWidth='1' strokeOpacity='0' />
            </g>
          </g>
          <g>
            <g>
              <filter id='shadow8307089' x='11.63' y='7.24' width='135.56' height='19' filterUnits='userSpaceOnUse' primitiveUnits='userSpaceOnUse'>
                <feFlood />
                <feComposite in2='SourceAlpha' operator='in' />
                <feGaussianBlur stdDeviation='1' />
                <feOffset dx='1' dy='1' result='afterOffset' />
                <feFlood floodColor='#000000' floodOpacity='0.5' />
                <feComposite in2='afterOffset' operator='in' />
                <feMorphology operator='dilate' radius='1' />
                <feComposite in2='SourceAlpha' operator='out' />
              </filter>
              <path d='M137.19 16.24L20.63 16.24' id='b2Ho68ayZI' fill='none' stroke='white' filter='url(#shadow8307089)' />
            </g>
            <use xlinkHref='#c3vjduC9DT' opacity='1' fill='#000000' floodColor='0' />
            <g>
              <use xlinkHref='#c3vjduC9DT' opacity='1' floodColor='0' stroke={props.color ? props.color : '#e4ab5c'} strokeWidth='5' strokeOpacity='1' />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

porsche.propTypes = {
  className: propTypes.className,
  color: propTypes.string
}

export default porsche

import React from 'react'
import propTypes from 'prop-types'

const cabaret = (props) => {
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
        <path d='M8.73 7.55C21.97 0.75 86.78 1.58 203.16 10.05' id='e2CTDBi7bz' />
        <path d='M111.67 9.2C36.75 11.61 2.44 11.06 8.73 7.55' id='a5NBaZN2E' />
        <path d='M63.89 16.77C11.63 17.87 27.56 15.31 111.67 9.11' id='b3XXgroJP' />
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
              <filter id='shadow12775770' x='-0.27' y='-6' width='213.43' height='26.05' filterUnits='userSpaceOnUse' primitiveUnits='userSpaceOnUse'>
                <feFlood />
                <feComposite in2='SourceAlpha' operator='in' />
                <feGaussianBlur stdDeviation='1' />
                <feOffset dx='1' dy='1' result='afterOffset' />
                <feFlood floodColor='#000000' floodOpacity='0.5' />
                <feComposite in2='afterOffset' operator='in' />
                <feMorphology operator='dilate' radius='1' />
                <feComposite in2='SourceAlpha' operator='out' />
              </filter>
              <path d='M8.73 7.55C21.97 0.75 86.78 1.58 203.16 10.05' id='cuvHqXkn5' fill='none' stroke='white' filter='url(#shadow12775770)' />
            </g>
            <g>
              <use xlinkHref='#e2CTDBi7bz' opacity='1' floodColor='0' stroke={props.color ? props.color : '#d84768'} strokeWidth='2' strokeOpacity='1' />
            </g>
          </g>
          <g>
            <g>
              <filter id='shadow6445638' x='-1' y='-1.45' width='122.67' height='22.12' filterUnits='userSpaceOnUse' primitiveUnits='userSpaceOnUse'>
                <feFlood />
                <feComposite in2='SourceAlpha' operator='in' />
                <feGaussianBlur stdDeviation='1' />
                <feOffset dx='1' dy='1' result='afterOffset' />
                <feFlood floodColor='#000000' floodOpacity='0.5' />
                <feComposite in2='afterOffset' operator='in' />
                <feMorphology operator='dilate' radius='1' />
                <feComposite in2='SourceAlpha' operator='out' />
              </filter>
              <path d='M111.67 9.2C36.75 11.61 2.44 11.06 8.73 7.55' id='a5FujJ6tW' fill='none' stroke='white' filter='url(#shadow6445638)' />
            </g>
            <g>
              <use xlinkHref='#a5NBaZN2E' opacity='1' floodColor='0' stroke={props.color ? props.color : '#d84768'} strokeWidth='2' strokeOpacity='1' />
            </g>
          </g>
          <g>
            <g>
              <use xlinkHref='#b3XXgroJP' opacity='1' floodColor='0' stroke={props.color ? props.color : '#d84768'} strokeWidth='2' strokeOpacity='1' />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

cabaret.propTypes = {
  className: propTypes.className,
  color: propTypes.string
}

export default cabaret

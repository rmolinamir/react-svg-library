import React from 'react'
import propTypes from 'prop-types'
// JSX
import Cabaret from './Files/cabaret'
import CuriousBlue from './Files/curious-blue'
import Indigo from './Files/indigo'
import MountainMeadow from './Files/mountainmeadow'
import Porsche from './Files/porsche'

const underlinesObj = {
  Cabaret,
  CuriousBlue,
  Indigo,
  MountainMeadow,
  Porsche
}

const Underline = (props) => {
  const getRandomUnderline = (underlinesObj) => {
    const keys = Object.keys(underlinesObj)
    return underlinesObj[keys[keys.length * Math.random() << 0]]
  }

  const randomColor = getRandomColor(10, 4)

  return (
    <div
      style={{
        width: '100%',
        height: 'auto',
        ...props.style
      }}>
      {getRandomUnderline(underlinesObj)({ className: props.className, color: props.color ? props.color : randomColor })}
    </div>
  )
}

Underline.propTypes = {
  className: propTypes.any,
  color: propTypes.string,
  style: propTypes.object
}

/**
 * Light colors generator.
 */
const getRandomColor = () => {
  const letters = '890ABCDEF'.split('')
  let color = '#'
  for (let i = 0; i < 3; i++) {
    color += letters[Math.floor(Math.random() * letters.length)]
  }
  return color
}

export default React.memo(Underline)

import React from 'react'
import propTypes from 'prop-types'
// JSX
import Cabaret from './Files/cabaret'
import CuriousBlue from './Files/curious-blue'
import Indigo from './Files/indigo'
import MountainMeadow from './Files/mountainmeadow'
import Porsche from './Files/porsche'

const underlinesObj = {
  'cabaret': Cabaret,
  'curious-blue': CuriousBlue,
  'indigo': Indigo,
  'mountainmeadow': MountainMeadow,
  'porsche': Porsche
}

const Underline = (props) => {
  const getRandomUnderline = () => {
    /**
     * Keys array
     */
    const keys = Object.keys(underlinesObj)
    const randomKey = keys[keys.length * Math.random() << 0]
    const Underline = underlinesObj[randomKey]
    return Underline
  }

  /**
   * Gets a specific underline passed down by a prop.
   */
  const getUnderline = (underline) => {
    return underlinesObj[underline]
  }

  const Underline = () => {
    if (props.underline) {
      const Underline = underlinesObj[props.underline]
      if (!Underline) { // Prevents error crashing.
        console.error('No underline matches your query.')
        return null
      }
      /**
       * Colors for a specific underline will only be randomly generated if the randomColor bool prop
       * is passed, otherwise fall back to the default color. The developer may pass a specific color
       * as well through the props.
       */
      const color = { color: props.color ? props.color : (props.randomColor ? getRandomColor() : null) }
      return getUnderline(props.underline)({ className: props.className, ...color })
      // return null
    } else {
      const color = { color: props.color ? props.color : getRandomColor() }
      return getRandomUnderline()({ className: props.className, ...color })
    }
  }

  return (
    <div
      style={{
        width: '100%',
        height: 'auto',
        display: 'inline-flex',
        justifyContent: 'center',
        ...props.style
      }}>
      <Underline />
    </div>
  )
}

Underline.propTypes = {
  className: propTypes.any,
  color: propTypes.string,
  // Enables random color generation on specific underlines.
  randomColor: propTypes.bool,
  style: propTypes.object,
  underline: propTypes.string
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

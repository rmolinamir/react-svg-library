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
    /**
     * If there is a specific underline.
     */
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
      const color = { color: props.color ? props.color : (props.randomColor | props.pastelIndex) && getRandomColor(props.pastelIndex) }
      return getUnderline(props.underline)({ className: props.className, ...color })
    } else {
      const color = { color: props.color ? props.color : getRandomColor(props.pastelIndex) }
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
  pastelIndex: propTypes.pastelIndex,
  randomColor: propTypes.bool,
  style: propTypes.object,
  underline: propTypes.string
}

/**
 * Pastel palette colors generator.
 * Based on:
 * **`[Random color generator](https://stackoverflow.com/questions/1484506/random-color-generator)`**
 */
export const getRandomColor = (pastelIndex = 2.5) => {
  // Six levels of pastelIndex from 0 to 5, 0 being the darkest.
  const rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256]
  const mix = [pastelIndex * 51, pastelIndex * 51, pastelIndex * 51] // 51 => 255/5
  const mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map((x) => { return Math.round(x / 2.0) })
  return 'rgb(' + mixedrgb.join(',') + ')'
}

export default React.memo(Underline)

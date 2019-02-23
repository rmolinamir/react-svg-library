import React, { Suspense, useState, lazy } from 'react'
import propTypes from 'prop-types'
// JSX
import Account from './Account'
import Address from './Address'
import BulletItems from './BulletItems'
import Communication from './Communication'
import Companies from './Companies'
import Dates from './Dates'
import General from './General'
import ImageUpload from './ImageUpload'
import LoadingAnimations from './LoadingAnimations'
import MathRelated from './MathRelated'
import Navigation from './Navigation'
import Rating from './Rating'
import Shapes from './Shapes'
import SocialMedia from './SocialMedia'
import Technologies from './Technologies'
import UserInteraction from './UserInteraction'

const svgKeys = {
  ...Account,
  ...BulletItems,
  ...Address,
  ...Communication,
  ...Companies,
  ...Dates,
  ...General,
  ...ImageUpload,
  ...LoadingAnimations,
  ...MathRelated,
  ...Navigation,
  ...Rating,
  ...Shapes,
  ...SocialMedia,
  ...Technologies,
  ...UserInteraction
}

const Icon = (props) => {
  const [bIsNotFound, setIsNotFound] = useState(false)
  const svgSize = props.size || '1em'
  let className; if (props.className) { className = props.className };

  /**
   * Custom props for SVG icons with animations or gradient colors.
   */
  const { ...svgProps } = props

  const DynamicLoader = () => {
    const LazyComponent = svgKeys[props.icon]
    /**
     * If no component was found between props, then return null and set state to not found.
     */
    if (!LazyComponent) {
      console.error('No SVG was found that match your query.')
      setIsNotFound(true)
      return null
    }
    return (
      <Suspense fallback={<i />}>
        <LazyComponent
          {...svgProps} />
      </Suspense>
    )
  }

  if (bIsNotFound) { return null }

  return (
    <svg
      fill={props.fill ? props.fill : 'currentColor'}
      stroke={props.fill ? props.stroke : 'currentColor'}
      strokeWidth={props.fill ? props.strokeWidth : '0'}
      className={className}
      style={{ color: props.color, ...props.style }}
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
      height={svgSize}
      width={svgSize}>
      <DynamicLoader
        icon={props.icon} />
    </svg>
  )
}

Icon.propTypes = {
  className: propTypes.any,
  size: propTypes.string,
  color: propTypes.string,
  children: propTypes.element,
  style: propTypes.object,
  fill: propTypes.string,
  stroke: propTypes.number,
  strokeWidth: propTypes.string,
  icon: propTypes.string.isRequired,
  /**
   * Custom props for SVG icons with clipPaths, animations or gradient colors.
   */
  gradient: propTypes.array,
  animationFill: propTypes.array,
  clipPathFill: propTypes.number // Number from 0 to 1.
}

const SVG = (props) => {
  return <Icon {...props} />
}

const Underlines = lazy(() => import('./Underlines'))

export const Underline = (props) => <Suspense fallback={<i />}><Underlines {...props} /></Suspense>

export default React.memo(SVG)

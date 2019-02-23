import React, { Suspense, lazy } from 'react'
import propTypes from 'prop-types'
// import * as General from './General'
// import * as Rating from './Rating'
import SocialMedia from './SocialMedia'
// import * as Contact from './Contact'

const Underlines = lazy(() => import('./Underlines'))

export const Underline = () => <Suspense fallback={<h1>LOADING</h1>}><Underlines /></Suspense>

const SVG = (props) => {
  let svg = null
  /**
   * Switch statement that 'picks' the respective SVG file depending on the props.svg passed.
   */
  switch (props.svg) {
    // case 'right-arrow':
    //   svg = <General.rightArrow {...props} />
    //   break
    // case 'tools':
    //   svg = <General.tools {...props} />
    //   break
    // case 'loading':
    //   svg = <General.loading {...props} />
    //   break
    // case 'checkmark':
    //   svg = <General.checkmark {...props} />
    //   break
    // case 'checkmark-nobg':
    //   svg = <General.checkmarkNoBg {...props} />
    //   break
    // case 'typing':
    //   svg = <General.typing {...props} />
    //   break
    // case 'star':
    //   svg = <Rating.star {...props} />
    //   break
    // case 'currency':
    //   svg = <Rating.currency {...props} />
    //   break
    // case 'share':
    //   svg = <General.share {...props} />
    //   break
    // case 'favorite':
    //   svg = <General.favorite {...props} />
    //   break
    // case 'location-pin':
    //   svg = <General.locationPin {...props} />
    //   break
    // case 'chat':
    //   svg = <General.chat {...props} />
    //   break
    // case 'cancel':
    //   svg = <General.cancel {...props} />
    //   break
    // case 'menu':
    //   svg = <General.menu {...props} />
    //   break
    // case 'user':
    //   svg = <General.user {...props} />
    //   break
    // case 'private':
    //   svg = <General.privateInfo {...props} />
    //   break
    // case 'single-image':
    //   svg = <General.singleImage {...props} />
    //   break
    // case 'multi-image':
    //   svg = <General.multiImage {...props} />
    //   break
    // case 'delete':
    //   svg = <General.deleteIcon {...props} />
    //   break
    // case 'delivery-truck':
    //   svg = <General.deliveryTruck {...props} />
    //   break
    // case 'website':
    //   svg = <General.website {...props} />
    //   break
    // case 'question-mark':
    //   svg = <General.questionMark {...props} />
    //   break
    // case 'phone':
    //   svg = <General.phone {...props} />
    //   break
    // case 'envelope':
    //   svg = <General.envelope {...props} />
    //   break
    // case 'sent-envelope':
    //   svg = <General.sentEnvelope {...props} />
    //   break
    // case 'flag':
    //   svg = <General.flag {...props} />
    //   break
    // case 'applestore':
    //   svg = <General.applestore {...props} />
    //   break
    // case 'playstore':
    //   svg = <General.playstore {...props} />
    // break
    // Social Media Icons
    case 'facebook':
      svg = <SocialMedia.Facebook {...props} />
      break
    case 'facebook-nobg':
      svg = <SocialMedia.FacebookNoBg {...props} />
      break
    case 'google-nobg':
      svg = <SocialMedia.GoogleNoBg {...props} />
      break
    case 'instagram':
      svg = <SocialMedia.Instagram {...props} />
      break
    // Contact us
    // case 'my-account':
    //   svg = <Contact.myAccount />
    //   break
    // case 'other':
    //   svg = <Contact.other />
    //   break
    // case 'security':
    //   svg = <Contact.security />
    //   break
    // case 'service-post':
    //   svg = <Contact.servicePost />
    //   break
    default:
      console.error('No SVG was found that match your query.')
  }
  return <Suspense fallback={<h1>LOADING</h1>}>{svg}</Suspense>
}

SVG.propTypes = {
  svg: propTypes.string
}

export default SVG

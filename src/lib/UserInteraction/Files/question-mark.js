import React from 'react'
import propTypes from 'prop-types'

const icon = (props) => {
  return (
    <g stroke='null'>
      <path stroke='null' d='m99.93165,50.00121c0,-27.57885 -22.35521,-49.93225 -49.93084,-49.93225c-27.57704,0 -49.93245,22.3534 -49.93245,49.93225c0,27.57463 22.35541,49.92984 49.93245,49.92984c27.57563,0 49.93084,-22.35521 49.93084,-49.92984z' fill={props.fill ? props.fill : 'currentColor'} />
      <path stroke='null' d='m27.88752,35.00777c0,-2.80072 0.89909,-5.63867 2.69766,-8.51325c1.79797,-2.87458 4.42258,-5.25524 7.87199,-7.14238c3.44962,-1.88653 7.47408,-2.8303 12.07337,-2.8303c4.27464,0 8.04891,0.78919 11.32162,2.36597c3.2727,1.57758 5.80029,3.72255 7.58458,6.4347c1.78348,2.71296 2.67552,5.66081 2.67552,8.84495c0,2.50625 -0.50862,4.70315 -1.52585,6.58948c-1.01723,1.88714 -2.22648,3.51604 -3.62654,4.88671c-1.40066,1.37107 -3.91396,3.67827 -7.5403,6.92138c-1.00254,0.91418 -1.80643,1.71787 -2.41025,2.41045c-0.60462,0.69298 -1.05447,1.32679 -1.34893,1.90143c-0.29507,0.57504 -0.52391,1.14987 -0.68554,1.72491c-0.16243,0.57463 -0.40557,1.58503 -0.72962,3.02936c-0.56034,3.0666 -2.31484,4.59949 -5.26269,4.59949c-1.5333,0 -2.82346,-0.50097 -3.86968,-1.50371c-1.04682,-1.00214 -1.56993,-2.49116 -1.56993,-4.46665c0,-2.47667 0.38282,-4.62163 1.14987,-6.4347c0.76645,-1.81347 1.78348,-3.40554 3.0515,-4.77621c1.26722,-1.37107 2.97764,-2.99978 5.13005,-4.88691c1.88653,-1.65084 3.25056,-2.89672 4.09088,-3.73704c0.84032,-0.84032 1.54779,-1.77583 2.12283,-2.80836c0.57484,-1.03173 0.86246,-2.15181 0.86246,-3.36106c0,-2.35852 -0.87755,-4.34851 -2.63145,-5.97037c-1.7545,-1.62105 -4.01761,-2.43239 -6.78854,-2.43239c-3.24372,0 -5.63182,0.81818 -7.16452,2.45453c-1.5333,1.63635 -2.8303,4.0466 -3.89182,7.23074c-1.00254,3.33208 -2.90437,4.99741 -5.70509,4.99741c-1.65165,0 -3.04466,-0.58188 -4.17924,-1.74685c-1.13498,-1.16457 -1.70237,-2.42494 -1.70237,-3.78132zm21.58172,48.4706c-1.79878,0 -3.36871,-0.58269 -4.70999,-1.74705c-1.34189,-1.16416 -2.01233,-2.79307 -2.01233,-4.88671c0,-1.85755 0.6481,-3.41983 1.94591,-4.68785c1.297,-1.26742 2.88908,-1.90163 4.77621,-1.90163c1.85755,0 3.41983,0.63421 4.68785,1.90163c1.26722,1.26802 1.90163,2.8303 1.90163,4.68785c0,2.06406 -0.6634,3.68571 -1.99019,4.86477c-1.32679,1.17906 -2.85969,1.76899 -4.59909,1.76899z' fill='#FFFFFF' />
    </g>
  )
}

icon.propTypes = {
  fill: propTypes.string
}

export default icon

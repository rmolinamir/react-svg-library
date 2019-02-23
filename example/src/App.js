import React, { useState } from 'react'
// CSS
import './App.css'
// JSX
import { Underline, Icon } from 'lazy-component-test'
import Tooltip from 'react-png-tooltip'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { obsidian as syntaxStyle } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const isArray = (array) => {
  return Array.isArray(array) && array.length
}

const examplesObj = {
  'Account Related': ['account-delivery', 'account-other', 'account-security', 'account-user-three', 'account-user-two', 'account-user'],
  'Address Related': ['location-pin', 'flag'],
  'Bullet Items': ['bullet-checkmark-no-bg', 'bullet-checkmark', 'bullet-star'],
  'Comunication': ['chat', 'envelope', 'phone', 'sent-envelope'],
  'Companies': ['apple', 'google-playstore', 'google', 'linkedin-one', 'linkedin-two'],
  'Dates Related': ['calendar', 'calendar-gradient',
    ['calendar-gradient', { gradient: ['gold', 'crimson'] },
      // Indented to the left due to `` brackets taking in the indentation as spaces. */
      `size='5em' 
  gradient={[
    'lightyellow', 
    'crimson']}`]
  ],
  'General Icons': ['bed', 'delivery-truck', 'more-info', 'private', 'tools', 'under-construction', 'website'],
  'Image Upload': ['single-image', 'multi-image'],
  'Loading Animations': [
    ['loading-one', { size: '5em' }, `size='5em'`],
    ['loading-two', { size: '5em', animationFill: ['indigo', 'indianred', 'gold', 'lightblue'] },
    // Indented to the left due to `` brackets taking in the indentation as spaces. */
      `size='5em' 
  animationFill={[
    'indigo', 
    'indianred', 
    'gold', 
    'lightblue']}`],
    ['loading-blocks', { size: '5em' }, `size='5em'`]
  ],
  'Math Related': ['minus-symbol', 'plus-symbol'],
  'Navigation': ['arrow-down', 'arrow-right', 'menu'],
  'Rating': [
    ['dollar-icon', { fill: '#007791', clipPathFill: 0.5 },
      // Indented to the left due to `` brackets taking in the indentation as spaces. */
      `fill='#007791' 
  clipPathFill={0.5}
  // Pass 0 for no fill,
  // Pass 1 for a completely filled icon.
  `],
    ['star-icon-two', { fill: 'gold', clipPathFill: 0.66 },
      // Indented to the left due to `` brackets taking in the indentation as spaces. */
      `fill='gold' 
  clipPathFill={0.66}
  // Pass 0 for no fill,
  // Pass 1 for a completely filled icon.
  `],
    ['star-icon', { fill: 'gold', clipPathFill: 0.75 },
      // Indented to the left due to `` brackets taking in the indentation as spaces. */
      `fill='gold' 
  clipPathFill={0.75}
  // Pass 0 for no fill,
  // Pass 1 for a completely filled icon.
  `]
  ],
  'Shapes': ['triangle'],
  'Social Media': ['facebook-no-bg', 'facebook', 'gmail', 'instagram', 'share-one', 'share-two'],
  'Technologies': ['cpp', 'css', 'github', 'java', 'javascript', 'mongodb', 'node.js', 'react.js', 'unity-one', 'unity-two', 'unreal-engine'],
  'User Interaction': ['cancel', 'delete',
    ['like', { fill: 'indianred', stroke: 'currentColor', strokeWidth: 5 },
      // Indented to the left due to `` brackets taking in the indentation as spaces. */
      `fill='indianred' 
  stroke={'currentColor'} 
  strokeWidth={5}
  // Looks like a Legend of Zelda 
  // HP heart, doesn't it?
  `],
    ['question-mark', { fill: '#007791' }, `fill='#007791'`]
  ]
}

const example = () => {
  const [bodyTheme, setBodyTheme] = useState('App LightTheme')

  const changeThemeHandler = () => {
    if (bodyTheme === 'App LightTheme') {
      return setBodyTheme('App DarkTheme')
    }
    return setBodyTheme('App LightTheme')
  }

  const examples = Object.keys(examplesObj).map(key => {
    const icons = examplesObj[key].map(example => {
      /**
       * If the example is an array, then it means props are being used and has to be rendered differently.
       */
      if (isArray(example)) {
        return (
          <div className='Example' key={example[0]}>
            <Tooltip
              className='Tooltip'
              tooltip={
                <React.Fragment>
                  <div className='Icon'><Icon icon={example[0]} {...example[1]} /></div>
                  <code className='Code'>{example[0]}</code>
                </React.Fragment>
              }>
              <SyntaxHighlighter language='javascript' style={syntaxStyle}>
                {/* Indented to the left due to `` brackets taking in the indentation as spaces. */}
                {`<Icon 
  icon='${example[0]}'
  ${example[2]} />`}
              </SyntaxHighlighter>
            </Tooltip>
          </div>
        )
      }
      return (
        <div key={example} className='Example'>
          <Tooltip
            className='Tooltip'
            tooltip={
              <React.Fragment>
                <div className='Icon'><Icon icon={example} /></div>
                <code className='Code'>{example}</code>
              </React.Fragment>
            }>
            <SyntaxHighlighter language='javascript' style={syntaxStyle}>{`<Icon icon='${example}' />`}</SyntaxHighlighter>
          </Tooltip>
        </div>
      )
    })
    return (
      <React.Fragment key={key}>
        <h1 style={{margin: '92px 0 36px'}}>{key}</h1>
        <div className='Icons'>
          {icons}
        </div>
        {key === 'Rating'
          ? <p className='Description'>
            The rating SVG icons are a bit different, they have what is known as <strong>clipPath</strong> tags, which allows the developer to partially fill the SVG paths like shown in the examples. And yes, you can control this, hover over the icons to check the examples!
          </p>
          : null}
      </React.Fragment>
    )
  })

  return (
    <div className={bodyTheme}>
      <div className='ThemeHandler'>
        <button className='Button' onClick={changeThemeHandler}>Change Theme</button>
      </div>
      <div className='Title'>
        <div style={{ maxWidth: '600px' }}>
          <h1>React Plug-N'-Go SVG Icons Library</h1>
          <Underline className='Underline' />
        </div>
        <br />
        <div className='Description'>
          <span style={{ marginRight: '1ch' }}>You can hover over the underlines, the icon to the right, and any of the other SVG icons to see code examples,</span>
          <Tooltip
            className='Tooltip'>
            <SyntaxHighlighter language='javascript' style={syntaxStyle}>{`<Underline className='Underline' />`}</SyntaxHighlighter>
          </Tooltip>
          <span style={{ marginLeft: '1ch' }}> - try it out!</span>
          <p>The underlines are also SVG icons that are included in this library pack, they're randomly generated - you may refresh the page to check this feature out.</p>
          <p><strong>You may also change the theme of the website by clicking the top-left button.</strong></p>
          <p><strong>PRO-TIP:</strong> Click the icons to keep the tooltips open.</p>
        </div>
      </div>
      <hr />
      <br />
      {examples}
    </div>
  )
}

export default example

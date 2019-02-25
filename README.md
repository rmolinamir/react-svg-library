# React Plug-N'-Go Scalable Vector Graphics (SVG) icons library

> A React Scalable Vector Graphics (SVG) icons library.

[![NPM](https://img.shields.io/npm/v/react-svg-library.svg)](https://www.npmjs.com/package/react-svg-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-svg-library
```

## Features

1. Really easy to include into your DOM, you can modify them in almost any way to fit your application.
2. Aside from the icons, you can also use Underlines (they are SVG images as well) which can be randomly generated or specific imports, check the showcase and the examples below for more info.

## Props

### Icons

Props                   |         Functionality
-------------           |         -------------
`className`             |         SVG icon CSS class.
`size`                  |         SVG icon size, defaults to `1em`.
`style`                 |         SVG icon CSS styles.
`fill`                  |         SVG icon fill, defaults to `currentColor`.
`stroke`                |         SVG icon stroke, defaults to `currentColor`.
`strokeWidth`           |         SVG icon stroke, defaults to `0`.
`icon`                  |         You may decide which icon to import by using this prop, all of the icons are showcased in the library with their respective names below the icons.
`gradient`              |         Some icons have gradient fills (like the `calendar-gradient`) SVG icon, it is an array of two values, [`startingColor`, `finalColor`], check the showcase `calendar-gradient` for an example.
`animationFill`         |         The loading SVG animations have different paths that can be filled with different colors, you may check the showcase **Loading Animations** section for examples. 
`clipPathFill`          |         The SVG images in the **Rating** section have what are known as `clipPaths`, [more info here about clipPaths](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath). The clipping path restricts the region to which paint can be applied, meaning the SVG image can be partially filled with color. You may check the examples on the showcase for more information.

### Underlines

Props                   |         Functionality
-------------           |         -------------
`className`             |         A class for the **underline SVG icon**.
`style`                 |         CSS styles that is applied to the **div that wraps the underline**, the default style object is: `{ width: '100%', height: 'auto', display: 'inline-flex', justifyContent: 'center', ...props.style }`. Not the spread operator on the props.style, that means that the whole styling won't be reset if you only pass a prop that slightly match the above.
`underline`             |         Instead of random underlines, you can choose which ones you like the most, you may take a look at the showcase to see all of the options.
`color`                 |         Colors for a **specific underline** will only be randomly generated **if the randomColor bool prop is passed as true**, otherwise the colors will fall back to the default color if an underline is specified or to a random color if the underline is also randomly generated. You may take a look at the showcase to see all of the default colors.
`randomColor`           |         Needs to be passed to specific underlines to generate random colors, this prop has no effect on the color if the underline is not specified.

## Showcase

[![Full showcase of all the icons and underlines available.](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/z3o46jyr34)

## Basic Usage

The library can be divided in two categories: icons, and underlines.

### Icons

```jsx
import React, { Component } from 'react'

import { Icon } from 'react-svg-library'

class Example extends Component {
  render () {
    return (
      <Icon icon='website' />
    )
  }
}
```

### Underlines

```jsx
import React, { Component } from 'react'

import { Underline } from 'react-svg-library'

class Example extends Component {
  render () {
    return (
      <Underline />
    )
  }
}
```

### [Check out the showcase for more advanced examples.](https://z3o46jyr34.codesandbox.io/ "Hosted on CodeSandbox")

## License

MIT © [rmolinamir](https://github.com/rmolinamir)

import React from 'react'
import App from 'next/app'
import { Theme } from '../components'
import { Fonts } from '../components'

class MyApp extends App {

  componentDidMount () {
    Fonts()
  }
  
  render() {
    const { Component, pageProps } = this.props

    return (
      <Theme>
        <Component {...pageProps} />
      </Theme>
    )
  }
}

export default MyApp
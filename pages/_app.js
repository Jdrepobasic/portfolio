import React from 'react'
import App from 'next/app'
import { Theme } from '../components'

class MyApp extends App {

  componentDidMount () {
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
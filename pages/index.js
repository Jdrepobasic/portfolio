import React, { Fragment } from 'react'
import Head from 'next/head'
import theme from 'styled-theming';
import { baseTheme }  from '../components'

const textColor = theme('mode', {
  main: baseTheme.colors.primary,
  secondary: baseTheme.colors.secondary,
  contrast: baseTheme.colors.secondary
});

const Home = () => (

  <Fragment>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
  </Fragment>
)

export default Home

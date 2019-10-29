import React, { Fragment } from 'react'
import Head from 'next/head'
import { MainBanner }  from '../components'

const Home = () => (

  <Fragment>
    <Head>
      <title>Jonathan Dean</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <MainBanner/>
  </Fragment>
)

export default Home

import React, { Component } from 'react'
import Link from 'next/link'
import { polyglot } from '../polyglot-modules/polyglot'
import Head from 'next/head'
import en from '../translations/en'
import Layout from '../layouts/Layout'
import Header from '../containers/Header'
import AboutUs from '../containers/AboutUs'
import CaseStudies from '../containers/CaseStudies'
import Collaborate from '../containers/Collaborate'
import Ebooks from '../containers/Ebooks'
import Media from '../containers/Media'
import WhoWeAre from '../containers/WhoWeAre'
import Publications from '../containers/Publications'

class Index extends Component {
  constructor (props) {
    super(props)
    polyglot.extend(en)
  }

  render () {
    return (
      <div>
        <Head>
          <title>Democracia en Red</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" type="text/css" href="/static/flickity.css" />
          <link rel="stylesheet" type="text/css" href="/static/global.css" />
        </Head>
        <Layout>
          <Header />
          <div>
            <Link href="/">
              <a>ES</a>
            </Link>
          </div>
          <AboutUs />
          <CaseStudies />
          <Collaborate />
          <Publications />
          <Ebooks />
          <Media />
          <WhoWeAre />
        </Layout>
      </div>
    )
  }
}

export default Index
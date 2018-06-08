import React, { Component } from 'react'
import { polyglot } from '../polyglot-modules/polyglot'
import { t } from '../polyglot-modules/polyglot.js'
import es from '../translations/es.json'
import en from '../translations/en.json'
import Layout from '../layouts/Layout'
import Header from '../containers/Header'
import AboutUs from '../sections/about/containers/AboutUs'
import Content from '../sections/about/containers/Content'
import Footer from '../containers/Footer'


const env = 'undefined' !== process ? process.env.YOUTUBE_API_KEY : null

export default class extends Component {

  static getInitialProps() {
    return { env };
  }

  constructor (props) {
    super(props)
    this.state = {
      currentLang : 'es'
    }
    if (Object.values(polyglot.phrases).length === 0) {
      polyglot.extend(es)
      polyglot.locale(es.language)
    }
    
  }

  componentDidMount () {
    const lang = localStorage.getItem('lang')
    if (lang === null) {
      localStorage.setItem('lang', 'es')
    } else if (lang !== polyglot.currentLocale) {
      this.changeLang('en')
    }
  }

  changeLang = (lang) => {
    const newLang = lang === 'es' ? es : en
    polyglot.extend(newLang) 
    polyglot.locale(newLang.language)
    localStorage.setItem('lang', lang)
    this.setState({currentLang: lang})
  }
  
  render () {
    return (
      <div>
        <Layout 
          changeLang={this.changeLang}
          currentLang={this.state.currentLang} >
          <Header 
            title={t('aboutUs.title')}
            bg={'../static/assets/header/headerWeb.jpg'} />
          <AboutUs />
          <Content api={this.props.env}>
        </Content>
          <Footer />
        </Layout>
        <style jsx>{`
          section {
            padding-left: 100px;
            padding-right: 100px;
          }
        `}</style>
      </div>
    )
  }
}

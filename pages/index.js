import React, { Component } from 'react'
import { polyglot } from '../polyglot-modules/polyglot'
import es from '../translations/es.json'
import en from '../translations/en.json'
import Layout from '../layouts/Layout'
import Header from '../sections/index/containers/Header'
import AboutUs from '../sections/index/containers/AboutUs'
import Collaborate from '../sections/index/containers/Collaborate'
import Ebooks from '../sections/index/containers/Ebooks'
import Media from '../sections/index/containers/Media'
import WhoWeAre from '../sections/index/containers/WhoWeAre'
import Publications from '../sections/index/containers/Publications'
import Footer from '../containers/Footer'

export default class extends Component {
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
    const isSubscribed = this.getQueryVariable('subscripto')
    console.log(isSubscribed)
  }

  changeLang = (lang) => {
    const newLang = lang === 'es' ? es : en
    polyglot.extend(newLang) 
    polyglot.locale(newLang.language)
    localStorage.setItem('lang', lang)
    this.setState({currentLang: lang})
  }

  getQueryVariable = (variable) => {
    var query = window.location.search.substring(1)
    var vars = query.split("&")
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=")
      if(pair[0] == variable){return pair[1]}
    }
  }

  render () {
    return (
      <div>
        <Layout changeLang={this.changeLang} currentLang={this.state.currentLang}>
          <Header />
          <AboutUs />
          <Collaborate />
          <Publications />
          <Ebooks />
          <Media />
          <WhoWeAre />
          <Footer />
        </Layout>
      </div>
    )
  }
}

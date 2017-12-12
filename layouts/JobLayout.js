import Head from 'next/head'
import Navbar from '../containers/Navbar'
import Header from '../containers/Header'

const JobLayout = (props) => (
  <div>
    <Head>
      <title>Democracia en Red</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" type="favicon" href="/static/assets/icons/der-favicon.ico" />
      <link rel="stylesheet" type="text/css" href="/static/flickity.css" />
      <link rel="stylesheet" type="text/css" href="/static/global.css" />
    </Head>
    <Navbar 
      changeLang={props.changeLang}
      currentLang={props.currentLang} />
    <Header 
      title={'JOBS'}
      bg={'../static/assets/header/headerAbout.jpg'} />
      <section>
        {props.children}
        <button className='btn'>
          <span className='action-text'>
            Aplicar ahora
          </span>
        </button>
      </section>
      <style jsx>{`
        section {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-content: center;
        }
      `}</style>
  </div>
)

export default JobLayout
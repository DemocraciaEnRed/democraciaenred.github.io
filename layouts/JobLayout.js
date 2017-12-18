import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../containers/Navbar'
import Header from '../containers/Header'
import Breadcrumbs from '../sections/jobs/components/Breadcrumbs'

const JobLayout = (props) => (
  <div>
    <Head>
      <title>Democracia en Red</title>
      <meta name='viewport' content='width=device-width, maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0' />
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
        <Breadcrumbs 
          routes={props.breadcrumbs} />
        {props.children}
        <Link prefetch href= {{ pathname: '/apply',  query: { id: props.id} }}>
          <button className='btn'>
            <span className='action-text'>
              Aplicar ahora
            </span>
          </button>
        </Link>
      </section>
      <style jsx>{`
        section {
          align-content: center;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          padding-top: 31px;
        }
      `}</style>
  </div>
)

export default JobLayout
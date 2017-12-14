import Link from 'next/link'

const Breadcrumbs = ( { routes } ) => (
  <div className='breadcrumbs-container'>
    {routes.map((link, i)=> (
      <Link key={i} href={link.path}>
        <a>{link.title}</a>
      </Link>
    ))}
    <style jsx>{`
      .breadcrumbs-container {
        margin-bottom: 73px;
      }
      a {
        color: var(--black);
        font-size: 2.4rem;
      }
      a:not(:last-child):after {
        content: '>';
        margin: 0 5px;
      }
      a:last-child {
        color: var(--dark-accent);
      }
      a.active {
        color: var(--dark-accent);
      }
      @media (max-width: 1024px) {
        .breadcrumbs-container {
          margin-bottom: 50px;
        }
        a {
          font-size: 2.0rem;
        }
      }
    `}</style>
  </div>
)

export default Breadcrumbs
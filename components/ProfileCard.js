const ProfileCard = ( {name, bio, handle, img} ) => (
  <div className='profile-card'>
    <div className='profile-card-container'>
      <h3 className='profile-title'>{name}</h3>
      <p className='profile-bio'>{bio}</p>
      <a href={`http://www.twitter.com/${handle}`}className='profile-handle'>{'@'+handle}</a>
    </div>
  <style jsx>{`
    .profile-card {
      align-items: space-between;
      background-image: url(${img});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 100%;
      display: flex;
      flex-wrap: wrap;
      height: 250px;
      justify-content: center;
      width: 250px;
    }
    
    .profile-card-container {
      display: none;
    }

    .profile-card:hover .profile-card-container {
      animation: fadeInFromNone 0.5s ease;
      background-color: rgba(0,0,0,0.8); 
      border-radius: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 64px 39px 63px;
    }
    .profile-title {
      font-size: 2.8rem;
      font-weight: 500;
      color: #eaeaea;
    }
    .profile-bio {
      font-size: 2.1rem;
      font-weight: 300;
      color: #eaeaea;
    }
    .profile-handle {
      font-size: 21.1px;
      font-weight: 300;
      color: #eaeaea;
    }
    @-webkit-keyframes fadeInFromNone {
      0% {
        opacity: 0;
      }

      1% {
        opacity: 0.5;
      }

      100% {
        opacity: 1;
      }
    }

    @-moz-keyframes fadeInFromNone {
      0% {
        opacity: 0;
      }

      1% {
        opacity: 0.5;
      }

      100% {
        opacity: 1;
      }
    }

    @-o-keyframes fadeInFromNone {
      0% {
        opacity: 0;
      }

      1% {
        opacity: 0.5;
      }

      100% {
        opacity: 1;
      }
    }

    @keyframes fadeInFromNone {
      0% {
        opacity: 0;
      }

      1% {
        opacity: 0.5;
      }

      100% {
        opacity: 1;
      }
    }
    @media screen and (min-width: 1200px) {
      .profile-card:nth-child(9) {
        margin-left: 25%
      }
      .profile-card:nth-child(10) {
        margin-right: 25%
      }
    }
    @media screen and (min-width: 1440px) {
      .profile-card {
        margin-right: 10px;
      }
    }
    @media screen and (max-width: 1024px) {
      .profile-card {
        height: 270px;
        width: 270px;
      }
      .profile-card-container {
        width: 100%;
        height: 100%;
        padding: 69px 42px;
      }
      .profile-title {
      font-size: 3.0rem;
      }
      .profile-bio {
        font-size: 2.2rem;
        font-weight: 300;
        color: #eaeaea;
      }
      .profile-handle {
      font-size: 2.2rem;
      font-weight: 300;
      color: #eaeaea;
      }
    }
    @media screen and (max-width: 375px) {
      .profile-card {
        height: 230px;
        width: 230px;
      }
      .profile-title {
        font-size: 2.2rem;
      }
      .profile-bio {
        font-size: 1.6rem;
      }
      .profile-handle {
        font-size: 1.6rem;
      }
    }
    @media screen and (max-width: 322px) {
      .profile-card {
        height: 170px;
        width: 170px;
      }
      .profile-card:hover .profile-card-container {
        width: 100%;
        height: 100%;
        padding: 35px;
      }
      .profile-title {
        font-size: 1.6rem;
      }
      .profile-bio {
        font-size: 1.2rem;
      }
      .profile-handle {
        font-size: 1.2rem;
      }
    }
  `}</style>
  </div>
)

export default ProfileCard
import React, { Component } from 'react'
import DisplayVideo from '../components/DisplayVideo'
import SliderContainer  from './SliderContainer'

class Content extends React.Component{
  constructor(props){
    super(props)
    this.playlistId = 'PL-5jaKJlVw82dWX3ZNG5uVmoD9b5yf2bd'
    this.state = {
      currentVideo : 'LhcS-IbQbTk',
      videos: null
    }
  }

  
  handleClick = (id) => () => {
    this.setState({ currentVideo : id })
  }


componentDidMount () {
  const youtube = localStorage.getItem('youtube')
  fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${youtube}&playlistId=${this.playlistId}&part=snippet&maxResults=12`)
  .then((response) => response.json())
  .then((responseJson) => {
    const items = responseJson.items.map((obj) => ({
        title: obj.snippet.title,
        thumbnail: obj.snippet.thumbnails.default.url,
        id: obj.snippet.resourceId.videoId
      }))
    return items
  })
  .then((videos) => this.setState({videos: videos}))
  .catch((error) => console.error(error))
}

render() {
  return (
    <section className='video-section' id='videos'>
      <h2 className='section-title'>Contenido Audiovisual</h2>
      <DisplayVideo
        video={this.state.currentVideo} />
      <div className='slider-wrapper'>
        <SliderContainer
          videos={this.state.videos}
          handleClick={this.handleClick} />
      </div>
      <style jsx>{`
        .video-section {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: center;
        }
        .section-title {
          display: block;
          text-align: center;
          margin-bottom:0.5em;
          margin-top: 0.5em;
        }
        .slider-wrapper {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </section>
  )
}
}

export default Content
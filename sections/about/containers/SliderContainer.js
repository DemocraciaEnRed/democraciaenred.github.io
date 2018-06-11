import React, { Component } from 'react'
import ThumbnailSlider from '../components/ThumbnailSlider'
import Flickity from 'flickity'

export default class extends Component {
  constructor(props) {
    super(props)
    this.flickity = null
  }


  componentDidUpdate () {
    if (this.flkty) this.flkty.destroy()
    const options = {
      cellCelector: '.thumbnail-item',
      pageDots: false,
      wrapAround: false,
      cellAlign: 'center',
      draggable: true,
      contain: true,
      prevNextButtons: true
    }
    this.flkty = new Flickity(this.refs.carousel, options)
  }

  componentWillUnmount () {
    this.flkty.destroy()
  }

  render () {
    return (
      <div className='thumbnails-container' ref='carousel'>
      {this.props.videos.map((video) => 
        <ThumbnailSlider
          id={video.id}
          thumbnail={video.thumbnail}
          title={video.title}
          key={video.id}
          handleClick={this.props.handleClick}
        />
      )}
      <style jsx>{`
        .thumbnails-container {
          width: 800px;
        }
      `}</style>
      </div>
    )
  }
}

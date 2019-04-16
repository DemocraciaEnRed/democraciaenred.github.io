/* import React, { Component, Fragment } from 'react'
import ThumbnailSlider from '../components/ThumbnailSlider'
let Flickity;

export default class extends Component {
  constructor(props) {
    super(props)
    this.flickity = null
  }


  componentDidUpdate () {
    Flickity = require('flickity')
    this.flkty = new Flickity(this.refs.carousel, options)

    //if (this.flkty) this.flkty.destroy()
    const options = {
      cellCelector: '.thumbnail-item',
      pageDots: false,
      wrapAround: false,
      cellAlign: 'center',
      draggable: true,
      contain: true,
      prevNextButtons: true
    }
  }

  componentWillUnmount () {
   //this.flkty.destroy()
  }

  render () {
    return (
      <div className='thumbnails-container' ref='carousel'>
      {this.props.videos && this.props.videos.map((video) => 
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
 */

 import React, {Component, Fragment} from "react"
 import ThumbnailSlider from '../components/ThumbnailSlider'

 class SliderContainer extends Component {
   constructor(props) {
     super(props);
     this.state = { 
       Flickity: null,
       flickityOptions: null };
     if (typeof window !== 'undefined') {
      const Flickity = require('react-flickity-component');
      this.state = {
        Flickity: Flickity,
        flickityOptions: {
          cellCelector: '.thumbnail-item',
          pageDots: false,
          wrapAround: false,
          cellAlign: 'center',
          draggable: true,
          contain: true,
          prevNextButtons: true,
          adaptiveHeight: true,
          setGallerySize: false
        }
      };
    }
   }

   render() {
     let { Flickity, flickityOptions } = this.state 
     return (
       <div className="wrapper-flickity">
      {Flickity && <Flickity  className={'thumbanils-container'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      >
      {this.props.videos && this.props.videos.map((video) => 
        <ThumbnailSlider
          id={video.id}
          thumbnail={video.thumbnail}
          title={video.title}
          key={video.id}
          handleClick={this.props.handleClick}
      />
      )}
      </Flickity>
    }
     <style jsx>{`
      .wrapper-flickity {
        width: 800px;
      }
      .thumbnails-container {
        width: 800px;
      }
    `}</style>
      </div>
     )
   }
 }

 export default SliderContainer;
import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component {
  render() {
    let pictureList = this.props.galleryList.map(picture => {
      return <GalleryItem picture={picture} key={picture.id} />
    })
    return (
      <div className="galleryList">
        {pictureList}
      </div>
    );
  }
}

export default GalleryList;

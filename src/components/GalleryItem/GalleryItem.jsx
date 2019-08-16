import React, { Component } from 'react';

class GalleryItem extends Component {
  state = {
    isFlipped: false
  }

  render() {
    return (
      <div className="galleryCard">
        <div className="photoContainer">
          <img src={this.props.picture.path} />
        </div>
        <div className="buttonContainer">
          <button className="likeButton">Love it!</button>
        </div>
      </div>
    );
  }
}

export default GalleryItem;

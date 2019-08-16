import React, { Component } from 'react';
import './GalleryItem.css'

class GalleryItem extends Component {
	state = {
		isFlipped: false
  };

  toggleDescription = () => {
    this.setState({isFlipped: !this.state.isFlipped})
  }

	render() {
		return (
			<div className='galleryCard'>
				<div className='photoContainer' onClick={this.toggleDescription}>
          {this.state.isFlipped
            ? <p>{this.props.picture.description}</p>
            : <img src={this.props.picture.path} />}
				</div>

				<div className='buttonContainer'>
					<button
						className='likeButton'
						onClick={() => this.props.addLove(this.props.picture.id)}>
						Love it!
					</button>
				</div>
				<div className='loveCountContainer'>
					<h5>{this.props.picture.likes} people love this!</h5>
				</div>
			</div>
		);
	}
}

export default GalleryItem;

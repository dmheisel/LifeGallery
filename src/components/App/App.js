import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'

class App extends Component {
	state = {
		galleryList: [],
		currentPictureId: ''
	};
	getImages = () => {
		//gets images from the server using axios
		Axios
			.get('/gallery')
			.then(response => {
				console.log('successful GET request from server');
        this.setState({ galleryList: response.data });
        console.log(this.state)
			})
			.catch(error => {
				console.log('error on GET request from server: ', error);
			});
  }

  addLove = (id) => {
    //PUT method to add to love count of photo on server using axios
    Axios
      .put(`/gallery/like/${id}`)
      .then(response => {
        console.log(`successful PUT request to server: ${response}`)
        this.getImages()
      })
      .catch(error => {
        console.log(`error on PUT request to server: ${error}`)
      })
  }
  componentDidMount = () => {
    console.log('app loaded');
    this.getImages()
  }


	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<h1 className='App-title'>Gallery of my life</h1>
				</header>
				<br />
        <GalleryList galleryList={this.state.galleryList} addLove={this.addLove}/>
			</div>
		);
	}
}

export default App;

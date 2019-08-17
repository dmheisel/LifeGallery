import React, { Component } from 'react';
// import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import Container from '@material-ui/core/Container';
// import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
	state = {
		galleryList: [],
		currentPictureId: ''
	};
	getImages = () => {
		//gets images from the server using axios
		Axios.get('/gallery')
			.then(response => {
				console.log('successful GET request from server');
				this.setState({ galleryList: response.data });
				console.log(this.state);
			})
			.catch(error => {
				console.log('error on GET request from server: ', error);
			});
	};

	addLike = id => {
		//PUT method to add to love count of photo on server using axios
		Axios.put(`/gallery/like/${id}`)
			.then(response => {
				console.log(`successful PUT request to server: ${response}`);
				this.getImages();
			})
			.catch(error => {
				console.log(`error on PUT request to server: ${error}`);
			});
	};

	postPicture = picture => {
		Axios.post('/gallery')
			.then(response => {
				console.log(`successful POST route to server: ${response}`);
				this.getImages();
			})
			.catch(error => {
				console.log(`error on POST route to server: ${error}`);
			});
	};

	componentDidMount = () => {
		console.log('app loaded');
		this.getImages();
	};

	render() {
		return (
			<Container maxWidth='lg' className='App'>
				{/* <CssBaseline /> */}
				{/* <header className='App-header'>
					<h1 className='App-title'>Gallery of my life</h1>
				</header>
				<br /> */}
				<GalleryList
					galleryList={this.state.galleryList}
					addLike={this.addLike}
				/>
			</Container>
		);
	}
}

export default App;

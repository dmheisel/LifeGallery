import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import AddToGalleryMenu from '../AddToGalleryMenu/AddToGalleryMenu'

//imports from material-ui
import Container from '@material-ui/core/Container';


class App extends Component {
	state = {
		galleryList: [],
		currentPictureId: '',
		inDeleteMode: false,
	};

	getImages = () => {
		//gets images from the server using axios
		axios.get('/gallery')
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
		axios.put(`/gallery/like/${id}`)
			.then(response => {
				console.log(`successful PUT request to server: ${response}`);
				this.getImages();
			})
			.catch(error => {
				console.log(`error on PUT request to server: ${error}`);
			});
	};

	postPicture = picture => {
		axios.post('/gallery', picture)
			.then(response => {
				console.log(`successful POST route to server: ${response}`);
				this.getImages();
			})
			.catch(error => {
				console.log(`error on POST route to server: ${error}`);
			});
	};

	toggleDeleteMode = () => {
		this.setState({inDeleteMode: !this.state.inDeleteMode})
	}

	componentDidMount = () => {
		console.log('app loaded');
		this.getImages();
	};

	render() {
		return (
			<Container className='App'>
				<AddToGalleryMenu postPicture={this.postPicture} toggleDeleteMode={this.toggleDeleteMode} inDeleteMode={this.state.inDeleteMode}/>
				{/* <AddPictureMenuBar postPicture={this.postPicture}/> */}
				<GalleryList
					galleryList={this.state.galleryList}
					addLike={this.addLike}
				/>
			</Container>
		);
	}
}

export default App;

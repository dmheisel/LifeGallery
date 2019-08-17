import React, { Component } from 'react';
// import './GalleryItem.css'
import { withStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	icon: {
		color: 'rgba(239, 134, 134, 0.93)'
	}
}); // sets color for icon to use at light pink

class GalleryItem extends Component {
	state = {
		isFlipped: false
	}; // tracks if photo should have description overlaid or not

	toggleDescription = () => {
		this.setState({ isFlipped: !this.state.isFlipped });
		console.log(this.state);
	};

	render() {
		const { classes } = this.props;
		return (
			//Grid List tile is composed of photo with overlaid titlebar
			//Titlebar has picture title, number of likes, and heart icone to add
			<GridListTile key={this.props.picture.id}>
				<img
					src={this.props.picture.path}
					alt='gallery item'
					style={{ height: 200, width: 'auto', margin: 2 }}
					onClick={this.toggleDescription}
				/>

				{this.state.isFlipped ? (
					//ternary operator for flipped state -- if FLIPPED, the title bar is
					//the entire description overlaid over the whole image.
					//if NOT FLIPPED, titlebar is default image title and likes interface
					<GridListTileBar
						title={
							<Typography
								variant='subtitle1'
								style={{ whiteSpace: 'normal', textAlign: 'center' }}>
								{this.props.picture.description}
							</Typography>
						}
						onClick={this.toggleDescription}
						style={{ height: '100%'}}
					/>
				) : (
					<GridListTileBar
						title={this.props.picture.title}
						subtitle={<span>Liked by {this.props.picture.likes} people </span>}
						actionIcon={
							<IconButton
								className={classes.icon}
								onClick={() => {
									this.props.addLike(this.props.picture.id);
								}}>
								<FavoriteBorder /> {/* Heart Outline Icon */}
							</IconButton>
						}
					/>
				)}
			</GridListTile>
		);
	}
}

export default withStyles(styles)(GalleryItem);

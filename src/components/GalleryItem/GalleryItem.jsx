import React, { Component } from 'react';

//material ui imports
import { withStyles } from '@material-ui/core/styles';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
	icon: {
		color: 'rgba(239, 134, 134, 0.93)' // sets color for icon to use at light pink
	},
	image: {
		height: '100%',
		width: 'auto',
		objectFit: 'cover'
	}
	// sets image to cover container, keeping aspect ratio from height.
	//images may be cutoff on sides -- need to find solution for this.
});

class GalleryItem extends Component {
	state = {
		showDescription: false
	}; // tracks if photo should have description overlaid or not

	toggleDescription = () => {
		this.setState({ showDescription: !this.state.showDescription });
		console.log(this.state);
	}; // toggles state of description to show it

	getClickFunction = () => {
		// gets function to handle the click based on whether or not currently in delete mode
		// click hanlder needs to be on image if no description shown or on tilebar if it is
		this.props.inDeleteMode
			? this.props.deletePicture(this.props.picture.id)
			: this.toggleDescription();
	};

	render() {
		const { classes } = this.props;

		return (
			//creates an item to be contained in a grid list tile
			//tilebar contains like count and heart button at bottom of image
			//if description is toggled, tilebar covers picture and contains description
			<div className={classes.image}>
				<img
					src={this.props.picture.path}
					alt='gallery item'
					className={classes.image}
					onClick={() => this.getClickFunction()}
				/>
				{/* Ternary operator to determine how to display tilebar */}
				{this.state.showDescription ? (
					<GridListTileBar
						title={
							<Typography
								variant='subtitle1'
								style={{ whiteSpace: 'normal', textAlign: 'center' }}>
								{this.props.picture.description}
							</Typography> // tilebar will only show description here
						}
						onClick={() => this.getClickFunction()}
						style={{ height: '100%' }} // sets tilebar to cover picture
					/>
				) : (
					<GridListTileBar
						title={this.props.picture.title}
						subtitle={<span>Liked by {this.props.picture.likes} people </span>}
						style={{ height: 'auto' }}
						actionIcon={
							<IconButton
								className={classes.icon}
								onClick={() => {
									this.props.addLike(this.props.picture.id);
								}}>
								<FavoriteBorder /> {/* Heart Outline Icon */}
							</IconButton>
						}
					/> //defatul tilebar has like count and heart button
				)}
			</div>
		);
	}
}

export default withStyles(styles)(GalleryItem);

import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
// import './GalleryList.css'
import GridList from '@material-ui/core/GridList';
import { withStyles } from '@material-ui/core/styles'
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader'

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper
	},
	gridList: {
		width: 1024,
		height: 'auto'
	}
});
class GalleryList extends Component {
	render() {
		//maps over gallery list and returns a GalleryItem element for each picture
		let pictureList = this.props.galleryList.map(picture => {
			return (
				<GalleryItem
					picture={picture}
					addLike={this.props.addLike}
					key={picture.id}
				/>
			);
		});

		const { classes } = this.props; //used for material-ui styling

		return (
			<div className={classes.root}>
				<GridList className={classes.gridList}>
					<GridListTile key='Subheader' cols={2} style={{ height: 'auto' }}>
						<ListSubheader component='div'>
							Gallery of My Life
						</ListSubheader>
					</GridListTile>
					{pictureList}
				</GridList>
			</div>
		);
	}
}

export default withStyles(styles)(GalleryList);

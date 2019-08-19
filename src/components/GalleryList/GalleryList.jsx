import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
// import './GalleryList.css'
import GridList from '@material-ui/core/GridList';
import { withStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';


const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		width: '85%',
		margin: 'auto',
		justifyContent: 'space-around',
		backgroundColor: theme.palette.background.paper
	},
	gridList: {
		width: 'auto',
		height: '90vh',
		justifyContent: 'space-around'
	}
});
class GalleryList extends Component {

	render() {
		//maps over gallery list and returns a GalleryItem element for each picture

		let pictureList = this.props.galleryList.map(picture => {
			return (

				<GridListTile key={picture.id} cols={1} rows={1} >
					<GalleryItem
						picture={picture}
						addLike={this.props.addLike}
						deletePicture={this.props.deletePicture}
						inDeleteMode={this.props.inDeleteMode}
					/>
					</GridListTile>
			);
		});

		const { classes } = this.props; //used for material-ui styling

		// const getCols = () => {

		// }
		return (
			<div className={classes.root}>
				<GridList
					cols={3}
					cellHeight={250}
					spacing={4}
					className={classes.gridList}>
					<GridListTile key='Subheader' cols={3} style={{ height: 'auto' }}>
						<ListSubheader component='div'>Gallery of My Life</ListSubheader>
					</GridListTile>
					{pictureList}
				</GridList>
				{/* <GridList className={classes.gridList}>
					<GridListTile key='Subheader' cols={3} style={{ height: 'auto' }}>
						<ListSubheader component='div'>
							Gallery of My Life
						</ListSubheader>
					</GridListTile>
					{pictureList}
				</GridList> */}
			</div>
		);
	}
}

export default withStyles(styles)(GalleryList);

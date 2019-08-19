import React, { Component } from 'react';
import MenuBarInputs from '../MenuBarInputs/MenuBarInputs';

//material-ui imports
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Delete from '@material-ui/icons/Delete';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Drawer from '@material-ui/core/Drawer';

//styles to use with floating action button
const styles = theme => ({
	fab: {
		margin: '5px 0px'
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		position: 'absolute',
		width: '5%'
	} // moves icons into column along the side of images, does not scroll off page
})
class AddToGallery extends Component {
	state = {
		isDrawerShown: false
	};

	//togglesDrawer
	toggleDrawer = () => {
		this.setState({ isDrawerShown: !this.state.isDrawerShown });
	}; // drawer open/close relies on state

	render() {
		const { classes } = this.props;

		return (
			<div>
				<div className={classes.root}>
					<Tooltip title='Add Image to Gallery'>
						<Fab
							color='primary'
							aria-label='add'
							className={classes.fab}
							onClick={this.toggleDrawer}> 
							<AddIcon />
						</Fab>
					</Tooltip>
					<Tooltip title={this.props.inDeleteMode ? 'Exit Delete Mode' : 'Delete an Image'}>
						{/* dynamic tooltip for delete button */}
						<Fab
							color='secondary'
							aria-label='Delete'
							className={classes.fab}
							onClick={() => this.props.toggleDeleteMode()}>
							{this.props.inDeleteMode ? <Delete /> : <DeleteOutline />}
							{/* Dynamic button - in delete mode is filled */}
						</Fab>
					</Tooltip>
				</div>
				<Drawer
					anchor='top'
					open={this.state.isDrawerShown}
					onClose={this.toggleDrawer}>
					<MenuBarInputs postPicture={this.props.postPicture} />
				</Drawer>
			</div>
		);
	}
}

export default withStyles(styles)(AddToGallery);

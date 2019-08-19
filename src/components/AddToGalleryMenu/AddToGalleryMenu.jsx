import React, { Component } from 'react';
import MenuBarInputs from '../MenuBarInputs/MenuBarInputs';

//material-ui imports
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/Delete';
import Drawer from '@material-ui/core/Drawer';

//styles to use with floating action button
const styles = theme => ({
	fab: {
		margin: theme.spacing(1)
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		position: 'absolute'
	}
});

class AddToGallery extends Component {
	state = {
		isDrawerShown: false
	};

	//togglesDrawer
	toggleDrawer = () => {
		this.setState({ isDrawerShown: !this.state.isDrawerShown });
	};

	render() {
		const { classes } = this.props;

		return (
			<div>
				<div className={classes.root}>
					<Fab
						color='primary'
						aria-label='add'
						className={classes.fab}
						onClick={this.toggleDrawer}>
						<AddIcon />
					</Fab>
					<Fab
						color='secondary'
						aria-label='Remove'
						className={classes.fab}
						onClick={this.toggleDrawer}>
						<Delete />
					</Fab>
				</div>
				<Drawer
					anchor='top'
					open={this.state.isDrawerShown}
					onClose={this.toggleDrawer}>
          <MenuBarInputs postPicture={this.props.postPicture}/>
				</Drawer>
			</div>
		);
	}
}

export default withStyles(styles)(AddToGallery);

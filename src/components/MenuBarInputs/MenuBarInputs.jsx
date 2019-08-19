import React, { Component } from 'react';

//material-ui imports
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

//styles for menu drawer & input fields
const styles = theme => ({
	root: {
		width: '75%',
		margin: 'auto',
		flexGrow: 1
	},
	button: {
		margin: theme.spacing(1)
	},
	textInput: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: '75%'
	},
});

class MenuBarInputs extends Component {
	state = {
		newPicture: {
			path: '',
			description: ''
		}
	};

	render() {
		const { classes } = this.props;

		return (
			//uses Grid to display text inputs and button in top drawer
			<div className={classes.root}>
				<Grid
					container
					spacing={3}
					direction='row'
					justify='space-around'
					alignItems='center'>
					<Grid item xs={4}>
						{/* Text field value and onchange tied to state */}
						<TextField
							id='pathInput'
							label='Path to Photo'
							value={this.state.newPicture.path}
							onChange={event => {
								this.setState({
									newPicture: {
										...this.state.newPicture,
										path: event.target.value
									}
								});
							}}
							className={classes.textInput}
						/>
					</Grid>
					<Grid item xs={8}>
						{/* Text field value and onchange tied to state */}
						<TextField
							id='descriptionINput'
							label='Brief Description of Photo'
							value={this.state.newPicture.description}
							onChange={event => {
								this.setState({
									newPicture: {
										...this.state.newPicture,
										description: event.target.value
									}
								});
							}}
							className={classes.textInput}
						/>
					</Grid>
					<Grid item xs={3}>
						<Button
							variant='contained'
							component='span'
							className={classes.button}
							onClick={() => {
								this.props.postPicture(this.state.newPicture);
								this.props.toggleDrawer();
								this.setState({
									newPicture: { path: '', description: '' }
								});
							}}>
							Add Picture
						</Button>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(MenuBarInputs);

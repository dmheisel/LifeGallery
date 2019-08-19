import React, { Component } from 'react';

//material-ui imports
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
	root: {
		width: '75%',
		margin: 'auto',
		flexGrow: 1
	},
	button: {
		margin: theme.spacing(1)
	},
	pathField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(0.5),
		width: '75%'
	},
	descriptionField: {
		marginLeft: theme.spacing(0.5),
		marginRight: theme.spacing(1),
		width: '75%'
	}
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
			<div className={classes.root}>
				<Grid
					container
					spacing={3}
					direction='row'
					justify='space-around'
					alignItems='center'>
					<Grid item xs={4}>
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
							className={classes.pathField}
						/>
					</Grid>
					<Grid item xs={8}>
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
							className={classes.descriptionField}
						/>
					</Grid>
					<Grid item xs={3}>
						<Button
							variant='contained'
							component='span'
							className={classes.button}
							onClick={() => {
								this.props.postPicture(this.state.newPicture);
								this.setState({ newPicture: { path: '', description: '' } });
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

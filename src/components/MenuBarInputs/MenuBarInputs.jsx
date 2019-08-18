import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		margin: 'auto'
	},
	textField: {
		width: '25vw',
		margin: theme.spacing(1)
	},
	descriptionField: {
		width: '40vw',
		margin: theme.spacing(1)
	},
	fab: {
		margin: theme.spacing(1),
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
			<form className={classes.container}>
				<div className={classes.container}>
					<TextField
						id='pathInput'
						label='Photo Url'
						value={this.state.newPicture.path}
						className={classes.textField}
						onChange={event =>
							this.setState({
								newPicture: {
									...this.state.newPicture,
									path: event.target.value
								}
							})
						}
						margin='normal'
					/>
					<TextField
						id='Description Input'
						label='Brief Description of Photo'
						value={this.state.newPicture.description}
						className={classes.descriptionField}
						onChange={event =>
							this.setState({
								newPicture: {
									...this.state.newPicture,
									description: event.target.value
								}
							})
						}
						margin='normal'
					/>
				</div>
				<div>
					<Fab
						size='small'
						color='primary'
						aria-label='add'
						className={classes.fab}
						onClick={() => {
							this.props.postPicture(this.state.newPicture);
							this.setState({
								newPicture: {
									path: '',
									description: ''
								}
							});
						}}>
						<AddIcon />
					</Fab>
				</div>
			</form>
		);
	}
}

export default withStyles(styles)(MenuBarInputs);

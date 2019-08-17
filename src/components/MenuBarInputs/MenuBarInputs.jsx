import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center'
	},
	textField: {
		width: '20vw',
		margin: theme.spacing(1)
	},
	descriptionField: {
		width: '40vw',
		margin: theme.spacing(1)
	},
	fab: {
		margin: theme.spacing(1)
	}
});

class MenuBarInputs extends Component {
	state = {
		newPicture: {
			path: '',
			title: '',
			description: ''
		}
	};

	render() {
		const { classes } = this.props;
		return (
			<form className={classes.container}>
				<TextField
					id='pathInput'
					label='Photo Url'
					value={this.state.newPicture.path}
					className={classes.textField}
					onChange={event =>
						this.setState({
							newPicture: { ...this.state.newPicture, path: event.target.value }
						})
					}
					margin='normal'
				/>
				<TextField
					id='titleInput'
					label='Photo Title'
					value={this.state.newPicture.title}
					className={classes.textField}
					onChange={event =>
						this.setState({
							newPicture: {
								...this.state.newPicture,
								title: event.target.value
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
				<Fab
					size='small'
					color='primary'
					aria-label='add'
					className={classes.fab}
					onClick={() => this.props.postPicture(this.state.newPicture)}>
					<AddIcon />
				</Fab>
			</form>
		);
	}
}

export default withStyles(styles)(MenuBarInputs);

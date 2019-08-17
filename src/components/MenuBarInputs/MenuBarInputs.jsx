import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'


const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: '20vw'
	},
	descriptionField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: '40vw'
  },
  fab: {
    margin: theme.spacing(1),

  }
});

class MenuBarInputs extends Component {

  render() {
    const { classes } = this.props;
    return (
			<form className={classes.container}>
				<TextField
					id='pathInput'
					label='Photo Url'
					className={classes.textField}
					margin='normal'
				/>
				<TextField
					id='titleInput'
					label='Photo Title'
					className={classes.textField}
					margin='normal'
				/>
				<TextField
					id='Description Input'
					label='Brief Description of Photo'
					className={classes.descriptionField}
          margin='normal'
        />
        <Fab size="small" color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Fab>
			</form>
		);
  }
}

export default withStyles(styles)(MenuBarInputs);

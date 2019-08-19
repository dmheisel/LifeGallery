import React, { Component } from 'react';

//material ui imports
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class DeleteConfirmationDialogue extends Component {
  state = {
    open: false,
  }

  open = () => {
    this.setState({open: true})

  render() {
    return (
			<div>
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby='alert-dialog-title'
					aria-describedby='alert-dialog-description'>
					<DialogTitle id='alert-dialog-title'>
						{"Use Google's location service?"}
					</DialogTitle>
					<DialogContent>
						<DialogContentText id='alert-dialog-description'>
							Delete this picture?
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color='primary'>
							Cancel
						</Button>
						<Button onClick={handleClose} color='primary' autoFocus>
							Confirm
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
  }
}

export default DeleteConfirmationDialogue;

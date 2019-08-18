import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuBarInputs from '../MenuBarInputs/MenuBarInputs'

const styles = theme => ({
  root: {
    width: '100%',
    position: 'sticky'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
})

class AddPictureForm extends Component {
  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            id="menuHeader">
            <Typography className={classes.heading}>
              Add Picture
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MenuBarInputs postPicture={this.props.postPicture}/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(AddPictureForm);

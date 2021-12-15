import React, { Fragment } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectDialog = ({ setOpen, open, projectObject }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <Grid container direction="column">
          <Grid item>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h3">Title</Typography>
          </Grid>
          <Grid item>
            <img src={projectObject.imgUrl} />
          </Grid>
          <Grid item>
            <Typography variant="body1">Tags</Typography>
          </Grid>
          <Divider
            flexItem
            sx={{ width: '95%', color: 'white', padding: '2px' }}
          />
          <Grid item>
            <Typography variant="body1">Links</Typography>
          </Grid>
        </Grid>
      </Dialog>
    </Fragment>
  );
};

export default ProjectDialog;

import React, { Fragment } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Button from '@mui/material/Button';

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
        <Grid
          container
          direction="column"
          sx={{ height: '100%' }}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item>
            <Button
              onClick={handleClose}
              sx={{
                backgroundColor: '#000',
                boxShadow: '#6D41A1 0px 7px 14px, #6D41A1 0px 5px 5px',
                transition: '120ms ease-in',
                '&:hover': {
                  backgroundColor: '#6D41A1',
                  boxShadow: '#000 0px 7px 14px, #6D41A1 0px 5px 5px',
                },
              }}
            >
              EXIT DIALOG SCREEN
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="h3">{projectObject.title}</Typography>
          </Grid>
          <Grid item align="center">
            <img
              style={{ width: '50%' }}
              src={projectObject.imgUrl}
              alt={`${projectObject.title} Logo`}
            />
          </Grid>
          <Grid item>
            <Typography variant="h6">Features</Typography>
          </Grid>
          <ul
            style={{
              height: '100px',
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              width: '90%',
              listStyleType: 'none',
              alignItems: 'center',
            }}
          >
            {projectObject.features !== undefined
              ? projectObject.features.map((feature, idx) => (
                  <li key={`${feature}-${idx}`}>{feature}</li>
                ))
              : null}
          </ul>
          <Divider
            flexItem
            sx={{
              width: '100%',
              color: 'white',
              marginLeft: 0,
              marginRight: 0,
            }}
            variant="middle"
          />
          <Grid item>
            <Typography variant="h6">Links</Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="space-evenly"
            alignItems="center"
          >
            {projectObject.githubLink ? (
              <Grid item>
                <IconButton>
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </Grid>
            ) : null}
            {projectObject.youtubeLink ? (
              <Grid item>
                <IconButton>
                  <YouTubeIcon fontSize="large" />
                </IconButton>
              </Grid>
            ) : null}
            {projectObject.appLink ? (
              <Grid item>
                <IconButton>
                  <ExitToAppIcon fontSize="large" />
                </IconButton>
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </Dialog>
    </Fragment>
  );
};

export default ProjectDialog;

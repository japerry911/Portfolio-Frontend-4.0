import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Trail from '../../components/Trail/Trail';
import LottieCard from '../../components/LottieCard/LottieCard';
import { contactLottie } from '../../assets';
import ThemeButton from '../../components/ThemeButton/ThemeButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { style } from '@mui/system';

const ContactPage = () => {
  const [open, setOpen] = useState(false);

  const styles = {
    gridContainerStyle: { width: '100%', padding: '2.5rem 0' },
    textFieldBaseStyle: {
      paddingTop: '1rem',
      '& .MuiInput-underline:before': {
        borderBottomColor: '#FFF',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#FFF',
      },
      '& .MuiInput-underline:hover:before': {
        borderBottomColor: '#FFF',
      },
    },
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: '#000',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.5)), url(https://storage.googleapis.com/portfolio-bucket-v4-r03249384431023901/contact/jared-brashier-6WPcf5D1XdA-unsplash.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        padding: '10rem',
      }}
    >
      <Grid
        container
        item
        sx={styles.gridContainerStyle}
        justifyContent="center"
      >
        <LottieCard
          refId={contactLottie.refId}
          logoFile={contactLottie.logoFile}
          title={contactLottie.title}
          textContent={contactLottie.textContent}
          small={true && contactLottie.small}
          isCard={false}
        />
        <Trail>
          <span>Get</span>
          <span>In</span>
          <span>Touch</span>
        </Trail>
      </Grid>
      <Grid
        item
        sx={{ width: '90%', display: 'flex', justifyContent: 'center' }}
      >
        <ThemeButton
          text="Contact Jack"
          variant="outlined"
          onClick={handleClickOpen}
        />
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          PaperProps={{
            sx: { backgroundColor: 'rgba(0,0,0,0.9)', color: '#FFF' },
          }}
        >
          <DialogTitle>Contact Jack</DialogTitle>
          <DialogContent>
            <DialogContentText color="primary" sx={{ padding: '2rem 0' }}>
              Fill Out the Form Below and Press "Send Message".
            </DialogContentText>
            <TextField
              fullWidth
              variant="standard"
              id="name"
              label="Name"
              type="text"
              margin="dense"
              autoFocus
              color="primary"
              inputProps={{ sx: { color: '#FFF' } }}
              sx={styles.textFieldBaseStyle}
              InputLabelProps={{
                sx: {
                  color: '#FFF',
                },
              }}
            />
            <TextField
              fullWidth
              variant="standard"
              id="emailAddress"
              label="Email Address"
              type="email"
              margin="dense"
              autoFocus
              inputProps={{ sx: { color: '#FFF' } }}
              sx={styles.textFieldBaseStyle}
              InputLabelProps={{
                sx: {
                  color: '#FFF',
                },
              }}
            />
            <TextField
              fullWidth
              variant="standard"
              id="subject"
              label="Subject"
              type="text"
              margin="dense"
              autoFocus
              inputProps={{ sx: { color: '#FFF' } }}
              sx={styles.textFieldBaseStyle}
              InputLabelProps={{
                sx: {
                  color: '#FFF',
                },
              }}
            />
            <TextField
              fullWidth
              variant="standard"
              id="message"
              label="Message"
              type="text"
              margin="dense"
              autoFocus
              multiline
              rows={5}
              maxRows={Infinity}
              inputProps={{ sx: { color: '#FFF' } }}
              sx={styles.textFieldBaseStyle}
              InputLabelProps={{
                sx: {
                  color: '#FFF',
                },
              }}
            />
          </DialogContent>
          <DialogActions sx={{ padding: '2rem 1rem' }}>
            <ThemeButton
              onClick={handleClose}
              text="Cancel"
              variant="contained"
            />
            <ThemeButton
              onClick={handleClose}
              text="Send Message"
              variant="contained"
            />
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default ContactPage;

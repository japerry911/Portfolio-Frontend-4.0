import React, { useState, useEffect } from 'react';
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
import { useFormFields } from '../../hooks/hooks';
import expressServer from '../../api/expressServer';
import Box from '@mui/material/Box';

const FORM_INITIAL_STATE = {
  name: '',
  emailAddress: '',
  subject: '',
  message: '',
};

const emailRegexp = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const ContactPage = () => {
  const [open, setOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fields, setField, setFields] = useFormFields(FORM_INITIAL_STATE);

  const styles = {
    gridContainerStyle: { width: '100%', padding: '2.5rem 0' },
    textFieldBaseStyle: {
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

  useEffect(() => {
    if (fields.name && fields.emailAddress && fields.message) {
      if (emailRegexp.test(fields.emailAddress)) {
        setIsValid(true);
      } else {
        console.log('invalid email');
      }
    } else {
      setIsValid(false);
    }
  }, [fields]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    const sendObject = {
      name: fields.name,
      email: fields.emailAddress,
      subject: fields.subject,
      message: fields.message,
    };

    const response = await expressServer.post(
      '/contact/send-email',
      sendObject
    );

    if (response.status !== 200) {
      console.log('Message send failure, try again');
    } else {
      console.log('Message sent successfully');
      setFields(FORM_INITIAL_STATE);
      setOpen(false);
    }

    setIsLoading(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(fields);

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
            sx: {
              backgroundColor: 'rgba(0,0,0,0.9)',
              color: '#FFF',
              border: '1pt solid white',
              boxShadow: '#6D41A1 0px 7px 14px, #6D41A1 0px 5px 5px',
            },
          }}
        >
          <Box component="form" onSubmit={handleSubmit}>
            <DialogTitle>Contact Jack</DialogTitle>
            <DialogContent>
              <DialogContentText color="primary" sx={{ padding: '2rem 0' }}>
                (NOT CURRENTLY FUNCTIONING) Fill Out the Form Below and Press
                "Send Message"
              </DialogContentText>
              <TextField
                autoFocus
                fullWidth
                required
                variant="standard"
                onChange={setField}
                value={fields.name}
                id="name"
                label="Name"
                type="text"
                margin="dense"
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
                required
                onChange={setField}
                value={fields.emailAddress}
                variant="standard"
                id="emailAddress"
                label="Email Address"
                type="email"
                margin="dense"
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
                onChange={setField}
                value={fields.subject}
                variant="standard"
                id="subject"
                label="Subject"
                type="text"
                margin="dense"
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
                required
                onChange={setField}
                value={fields.message}
                variant="standard"
                id="message"
                label="Message"
                type="text"
                margin="dense"
                multiline
                minRows={5}
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
                type="submit"
              />
              <ThemeButton
                component="button"
                onClick={handleClose}
                text="Send Message"
                variant="contained"
                isDisabled={!isValid}
                type="submit"
                sendIcon
              />
            </DialogActions>
          </Box>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default ContactPage;

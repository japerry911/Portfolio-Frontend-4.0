import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#000',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

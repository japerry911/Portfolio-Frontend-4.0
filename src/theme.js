import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    secondary: {
      main: '#000',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

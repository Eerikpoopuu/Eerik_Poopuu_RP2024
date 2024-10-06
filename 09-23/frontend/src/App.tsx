import "./App.css";
import Cats from "./componets/Cats";
import Todos from "./componets/todos";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D5006D', 
    },
    secondary: {
      main: '#000000', 
    },
    background: {
      default: '#000000', 
      paper: '#212121', 
    },
    text: {
      primary: '#800080', 
      secondary: '#D5006D',
    },
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <Cats />
        <Todos />
      </ThemeProvider>
  );
}

export default App;


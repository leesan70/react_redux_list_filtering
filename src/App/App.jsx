import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { StudentDisplayPage } from 'Views/StudentDisplayPage';
import './App.css';

const theme = createMuiTheme({
  palette: {
    background: {
      default: "WhiteSmoke"
    }
  }
});

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <StudentDisplayPage />
        </div>
      </ThemeProvider>
    );
  } 
}

export { App };

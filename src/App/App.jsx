import React from 'react';
import './App.css';
import { StudentDisplayPage } from 'Views/StudentDisplayPage';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    background: {
      default: "WhiteSmoke"
    }
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }

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
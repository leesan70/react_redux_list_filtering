import React from 'react';
import './App.css';
import { StudentDisplayPage } from 'Views/StudentDisplayPage';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <StudentDisplayPage />
      </div>
    );
  } 
}

export { App };
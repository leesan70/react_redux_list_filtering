import React from 'react';
import './App.css';
import { connect } from 'react-redux';
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

function mapState(state) {
  return { };
} 

const actionCreators = {

};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
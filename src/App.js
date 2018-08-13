import React, { Component } from 'react';
import { Grid } from 'react-bootstrap'
import UserForm from './Features/userForm/userForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         
        <header className="App-header">
          
          <h1 className="App-title">Github Api React App</h1>
        </header>
    

        <Grid>
          <UserForm />
        </Grid>
      </div>
    );
  }
}

export default App;

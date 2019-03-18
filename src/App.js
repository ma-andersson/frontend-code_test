import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import List from './components/list';
import Restaurant from './components/restaurant';

class App extends Component {
  render() {
    return (
        <div>
          <Switch>
            <Route exact path = '/' component = {List}/>
            <Route path = '/restaurant/:id' component= {Restaurant}/>
          </Switch>
        </div>
    )
  }
}

export default App;

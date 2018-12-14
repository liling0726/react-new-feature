import React, { Component } from 'react';
import ContextIndex from './context/index'
import RefIndex from './ref/index'
import PureIndex from './pure/index'
import MemoIndex from './memo/index'
import './App.css';

class App extends Component {
  render() {
    return <React.Fragment>
     <ContextIndex />
     <RefIndex />
     <PureIndex />
     <MemoIndex />
    </React.Fragment>
    
  }
}

export default App;

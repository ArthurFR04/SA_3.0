import React, { Component } from 'react';
import {Menubar} from 'primereact/menubar';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Menubar/>
        oi
        oi
        <Link to="/HomeScreen">Dale pro Home</Link>
      </div>
    );
  }
}

export default App;
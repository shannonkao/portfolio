import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Contact from './components/Contact';
import Grid from './components/Grid';
import VerticalList from './components/VerticalList';
import './styles/App.css';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <BrowserRouter>
        <div className="title">Shannon Kao</div>
        <div className="header">
            <div><Link to="/">Illustration</Link></div>
            <div><Link to="/comics">Comics</Link></div>
            <Contact />
        </div>
        <Switch>
          <Route path="/comics"><VerticalList /></Route>
          <Route path="/"><Grid /></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

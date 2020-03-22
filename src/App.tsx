import React from 'react';
import Contact from './components/Contact';
import Grid from './components/Grid';
import './styles/App.css';

interface AppState {

}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
  }

  
  render() {
    return (
      <div className="App">
        <div className="title">Shannon Kao</div>
        <div className="header">
            <div><a href="/">Illustration</a></div>
            <div><a href="https://mellific.tumblr.com/tagged/comics" target="_blank">Comics</a></div>
            <Contact />
        </div>
        <Grid />
      </div>
    );
  }
}

export default App;

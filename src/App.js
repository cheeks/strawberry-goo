import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import EraList from './EraList';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      nowPlaying : ''
    };
  }
  componentDidMount () {
    axios.get('http://phish.in/api/v1/years')
      .then(resp => {
        let { data } = resp.data;
        this.setState({ data });
      });
  }
  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </div>
        <nav className="">
          {this.state.data.map((year, i) =>
            <button key={i}>{year}</button>
          )}
        </nav>

        <div className="NowPlaying">
          <p>song name</p>
          <p>date - venue</p>
          <p>time elapsed / time remaining</p>
        </div>
        <
        {/* <EraList /> */}
      </div>
    );
  }
}

export default App;

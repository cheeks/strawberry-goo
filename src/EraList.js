import React, { Component } from 'react';
import logo from './logo.svg';
// import './EraList.css';
import axios from 'axios';
import Year from './Year';

class EraList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      erasData: {}
    };
  }
  componentDidMount () {
    axios.get('http://phish.in/api/v1/eras')
      .then(resp => {
        this.setState({ erasData: resp.data.data });
      });
  }

  render() {
    let eras = [];
    console.log(this.state.erasData)
    for (let era in this.state.erasData) {
      eras.push(era);
    }
    return (
      <div className="EraList">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Eras</h2>
        </div>
        {eras.map(era =>
          <div>
          <h3>{era}</h3>
            {this.state.erasData[era].map(yearData =>
              <Year id={yearData} />
            )}
        </div>
        )}

      </div>
    );
  }
}

export default EraList;

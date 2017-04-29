import React, { Component } from 'react';
// import logo from './logo.svg';
// import './EraList.css';
// import axios from 'axios';

class Year extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="Year">
        <p>{this.props.id}</p>
      </div>
    );
  }
}

export default Year;

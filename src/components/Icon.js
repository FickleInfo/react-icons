import React, { Component } from 'react';
import './fontawesome/css/font-awesome.css';

export class Icon extends Component {
  render() {
    return (
      <i className={this.props.name}></i>
    );
  }
}
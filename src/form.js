import React from 'react';

class Input extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

module.exports.Input = Input;

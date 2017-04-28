import React from 'react';

class File extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

module.exports.File = File;

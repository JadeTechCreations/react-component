import React from 'react';

class Text extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

module.exports.Text = Text;

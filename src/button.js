import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button type="button">Click Me {this.props.name}!</button>
    );
  }
}

module.exports.Button = Button;

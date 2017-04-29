import React from 'react';

class Text extends React.Component {
  render() {
    return (
      <input type="text" name="name" value={this.props.name}/>
    );
  }
}

module.exports.Text = Text;

import React from 'react';

class File extends React.Component {
  render() {
    const {name} = this.props;
    return (
      <div>
        <input type="file" id="input" />
        <span>{name}</span>
      </div>
    );
  }
}

module.exports.File = File;

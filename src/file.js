import React from 'react'; //eslint-disable-line

class File extends React.Component {
  render() {
    const { containerClassName, hint, name, ...rest } = this.props;

    return (
      <div className={containerClassName}>
        <input
          type="file"
          id="input" {...rest} />
        <span>{name}</span>
        {hint}
      </div>
    );
  }
}

module.exports.File = File;

import React from 'react'; //eslint-disable-line

class Button extends React.Component {
  render() {
    const { containerClassName, hint, ...rest } = this.props;

    return (
      <div className={containerClassName}>
        <button
          type="button" {...rest}>
          Click Me {this.props.name}!
        </button>
        {hint}
      </div>
    );
  }
}

module.exports.Button = Button;

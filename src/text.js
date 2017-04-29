import React from 'react';

class Text extends React.Component {
  render() {
    const { containerClassName, hint, ...rest } = this.props;

    return (
      <div className={containerClassName}>
          <input
            {...rest}
            type='text'
            className={this.props.className}
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
            value={this.props.value}
          />
          {hint}
      </div>
    );
  }
}

module.exports.Text = Text;

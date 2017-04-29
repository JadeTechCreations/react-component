import React from 'react';

class Checkbox extends React.Component {
  render() {
    const { containerClassName, hint, ...rest } = this.props;

    return (
      <div className={containerClassName}>
        <input
          type="checkbox"
          id="subscribeNews"
          name="subscribe"
          value="newsletter" {...rest}/>
        <label for="subscribeNews">Subscribe to {this.props.name} newsletter?</label>
        {hint}
      </div>
    );
  }
}

module.exports.Checkbox = Checkbox;

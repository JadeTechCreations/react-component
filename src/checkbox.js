import React from 'react';

class Checkbox extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter" />
        <label for="subscribeNews">Subscribe to {this.props.name} newsletter?</label>
      </div>
    );
  }
}

module.exports.Checkbox = Checkbox;

import React from 'react';

class Select extends React.Component {
  render() {
    const { containerClassName, hint, ...rest } = this.props;

    return (
      <div className={containerClassName}>
        <select {...rest}>
          <option value="">Select One</option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </div>
    );
  }
}

module.exports.Select = Select;

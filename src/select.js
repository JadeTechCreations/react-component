import React from 'react';

class Select extends React.Component {
  render() {
    return (
      <div>
      <select>
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

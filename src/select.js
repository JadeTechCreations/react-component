import React from 'react'; //eslint-disable-line
import selectFactory from './selectFactory';

class Select extends React.Component {
  render() {
    const { containerClassName, hint, ...rest } = this.props;

    return (
      <div className={containerClassName}>
        <select {...rest} value={this.props.value}>
          <option value=''>Select One</option>
          {this.props.children}
        </select>
        {hint}
      </div>
    );
  }
}

module.exports.Select = selectFactory(Select);

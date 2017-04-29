import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        {this.props.name}
      </form>
    );
  }
}

module.exports.Form = Form;

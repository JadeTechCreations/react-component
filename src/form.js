import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        {this.props.name}
        {this.props.children}
      </form>
    );
  }
}

module.exports.Form = Form;

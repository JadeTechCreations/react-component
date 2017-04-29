import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          {this.props.name}
        </div>
        <div>
          {this.props.children}
        </div>
      </form>
    );
  }
}

module.exports.Form = Form;

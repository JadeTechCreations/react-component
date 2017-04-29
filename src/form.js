import React, {Component} from 'react';

class Form extends Component {
  render() {
    const { containerClassName, hint, ...rest } = this.props;

    return (
      <div className={containerClassName}>
        {hint}
        <form {...rest}>
          {this.props.children}
        </form>
      </div>
    );
  }
}

module.exports.Form = Form;

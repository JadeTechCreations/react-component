import React from 'react'; //eslint-disable-line
import validator from 'validator';

export default {
  email: {
    rule: value => validator.isEmail(value),
    hint: value => <span className="form-error is-visible">{value} is not an Email.</span>
  },
  required: {
    rule: value => value.toString().trim(),
    hint: () => <span className="form-error is-visible">Required</span>
  },
  requiredFile: {
    rule: value => {
      return value.length > 0;
    },
    hint: () => <span className="form-error is-visible">Required</span>
  }
};

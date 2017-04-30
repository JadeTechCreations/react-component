'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rules = {
  email: {
    rule: function rule(value) {
      return _validator2.default.isEmail(value);
    },
    hint: function hint(value) {
      return _react2.default.createElement(
        'span',
        { className: 'form-error is-visible' },
        value,
        ' is not an Email.'
      );
    }
  },
  required: {
    rule: function rule(value) {
      return value.toString().trim();
    },
    hint: function hint() {
      return _react2.default.createElement(
        'span',
        { className: 'form-error is-visible' },
        'Required'
      );
    }
  },
  requiredFile: {
    rule: function rule(value) {
      return value.length > 0;
    },
    hint: function hint() {
      return _react2.default.createElement(
        'span',
        { className: 'form-error is-visible' },
        'Required'
      );
    }
  }
}; //eslint-disable-line
exports.default = rules;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validator = require("validator");

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  email: {
    rule: function rule(value) {
      return _validator2.default.isEmail(value);
    },
    hint: function hint(value) {
      return React.createElement(
        "span",
        { className: "form-error is-visible" },
        value,
        " is not an Email."
      );
    }
  },
  required: {
    rule: function rule(value) {
      return value.toString().trim();
    },
    hint: function hint() {
      return React.createElement(
        "span",
        { className: "form-error is-visible" },
        "Required"
      );
    }
  },
  requiredFile: {
    rule: function rule(value) {
      return value.length > 0;
    },
    hint: function hint() {
      return React.createElement(
        "span",
        { className: "form-error is-visible" },
        "Required"
      );
    }
  }
};
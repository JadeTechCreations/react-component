"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
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
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = inputFactory;

var _react = require('react');

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _rules = require('./rules');

var _rules2 = _interopRequireDefault(_rules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function inputFactory(WrappedComponent) {
  var CustomInput = function (_Base) {
    _inherits(CustomInput, _Base);

    function CustomInput(props, context) {
      _classCallCheck(this, CustomInput);

      var _this = _possibleConstructorReturn(this, (CustomInput.__proto__ || Object.getPrototypeOf(CustomInput)).call(this, props, context));

      var isCheckbox = !!(props.type === 'checkbox' || props.type === 'radio');
      var checkboxValue = props.checked ? props.value : '';

      // TODO: Refactor conditions
      _this.state = {
        value: isCheckbox ? checkboxValue : props.value,
        //   isChanged: isCheckbox ? props.checked : !!props.value,
        //   isCheckbox,
        isUsed: isCheckbox // ,
        //   isChecked: isCheckbox ? !!props.checked : true
      };

      context.register(_this);
      return _this;
    }

    _createClass(CustomInput, [{
      key: 'render',
      value: function render() {
        var _cx, _cx2;

        var _props = this.props,
            validations = _props.validations,
            errorClassName = _props.errorClassName,
            containerClassName = _props.containerClassName,
            errorContainerClassName = _props.errorContainerClassName,
            className = _props.className,
            value = _props.value,
            onChange = _props.onChange,
            onBlur = _props.onBlur,
            rest = _objectWithoutProperties(_props, ['validations', 'errorClassName', 'containerClassName', 'errorContainerClassName', 'className', 'value', 'onChange', 'onBlur']);

        var isInvalid = this.state.isUsed && this.state.isChanged && !!this.context.errors[this.props.name];
        var changedValue = this.state.isCheckbox ? this.props.value : this.state.value;
        var error = isInvalid && this.context.errors[this.props.name][0];
        var hint = null;

        if (isInvalid) {
          hint = typeof error === 'function' ? error(changedValue, this.context.components) : _rules2.default[error].hint(changedValue, this.context.components);
        }

        var wrappedProps = _extends({
          containerClassName: (0, _classnames2.default)((_cx = {}, _defineProperty(_cx, containerClassName, !!containerClassName), _defineProperty(_cx, errorContainerClassName, !!error && errorContainerClassName), _cx)),
          className: (0, _classnames2.default)((_cx2 = {}, _defineProperty(_cx2, className, !!className), _defineProperty(_cx2, errorClassName, !!error && errorClassName), _cx2)),
          // checked: this.state.isChecked,
          onChange: this.onChange,
          onBlur: this.onBlur,
          type: this.props.type || 'text',
          value: changedValue,
          hint: hint
        }, rest);

        return (0, _react.createElement)(WrappedComponent, wrappedProps);
      }
    }]);

    return CustomInput;
  }(_base2.default);

  CustomInput.propTypes = {
    validations: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
    errorClassName: _react.PropTypes.string,
    containerClassName: _react.PropTypes.string,
    errorContainerClassName: _react.PropTypes.string
  };
  CustomInput.contextTypes = {
    register: _react.PropTypes.func.isRequired,
    unregister: _react.PropTypes.func.isRequired,
    validateState: _react.PropTypes.func.isRequired,
    components: _react.PropTypes.objectOf(_react.PropTypes.any),
    errors: _react.PropTypes.objectOf(_react.PropTypes.array)
  };


  return CustomInput;
}
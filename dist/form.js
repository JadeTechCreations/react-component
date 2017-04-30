'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rules = require('./rules');

var _rules2 = _interopRequireDefault(_rules);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //eslint-disable-line


var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.getErrors = function () {
      return Object.keys(_this.components).reduce(function (prev, name) {
        var component = _this.components[name];
        var validations = component.props.validations;
        var length = validations.length;

        for (var i = 0; i < length; i += 1) {
          if (!_rules2.default[validations[i]].rule(component.state.value, _this.components)) {
            /* eslint-disable */
            prev[name] = prev[name] || [];
            prev[name].push(validations[i]);
            /* eslint-enable */
          }
        }

        return prev;
      }, {});
    };

    _this.register = function (component) {
      _this.components[component.props.name] = component;
    };

    _this.unregister = function (component) {
      var errors = _extends({}, _this.state.errors);

      delete _this.components[component.props.name];
      delete errors[component.props.name];

      _this.setState({ errors: errors });
    };

    _this.validateState = function () {
      var errors = _this.getErrors();

      _this.setState({ errors: errors });
    };

    _this.validate = function (name) {
      _this.components[name].setState({
        isUsed: true,
        isChanged: true
      }, _this.validateState);
    };

    _this.showError = function (name, error) {
      _this.components[name].setState({
        isUsed: true,
        isChanged: true
      }, function () {
        _this.setState({
          errors: _extends({}, _this.state.errors, _defineProperty({}, name, [error]))
        });
      });
    };

    _this.hideError = function (name) {
      var errors = _extends({}, _this.state.errors);

      delete errors[name];

      _this.setState({ errors: errors });
    };

    _this.components = {};

    _this.state = {
      errors: {}
    };
    return _this;
  }

  _createClass(Form, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        register: this.register,
        unregister: this.unregister,
        validateState: this.validateState,
        components: this.components,
        errors: this.state.errors
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.validateState();
    }
  }, {
    key: 'validateAll',
    value: function validateAll() {
      var _this2 = this;

      Object.keys(this.components).forEach(function (name) {
        _this2.components[name].setState({
          isUsed: true,
          isChanged: true
        });
      });

      return this.getErrors();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          containerClassName = _props.containerClassName,
          hint = _props.hint,
          rest = _objectWithoutProperties(_props, ['containerClassName', 'hint']);

      return _react2.default.createElement(
        'div',
        { className: containerClassName },
        hint,
        _react2.default.createElement(
          'form',
          rest,
          this.props.children
        )
      );
    }
  }]);

  return Form;
}(_react.Component);

Form.propTypes = {
  children: _react.PropTypes.node
};
Form.childContextTypes = {
  register: _react.PropTypes.func.isRequired,
  unregister: _react.PropTypes.func.isRequired,
  validateState: _react.PropTypes.func.isRequired,
  components: _react.PropTypes.objectOf(_react.PropTypes.instanceOf(_base2.default)),
  errors: _react.PropTypes.objectOf(_react.PropTypes.array)
};


module.exports.Form = Form;
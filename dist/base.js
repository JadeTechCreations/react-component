'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _noop = require('./utils/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base = function (_Component) {
  _inherits(Base, _Component);

  function Base() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Base);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Base.__proto__ || Object.getPrototypeOf(Base)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (event) {
      // TODO: Refactor conditions
      var isChecked = _this.state.isCheckbox ? !_this.state.isChecked : true;
      var checkboxValue = isChecked ? event.target.value : '';
      var value = _this.state.isCheckbox ? checkboxValue : event.target.value;

      event.persist();

      _this.setState({
        value: value,
        isChanged: true,
        isChecked: isChecked
      }, function () {
        _this.context.validateState(_this.props.name);

        (_this.props.onChange || _noop2.default)(event);
      });
    }, _this.onBlur = function (event) {
      event.persist();

      _this.setState({
        isUsed: true
      }, function () {
        _this.context.validateState(_this.props.name);

        (_this.props.onBlur || _noop2.default)(event);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Base, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.value !== this.props.value) {
        this.setState({
          value: nextProps.value,
          isChanged: true
        }, function () {
          _this2.context.validateState(_this2.props.name);
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.context.unregister(this);
    }
  }]);

  return Base;
}(_react.Component);

Base.propTypes = {
  name: _react.PropTypes.string.isRequired
};
Base.contextTypes = {
  register: _react.PropTypes.func.isRequired,
  unregister: _react.PropTypes.func.isRequired,
  validateState: _react.PropTypes.func.isRequired,
  components: _react.PropTypes.objectOf(_react.PropTypes.any),
  errors: _react.PropTypes.objectOf(_react.PropTypes.array)
};
exports.default = Base;
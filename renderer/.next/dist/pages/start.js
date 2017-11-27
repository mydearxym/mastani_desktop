'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _electron = require('electron');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/xieyiming/code/mastani_desktop/with-electron/renderer/pages/start.js?entry';


var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      input: '',
      message: null
    }, _this.handleMessage = function (event, message) {
      // receive a message from the main process and save it in the local state
      _this.setState({ message: message });
    }, _this.handleChange = function (event) {
      _this.setState({ input: event.target.value });
    }, _this.handleSubmit = function (event) {
      event.preventDefault();
      _electron.ipcRenderer.send('message', _this.state.input);
      _this.setState({ message: null });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // start listening the channel message
      _electron.ipcRenderer.on('message', this.handleMessage);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // stop listening the channel message
      _electron.ipcRenderer.removeListener('message', this.handleMessage);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-1912268166',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-1912268166',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'Hello Electron!'), this.state.message && _react2.default.createElement('p', {
        className: 'jsx-1912268166',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, this.state.message), _react2.default.createElement('form', { onSubmit: this.handleSubmit, className: 'jsx-1912268166',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('input', { type: 'text', onChange: this.handleChange, className: 'jsx-1912268166',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })), _react2.default.createElement(_style2.default, {
        styleId: '1912268166',
        css: 'h1.jsx-1912268166{color:red;font-size:50px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL3BhZ2VzL3N0YXJ0LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDb0IsQUFHdUIsVUFDSyxlQUNqQiIsImZpbGUiOiJyZW5kZXJlci9wYWdlcy9zdGFydC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMveGlleWltaW5nL2NvZGUvbWFzdGFuaV9kZXNrdG9wL3dpdGgtZWxlY3Ryb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGlwY1JlbmRlcmVyIH0gZnJvbSAnZWxlY3Ryb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgaW5wdXQ6ICcnLFxuICAgIG1lc3NhZ2U6IG51bGxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAvLyBzdGFydCBsaXN0ZW5pbmcgdGhlIGNoYW5uZWwgbWVzc2FnZVxuICAgIGlwY1JlbmRlcmVyLm9uKCdtZXNzYWdlJywgdGhpcy5oYW5kbGVNZXNzYWdlKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIC8vIHN0b3AgbGlzdGVuaW5nIHRoZSBjaGFubmVsIG1lc3NhZ2VcbiAgICBpcGNSZW5kZXJlci5yZW1vdmVMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuaGFuZGxlTWVzc2FnZSlcbiAgfVxuXG4gIGhhbmRsZU1lc3NhZ2UgPSAoZXZlbnQsIG1lc3NhZ2UpID0+IHtcbiAgICAvLyByZWNlaXZlIGEgbWVzc2FnZSBmcm9tIHRoZSBtYWluIHByb2Nlc3MgYW5kIHNhdmUgaXQgaW4gdGhlIGxvY2FsIHN0YXRlXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2UgfSlcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICB9XG5cbiAgaGFuZGxlU3VibWl0ID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBpcGNSZW5kZXJlci5zZW5kKCdtZXNzYWdlJywgdGhpcy5zdGF0ZS5pbnB1dClcbiAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZTogbnVsbCB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkhlbGxvIEVsZWN0cm9uITwvaDE+XG5cbiAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZSAmJlxuICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9wPlxuICAgICAgICB9XG5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=renderer/pages/start.js?entry */'
      }));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL3BhZ2VzL3N0YXJ0LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImlwY1JlbmRlcmVyIiwic3RhdGUiLCJpbnB1dCIsIm1lc3NhZ2UiLCJoYW5kbGVNZXNzYWdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzZW5kIiwib24iLCJyZW1vdmVMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0TSxBQUdQO2FBQVEsQUFDQyxBQUNQO2VBRk0sQUFFRyxBO0FBRkgsQUFDTixhLEFBY0YsZ0JBQWdCLFVBQUEsQUFBQyxPQUFELEFBQVEsU0FBWSxBQUNsQztBQUNBO1lBQUEsQUFBSyxTQUFTLEVBQUUsU0FBaEIsQUFBYyxBQUNmO0EsYUFFRCxBLGVBQWUsaUJBQVMsQUFDdEI7WUFBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLE1BQUEsQUFBTSxPQUE3QixBQUFjLEFBQXNCLEFBQ3JDO0EsYSxBQUVELGVBQWUsaUJBQVMsQUFDdEI7WUFBQSxBQUFNLEFBQ047NEJBQUEsQUFBWSxLQUFaLEFBQWlCLFdBQVcsTUFBQSxBQUFLLE1BQWpDLEFBQXVDLEFBQ3ZDO1lBQUEsQUFBSyxTQUFTLEVBQUUsU0FBaEIsQUFBYyxBQUFXLEFBQzFCO0E7Ozs7O3dDQXZCb0IsQUFDbkI7QUFDQTs0QkFBQSxBQUFZLEdBQVosQUFBZSxXQUFXLEtBQTFCLEFBQStCLEFBQ2hDOzs7OzJDQUV1QixBQUN0QjtBQUNBOzRCQUFBLEFBQVksZUFBWixBQUEyQixXQUFXLEtBQXRDLEFBQTJDLEFBQzVDOzs7OzZCQWlCUyxBQUNSOzZCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUVDLHlCQUFBLEFBQUssTUFBTCxBQUFXLDJCQUNWLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLE9BQUEsT0FBSSxBQUFLLE1BSmIsQUFJSSxBQUFlLEFBR2pCLDBCQUFBLGNBQUEsVUFBTSxVQUFVLEtBQWhCLEFBQXFCLHlCQUFyQjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO2tEQUNTLE1BQVAsQUFBWSxRQUFPLFVBQVUsS0FBN0IsQUFBa0MseUJBQWxDOztvQkFBQTtzQkFSSixBQU9FLEFBQ0U7QUFBQTs7aUJBUko7YUFERixBQUNFLEFBbUJIO0FBbkJHOzs7OztBQWpDdUIsQSIsImZpbGUiOiJzdGFydC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMveGlleWltaW5nL2NvZGUvbWFzdGFuaV9kZXNrdG9wL3dpdGgtZWxlY3Ryb24ifQ==
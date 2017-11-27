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

var _jsxFileName = '/Users/xieyiming/code/mastani_desktop/renderer/pages/start.js?entry';


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
        css: 'h1.jsx-1912268166{color:red;font-size:50px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL3BhZ2VzL3N0YXJ0LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDb0IsQUFHdUIsVUFDSyxlQUNqQiIsImZpbGUiOiJyZW5kZXJlci9wYWdlcy9zdGFydC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMveGlleWltaW5nL2NvZGUvbWFzdGFuaV9kZXNrdG9wIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBpcGNSZW5kZXJlciB9IGZyb20gJ2VsZWN0cm9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGlucHV0OiAnJyxcbiAgICBtZXNzYWdlOiBudWxsXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgLy8gc3RhcnQgbGlzdGVuaW5nIHRoZSBjaGFubmVsIG1lc3NhZ2VcbiAgICBpcGNSZW5kZXJlci5vbignbWVzc2FnZScsIHRoaXMuaGFuZGxlTWVzc2FnZSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICAvLyBzdG9wIGxpc3RlbmluZyB0aGUgY2hhbm5lbCBtZXNzYWdlXG4gICAgaXBjUmVuZGVyZXIucmVtb3ZlTGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLmhhbmRsZU1lc3NhZ2UpXG4gIH1cblxuICBoYW5kbGVNZXNzYWdlID0gKGV2ZW50LCBtZXNzYWdlKSA9PiB7XG4gICAgLy8gcmVjZWl2ZSBhIG1lc3NhZ2UgZnJvbSB0aGUgbWFpbiBwcm9jZXNzIGFuZCBzYXZlIGl0IGluIHRoZSBsb2NhbCBzdGF0ZVxuICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlIH0pXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0OiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaXBjUmVuZGVyZXIuc2VuZCgnbWVzc2FnZScsIHRoaXMuc3RhdGUuaW5wdXQpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1lc3NhZ2U6IG51bGwgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5IZWxsbyBFbGVjdHJvbiE8L2gxPlxuXG4gICAgICAgIHt0aGlzLnN0YXRlLm1lc3NhZ2UgJiZcbiAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvcD5cbiAgICAgICAgfVxuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBoMSB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=renderer/pages/start.js?entry */'
      }));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyL3BhZ2VzL3N0YXJ0LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImlwY1JlbmRlcmVyIiwic3RhdGUiLCJpbnB1dCIsIm1lc3NhZ2UiLCJoYW5kbGVNZXNzYWdlIiwiZXZlbnQiLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzZW5kIiwib24iLCJyZW1vdmVMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0TSxBQUdQO2FBQVEsQUFDQyxBQUNQO2VBRk0sQUFFRyxBO0FBRkgsQUFDTixhLEFBY0YsZ0JBQWdCLFVBQUEsQUFBQyxPQUFELEFBQVEsU0FBWSxBQUNsQztBQUNBO1lBQUEsQUFBSyxTQUFTLEVBQUUsU0FBaEIsQUFBYyxBQUNmO0EsYUFFRCxBLGVBQWUsaUJBQVMsQUFDdEI7WUFBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLE1BQUEsQUFBTSxPQUE3QixBQUFjLEFBQXNCLEFBQ3JDO0EsYSxBQUVELGVBQWUsaUJBQVMsQUFDdEI7WUFBQSxBQUFNLEFBQ047NEJBQUEsQUFBWSxLQUFaLEFBQWlCLFdBQVcsTUFBQSxBQUFLLE1BQWpDLEFBQXVDLEFBQ3ZDO1lBQUEsQUFBSyxTQUFTLEVBQUUsU0FBaEIsQUFBYyxBQUFXLEFBQzFCO0E7Ozs7O3dDQXZCb0IsQUFDbkI7QUFDQTs0QkFBQSxBQUFZLEdBQVosQUFBZSxXQUFXLEtBQTFCLEFBQStCLEFBQ2hDOzs7OzJDQUV1QixBQUN0QjtBQUNBOzRCQUFBLEFBQVksZUFBWixBQUEyQixXQUFXLEtBQXRDLEFBQTJDLEFBQzVDOzs7OzZCQWlCUyxBQUNSOzZCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUVDLHlCQUFBLEFBQUssTUFBTCxBQUFXLDJCQUNWLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLE9BQUEsT0FBSSxBQUFLLE1BSmIsQUFJSSxBQUFlLEFBR2pCLDBCQUFBLGNBQUEsVUFBTSxVQUFVLEtBQWhCLEFBQXFCLHlCQUFyQjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO2tEQUNTLE1BQVAsQUFBWSxRQUFPLFVBQVUsS0FBN0IsQUFBa0MseUJBQWxDOztvQkFBQTtzQkFSSixBQU9FLEFBQ0U7QUFBQTs7aUJBUko7YUFERixBQUNFLEFBbUJIO0FBbkJHOzs7OztBQWpDdUIsQSIsImZpbGUiOiJzdGFydC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMveGlleWltaW5nL2NvZGUvbWFzdGFuaV9kZXNrdG9wIn0=
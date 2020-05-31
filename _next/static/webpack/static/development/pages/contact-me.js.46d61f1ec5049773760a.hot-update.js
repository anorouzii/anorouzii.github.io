webpackHotUpdate("static\\development\\pages\\contact-me.js",{

/***/ "./pages/contact-me.js":
/*!*****************************!*\
  !*** ./pages/contact-me.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "D:\\Projects\\Anorouzi.ir\\SSR\\pages\\contact-me.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Contact = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Contact, _React$Component);

  var _super = _createSuper(Contact);

  function Contact(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Contact);

    _this = _super.call(this, props);
    _this.state = {
      name: '',
      message: '',
      email: '',
      alert: '',
      error: false,
      successSent: false
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Contact, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.name, event.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var re = /\S+@\S+\.\S+/;

      if (this.state.message.length === 0) {
        this.setState({
          error: true,
          alert: 'Message can\'t be empty.'
        });
        setTimeout(function () {
          _this2.setState({
            error: false,
            alert: ''
          });
        }, 2000);
      } else if (this.state.email.length === 0) {
        this.setState({
          error: true,
          alert: 'Email address can\'t be empty.'
        });
        setTimeout(function () {
          _this2.setState({
            error: false,
            alert: ''
          });
        }, 2000);
      } else if (!re.test(this.state.email)) {
        this.setState({
          error: true,
          alert: 'Please enter a valid email address'
        });
        setTimeout(function () {
          _this2.setState({
            error: false,
            alert: ''
          });
        }, 2000);
      } else {
        var formData = {
          "email": this.state.email,
          "message": this.state.message,
          "name": this.state.name
        };
        var MsgApi = 'https://radiant-woodland-61373.herokuapp.com/';
        fetch(MsgApi, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }).then(function (res) {
          return res.json();
        }).then(function (res) {
          _this2.setState({
            name: '',
            message: '',
            email: ''
          });

          _this2.setState({
            successSent: true,
            alert: 'Your message sent successfully.'
          });

          setTimeout(function () {
            _this2.setState({
              successSent: false,
              alert: ''
            });
          }, 2000);
        })["catch"](function (error) {
          _this2.setState({
            error: true,
            alert: 'An error occurred while sending the message.'
          });

          setTimeout(function () {
            _this2.setState({
              error: false,
              alert: ''
            });
          }, 2000);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("main", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }
      }, "Contact Me")), __jsx("form", {
        className: "form-wrapper",
        onSubmit: this.handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }
      }, this.state.successSent && __jsx("div", {
        className: "form-status green",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 48
        }
      }, this.state.alert), this.state.error && __jsx("div", {
        className: "form-status red",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 42
        }
      }, this.state.alert), __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "col-50",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }
      }, __jsx("input", {
        name: "email",
        onChange: this.handleChange,
        value: this.state.email,
        placeholder: "Email",
        type: "text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 29
        }
      })), __jsx("div", {
        className: "col-50",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }
      }, __jsx("input", {
        name: "name",
        onChange: this.handleChange,
        value: this.state.name,
        className: "name-input",
        placeholder: "Name (optional)",
        type: "text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 29
        }
      }))), __jsx("textarea", {
        onChange: this.handleChange,
        value: this.state.message,
        placeholder: "Message",
        name: "message",
        id: "",
        cols: "30",
        rows: "10",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }
      }), __jsx("button", {
        style: {
          marginTop: '20px'
        },
        className: "btn btn-blue",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }
      }, "Submit")), __jsx("div", {
        className: "email-address",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }
      }, "You can also contact me via anorouziiii[at].gmail.com"));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LW1lLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3QiLCJwcm9wcyIsInN0YXRlIiwibmFtZSIsIm1lc3NhZ2UiLCJlbWFpbCIsImFsZXJ0IiwiZXJyb3IiLCJzdWNjZXNzU2VudCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZSIsImxlbmd0aCIsInNldFRpbWVvdXQiLCJ0ZXN0IiwiZm9ybURhdGEiLCJNc2dBcGkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwibWFyZ2luVG9wIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsTzs7Ozs7QUFFRixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBRyxFQURFO0FBRVRDLGFBQU8sRUFBRyxFQUZEO0FBR1RDLFdBQUssRUFBRyxFQUhDO0FBSVRDLFdBQUssRUFBRyxFQUpDO0FBS1RDLFdBQUssRUFBRyxLQUxDO0FBTVRDLGlCQUFXLEVBQUc7QUFOTCxLQUFiO0FBUUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQix5R0FBcEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLHlHQUFwQjtBQVhlO0FBWWxCOzs7O2lDQUNZRSxLLEVBQU87QUFDaEIsV0FBS0MsUUFBTCwrRkFBZ0JELEtBQUssQ0FBQ0UsTUFBTixDQUFhWCxJQUE3QixFQUFvQ1MsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQWpEO0FB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFRLEVBQUUsS0FBS0ksWUFBbEM7QUFBZ0QsYUFBSyxFQUFFLEtBQUtQLEtBQUwsQ0FBV0MsSUFBbEU7QUFBd0UsaUJBQVMsRUFBQyxZQUFsRjtBQUErRixtQkFBVyxFQUFDLGlCQUEzRztBQUE2SCxZQUFJLEVBQUMsTUFBbEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBSkosQ0FISixFQVdJO0FBQVUsZ0JBQVEsRUFBRSxLQUFLTSxZQUF6QjtBQUF1QyxhQUFLLEVBQUUsS0FBS1AsS0FBTCxDQUFXRSxPQUF6RDtBQUFrRSxtQkFBVyxFQUFDLFNBQTlFO0FBQXdGLFlBQUksRUFBQyxTQUE3RjtBQUF1RyxVQUFFLEVBQUMsRUFBMUc7QUFBNkcsWUFBSSxFQUFDLElBQWxIO0FBQXVILFlBQUksRUFBQyxJQUE1SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBWEosRUFZSTtBQUFRLGFBQUssRUFBRTtBQUFDNkIsbUJBQVMsRUFBRTtBQUFaLFNBQWY7QUFBb0MsaUJBQVMsRUFBQyxjQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpKLENBSkosRUFrQkk7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpRUFsQkosQ0FESjtBQXNCSDs7OztFQXRGaUJDLDRDQUFLLENBQUNDLFM7O0FBeUZibkMsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNvbnRhY3QtbWUuanMuNDZkNjFmMWVjNTA0OTc3Mzc2MGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmNsYXNzIENvbnRhY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG5hbWUgOiAnJyxcclxuICAgICAgICAgICAgbWVzc2FnZSA6ICcnLFxyXG4gICAgICAgICAgICBlbWFpbCA6ICcnLFxyXG4gICAgICAgICAgICBhbGVydCA6ICcnLFxyXG4gICAgICAgICAgICBlcnJvciA6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdWNjZXNzU2VudCA6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgcmUgPSAvXFxTK0BcXFMrXFwuXFxTKy87XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubWVzc2FnZS5sZW5ndGggPT09IDAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yIDogdHJ1ZSxhbGVydCA6ICdNZXNzYWdlIGNhblxcJ3QgYmUgZW1wdHkuJ30pO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3IgOiBmYWxzZSxhbGVydCA6ICcnfSlcclxuICAgICAgICAgICAgfSwyMDAwKVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5lbWFpbC5sZW5ndGggPT09IDAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yIDogdHJ1ZSxhbGVydCA6ICdFbWFpbCBhZGRyZXNzIGNhblxcJ3QgYmUgZW1wdHkuJ30pO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3IgOiBmYWxzZSxhbGVydCA6ICcnfSlcclxuICAgICAgICAgICAgfSwyMDAwKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoIXJlLnRlc3QodGhpcy5zdGF0ZS5lbWFpbCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3IgOiB0cnVlLCBhbGVydCA6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ30pO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCAoKT0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yIDogZmFsc2UsYWxlcnQgOiAnJ30pO1xyXG4gICAgICAgICAgICB9LDIwMDApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0geyBcImVtYWlsXCIgOiB0aGlzLnN0YXRlLmVtYWlsICwgXCJtZXNzYWdlXCIgOiB0aGlzLnN0YXRlLm1lc3NhZ2UgLCBcIm5hbWVcIiA6IHRoaXMuc3RhdGUubmFtZSAgfTtcclxuICAgICAgICAgICAgY29uc3QgTXNnQXBpID0gJ2h0dHBzOi8vcmFkaWFudC13b29kbGFuZC02MTM3My5oZXJva3VhcHAuY29tLyc7XHJcblxyXG4gICAgICAgICAgICBmZXRjaChNc2dBcGksIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSlcclxuICAgICAgICAgICAgfSkudGhlbihyZXM9PnJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6JycsbWVzc2FnZTonJyxlbWFpbDonJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N1Y2Nlc3NTZW50IDogdHJ1ZSxhbGVydDonWW91ciBtZXNzYWdlIHNlbnQgc3VjY2Vzc2Z1bGx5Lid9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCAoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c3VjY2Vzc1NlbnQgOiBmYWxzZSxhbGVydCA6ICcnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwyMDAwKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvciA6IHRydWUsYWxlcnQ6J0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIHNlbmRpbmcgdGhlIG1lc3NhZ2UuJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvciA6IGZhbHNlLGFsZXJ0IDogJyd9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LDIwMDApXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+Q29udGFjdCBNZTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2Zvcm0td3JhcHBlcicgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWNjZXNzU2VudCAmJiA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1zdGF0dXMgZ3JlZW4nPnt0aGlzLnN0YXRlLmFsZXJ0fTwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1zdGF0dXMgcmVkJz57dGhpcy5zdGF0ZS5hbGVydH08L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9J2VtYWlsJyBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBwbGFjZWhvbGRlcj0nRW1haWwnIHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC01MCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT0nbmFtZScgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBjbGFzc05hbWU9J25hbWUtaW5wdXQnIHBsYWNlaG9sZGVyPSdOYW1lIChvcHRpb25hbCknIHR5cGU9XCJ0ZXh0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5tZXNzYWdlfSBwbGFjZWhvbGRlcj0nTWVzc2FnZScgbmFtZT1cIm1lc3NhZ2VcIiBpZD1cIlwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7bWFyZ2luVG9wOiAnMjBweCd9fSBjbGFzc05hbWU9J2J0biBidG4tYmx1ZSc+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZW1haWwtYWRkcmVzcyc+WW91IGNhbiBhbHNvIGNvbnRhY3QgbWUgdmlhIGFub3JvdXppaWlpW2F0XS5nbWFpbC5jb208L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
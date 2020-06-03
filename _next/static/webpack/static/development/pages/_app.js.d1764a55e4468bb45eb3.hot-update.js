webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_sass_style_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sass/style.global.scss */ "./components/sass/style.global.scss");
/* harmony import */ var _components_sass_style_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_sass_style_global_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\Projects\\Anorouzi.ir\\SSR\\pages\\_app.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      dark = _useState[0],
      setDark = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: dark ? 'dark-mode-toggle dark' : 'dark-mode-toggle white',
    onClick: function onClick() {
      return setDark(!dark);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("svg", {
    className: "moon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "black",
    width: "20px",
    height: "20px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 134
    }
  }), __jsx("path", {
    d: "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 171
    }
  })), __jsx("svg", {
    className: "son",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "white",
    width: "20px",
    height: "20px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 133
    }
  }), __jsx("path", {
    d: "M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 170
    }
  }))), dark && __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "563608274",
    __self: this
  }, "body{background:#272727;color:#bfbfbf;}.logo svg{stroke:#fff;}.social svg{fill:#cbcbcb;}h1,h2,h3,h4,h5,h6{color:#f8f8f8;}.btn-blue{background-color:#393939;box-shadow:0 4px 14px 0 rgb(12,12,12);border:2px solid #393939;}.btn-outline{background:transparent;color:#c1c1c1;}input[type=text],textarea{width:100%;border:none;background:#393939;color:#bfbfbf;}.back-btn{background:#393939;border:none;}.post-time{border:1px solid #484848;}.post-item .continue-reading{color:#90caf9;}.post-time{background:transparent;}code[class*=language-],pre[class*=language-]{background:#1e1e1e;color:#6f7694;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xcQW5vcm91emkuaXJcXFNTUlxccGFnZXNcXF9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUIrQixBQUVrQyxBQUNILEFBQ0csQUFDYSxBQUNILEFBQ0MsQUFDRyxBQUNWLEFBQ08sQUFDTyxBQUNULEFBQytCLFdBTGQsQ0FMNUIsQ0FDRyxDQUNhLEFBTUssS0FUTCxBQU9FLEFBSXNDLElBTjdCLEFBQ29CLEFBSW5DLEVBTndDLEFBSXRDLE1BREssRUFQRixBQVd3QyxJQU43QixLQUNnQyxjQUFDLE9BRmdCLHlCQUFDIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xcQW5vcm91emkuaXJcXFNTUlxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2NvbXBvbmVudHMvc2Fzcy9zdHlsZS5nbG9iYWwuc2Nzcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCBGcmFnbWVudH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSB7XHJcbiAgICBjb25zdCBbZGFyaywgc2V0RGFya10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYXJrID8gJ2RhcmstbW9kZS10b2dnbGUgZGFyaycgOiAnZGFyay1tb2RlLXRvZ2dsZSB3aGl0ZSd9IG9uQ2xpY2s9eygpID0+IHNldERhcmsoIWRhcmspfT5cclxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdtb29uJyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJibGFja1wiIHdpZHRoPVwiMjBweFwiIGhlaWdodD1cIjIwcHhcIj48cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPjxwYXRoIGQ9XCJNMjAgOC42OVY0aC00LjY5TDEyIC42OSA4LjY5IDRINHY0LjY5TC42OSAxMiA0IDE1LjMxVjIwaDQuNjlMMTIgMjMuMzEgMTUuMzEgMjBIMjB2LTQuNjlMMjMuMzEgMTIgMjAgOC42OXpNMTIgMThjLTMuMzEgMC02LTIuNjktNi02czIuNjktNiA2LTYgNiAyLjY5IDYgNi0yLjY5IDYtNiA2em0wLTEwYy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTQtMS43OS00LTQtNHpcIi8+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0nc29uJyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJ3aGl0ZVwiIHdpZHRoPVwiMjBweFwiIGhlaWdodD1cIjIwcHhcIj48cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPjxwYXRoIGQ9XCJNMTAgMmMtMS44MiAwLTMuNTMuNS01IDEuMzVDNy45OSA1LjA4IDEwIDguMyAxMCAxMnMtMi4wMSA2LjkyLTUgOC42NUM2LjQ3IDIxLjUgOC4xOCAyMiAxMCAyMmM1LjUyIDAgMTAtNC40OCAxMC0xMFMxNS41MiAyIDEwIDJ6XCIvPjwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgeyBkYXJrICYmXHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgIGJvZHkge2JhY2tncm91bmQ6ICMyNzI3Mjc7Y29sb3I6ICNiZmJmYmY7fVxyXG4gICAgICAgIC5sb2dvIHN2ZyB7c3Ryb2tlOiAjZmZmO31cclxuICAgICAgICAuc29jaWFsIHN2ZyB7ZmlsbDogI2NiY2JjYjt9XHJcbiAgICAgICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge2NvbG9yOiAjZjhmOGY4O31cclxuICAgICAgICAuYnRuLWJsdWUge2JhY2tncm91bmQtY29sb3I6ICMzOTM5Mzk7Ym94LXNoYWRvdzogMCA0cHggMTRweCAwIHJnYigxMiwgMTIsIDEyKTtib3JkZXI6IDJweCBzb2xpZCAjMzkzOTM5O31cclxuICAgICAgICAuYnRuLW91dGxpbmUge2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O2NvbG9yOiAjYzFjMWMxO31cclxuICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSwgdGV4dGFyZWEge3dpZHRoOiAxMDAlO2JvcmRlcjogbm9uZTtiYWNrZ3JvdW5kOiAjMzkzOTM5O2NvbG9yOiNiZmJmYmY7fVxyXG4gICAgICAgIC5iYWNrLWJ0biB7YmFja2dyb3VuZDogIzM5MzkzOTtib3JkZXI6IG5vbmU7fVxyXG4gICAgICAgIC5wb3N0LXRpbWUge2JvcmRlcjogMXB4IHNvbGlkICM0ODQ4NDg7fVxyXG4gICAgICAgIC5wb3N0LWl0ZW0gLmNvbnRpbnVlLXJlYWRpbmcge2NvbG9yOiAjOTBjYWY5O31cclxuICAgICAgICAucG9zdC10aW1lIHtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XHJcbiAgICAgICAgY29kZVtjbGFzcyo9bGFuZ3VhZ2UtXSwgcHJlW2NsYXNzKj1sYW5ndWFnZS1dIHtiYWNrZ3JvdW5kOiAjMWUxZTFlO2NvbG9yOiAjNmY3Njk0O31cclxuICAgICAgICAgICAgIGB9PC9zdHlsZT59XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Projects\\\\Anorouzi.ir\\\\SSR\\\\pages\\\\_app.js */"));
}

_s(MyApp, "SvVe3Z4Nr7rux/2pmm0cFI6QU44=");

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlU3RhdGUiLCJkYXJrIiwic2V0RGFyayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxPQUF1QztBQUFBOztBQUFBLE1BQXZCQyxTQUF1QixRQUF2QkEsU0FBdUI7QUFBQSxNQUFaQyxTQUFZLFFBQVpBLFNBQVk7O0FBQUEsa0JBQ1hDLHNEQUFRLENBQUMsS0FBRCxDQURHO0FBQUEsTUFDNUJDLElBRDRCO0FBQUEsTUFDdEJDLE9BRHNCOztBQUVuQyxTQUNJLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxTQUFELHlGQUFlSCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGSixFQUdJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFBSyxhQUFTLEVBQUVFLElBQUksR0FBRyx1QkFBSCxHQUE2Qix3QkFBakQ7QUFBMkUsV0FBTyxFQUFFO0FBQUEsYUFBTUMsT0FBTyxDQUFDLENBQUNELElBQUYsQ0FBYjtBQUFBLEtBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQXNCLFNBQUssRUFBQyw0QkFBNUI7QUFBeUQsV0FBTyxFQUFDLFdBQWpFO0FBQTZFLFFBQUksRUFBQyxPQUFsRjtBQUEwRixTQUFLLEVBQUMsTUFBaEc7QUFBdUcsVUFBTSxFQUFDLE1BQTlHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUg7QUFBTSxLQUFDLEVBQUMsZUFBUjtBQUF3QixRQUFJLEVBQUMsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFySCxFQUEwSjtBQUFNLEtBQUMsRUFBQyxnT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTFKLENBREosRUFFSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLFNBQUssRUFBQyw0QkFBM0I7QUFBd0QsV0FBTyxFQUFDLFdBQWhFO0FBQTRFLFFBQUksRUFBQyxPQUFqRjtBQUF5RixTQUFLLEVBQUMsTUFBL0Y7QUFBc0csVUFBTSxFQUFDLE1BQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0g7QUFBTSxLQUFDLEVBQUMsZUFBUjtBQUF3QixRQUFJLEVBQUMsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFwSCxFQUF5SjtBQUFNLEtBQUMsRUFBQyxpSUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXpKLENBRkosQ0FKSixFQVFNQSxJQUFJO0FBQUE7QUFBQTtBQUFBLCtwSUFSVixDQURKO0FBMEJIOztHQTVCUUosSzs7S0FBQUEsSztBQThCTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZDE3NjRhNTVlNDQ2OGJiNDVlYjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vY29tcG9uZW50cy9zYXNzL3N0eWxlLmdsb2JhbC5zY3NzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIEZyYWdtZW50fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pIHtcclxuICAgIGNvbnN0IFtkYXJrLCBzZXREYXJrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2RhcmsgPyAnZGFyay1tb2RlLXRvZ2dsZSBkYXJrJyA6ICdkYXJrLW1vZGUtdG9nZ2xlIHdoaXRlJ30gb25DbGljaz17KCkgPT4gc2V0RGFyayghZGFyayl9PlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J21vb24nIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cImJsYWNrXCIgd2lkdGg9XCIyMHB4XCIgaGVpZ2h0PVwiMjBweFwiPjxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+PHBhdGggZD1cIk0yMCA4LjY5VjRoLTQuNjlMMTIgLjY5IDguNjkgNEg0djQuNjlMLjY5IDEyIDQgMTUuMzFWMjBoNC42OUwxMiAyMy4zMSAxNS4zMSAyMEgyMHYtNC42OUwyMy4zMSAxMiAyMCA4LjY5ek0xMiAxOGMtMy4zMSAwLTYtMi42OS02LTZzMi42OS02IDYtNiA2IDIuNjkgNiA2LTIuNjkgNi02IDZ6bTAtMTBjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDQgNC0xLjc5IDQtNC0xLjc5LTQtNC00elwiLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdzb24nIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIndoaXRlXCIgd2lkdGg9XCIyMHB4XCIgaGVpZ2h0PVwiMjBweFwiPjxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+PHBhdGggZD1cIk0xMCAyYy0xLjgyIDAtMy41My41LTUgMS4zNUM3Ljk5IDUuMDggMTAgOC4zIDEwIDEycy0yLjAxIDYuOTItNSA4LjY1QzYuNDcgMjEuNSA4LjE4IDIyIDEwIDIyYzUuNTIgMCAxMC00LjQ4IDEwLTEwUzE1LjUyIDIgMTAgMnpcIi8+PC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7IGRhcmsgJiZcclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgYm9keSB7YmFja2dyb3VuZDogIzI3MjcyNztjb2xvcjogI2JmYmZiZjt9XHJcbiAgICAgICAgLmxvZ28gc3ZnIHtzdHJva2U6ICNmZmY7fVxyXG4gICAgICAgIC5zb2NpYWwgc3ZnIHtmaWxsOiAjY2JjYmNiO31cclxuICAgICAgICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7Y29sb3I6ICNmOGY4Zjg7fVxyXG4gICAgICAgIC5idG4tYmx1ZSB7YmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTtib3gtc2hhZG93OiAwIDRweCAxNHB4IDAgcmdiKDEyLCAxMiwgMTIpO2JvcmRlcjogMnB4IHNvbGlkICMzOTM5Mzk7fVxyXG4gICAgICAgIC5idG4tb3V0bGluZSB7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7Y29sb3I6ICNjMWMxYzE7fVxyXG4gICAgICAgICBpbnB1dFt0eXBlPXRleHRdLCB0ZXh0YXJlYSB7d2lkdGg6IDEwMCU7Ym9yZGVyOiBub25lO2JhY2tncm91bmQ6ICMzOTM5Mzk7Y29sb3I6I2JmYmZiZjt9XHJcbiAgICAgICAgLmJhY2stYnRuIHtiYWNrZ3JvdW5kOiAjMzkzOTM5O2JvcmRlcjogbm9uZTt9XHJcbiAgICAgICAgLnBvc3QtdGltZSB7Ym9yZGVyOiAxcHggc29saWQgIzQ4NDg0ODt9XHJcbiAgICAgICAgLnBvc3QtaXRlbSAuY29udGludWUtcmVhZGluZyB7Y29sb3I6ICM5MGNhZjk7fVxyXG4gICAgICAgIC5wb3N0LXRpbWUge2JhY2tncm91bmQ6IHRyYW5zcGFyZW50O31cclxuICAgICAgICBjb2RlW2NsYXNzKj1sYW5ndWFnZS1dLCBwcmVbY2xhc3MqPWxhbmd1YWdlLV0ge2JhY2tncm91bmQ6ICMxZTFlMWU7Y29sb3I6ICM2Zjc2OTQ7fVxyXG4gICAgICAgICAgICAgYH08L3N0eWxlPn1cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
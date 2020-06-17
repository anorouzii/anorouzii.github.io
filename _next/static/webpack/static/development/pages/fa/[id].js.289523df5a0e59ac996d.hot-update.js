webpackHotUpdate("static\\development\\pages\\fa\\[id].js",{

/***/ "./pages/fa/[id].js":
/*!**************************!*\
  !*** ./pages/fa/[id].js ***!
  \**************************/
/*! exports provided: __N_SSG, config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/amp */ "./node_modules/next/amp.js");
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Projects\\Anorouzi.ir\\SSR\\pages\\fa\\[id].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var __N_SSG = true;
var config = {
  amp: 'hybrid'
};
function Post(_ref) {
  _s();

  var postData = _ref.postData;
  var isAmp = Object(next_amp__WEBPACK_IMPORTED_MODULE_4__["useAmp"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setTimeout(function () {
      prismjs__WEBPACK_IMPORTED_MODULE_1___default.a.highlightAll();
    }, 0);
  }, []);
  return __jsx("main", {
    className: "farsi",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("style", {
    "amp-custom": true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "\nbody {\nfont-family:Tahoma;\nfont-size:12px;\ndirection:rtl;\nline-height: 27px;\n}\n.text-wrap {\n    margin: 0 5%;\n}\nmain {\n    border-top: 5px solid #000;\n    padding-top: 10px;\n}\nheader,footer,.dark-mode-toggle{\ndisplay:none}\n.post-title {\n    margin: 30px 0;\n    font-size: 16px;\n    }\n    pre {\n    background: rgba(0, 0, 0, 0.05);\n    padding: 4px 10px;\n    font-family: monospace;\n    text-align: left;\n    border-radius: 2px;\n    }\n    .non-amp-btn {\n       background: #0070f3;\n    box-shadow: none;\n    border: none;\n    outline: none;\n    color: #fff;\n    width: 100%;\n    padding: 12px;\n    margin-top: 30px;\n    font-family: Tahoma;\n    font-size: 12px;\n    box-shadow: -1px -1px 14px 0 rgba(0,118,255,.39);\n    display: block;\n    text-align: center;\n    text-decoration: none;\n    }\n"), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, postData.title)), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("article", {
    className: "post-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, postData.img && isAmp ? __jsx("amp-img", {
    src: postData.img,
    alt: postData.title,
    height: "373",
    width: "954",
    layout: "responsive",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }) : postData.img && __jsx("img", {
    className: "post-img",
    src: postData.img,
    alt: postData.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 41
    }
  }), __jsx("div", {
    className: "text-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, postData.title && __jsx("h1", {
    className: "post-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 44
    }
  }, postData.title), postData.date && __jsx("time", {
    className: "post-time farsi-num",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 43
    }
  }, postData.date), postData.contentHtml && html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(postData.contentHtml)))), isAmp && __jsx("a", {
    href: "https://anorouzi.ir",
    className: "non-amp-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 23
    }
  }, "\u0646\u0633\u062E\u0647 \u0645\u0639\u0645\u0648\u0644\u06CC \u0633\u0627\u06CC\u062A"));
}

_s(Post, "H+FntByOjt0sGjuJU0HO1F17fBQ=", false, function () {
  return [next_amp__WEBPACK_IMPORTED_MODULE_4__["useAmp"]];
});

_c = Post;

var _c;

$RefreshReg$(_c, "Post");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9mYS8uanMiXSwibmFtZXMiOlsiY29uZmlnIiwiYW1wIiwiUG9zdCIsInBvc3REYXRhIiwiaXNBbXAiLCJ1c2VBbXAiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiUHJpc20iLCJoaWdobGlnaHRBbGwiLCJ0aXRsZSIsImltZyIsImRhdGUiLCJjb250ZW50SHRtbCIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQSxNQUFNLEdBQUc7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBZjtBQUNRLFNBQVNDLElBQVQsT0FBNEI7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDdkMsTUFBTUMsS0FBSyxHQUFHQyx1REFBTSxFQUFwQjtBQUNBQyx5REFBUyxDQUFDLFlBQUs7QUFDWEMsY0FBVSxDQUFDLFlBQU07QUFDYkMsb0RBQUssQ0FBQ0MsWUFBTjtBQUNILEtBRlMsRUFFUCxDQUZPLENBQVY7QUFHSCxHQUpRLEVBSVAsRUFKTyxDQUFUO0FBS0EsU0FDSTtBQUFNLGFBQVMsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxzQkFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDQwQkFESixFQThDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFOLFFBQVEsQ0FBQ08sS0FBakIsQ0E5Q0osQ0FESixFQWlESTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFTLGFBQVMsRUFBQyxjQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01QLFFBQVEsQ0FBQ1EsR0FBVCxJQUFnQlAsS0FBaEIsR0FDRTtBQUNJLE9BQUcsRUFBRUQsUUFBUSxDQUFDUSxHQURsQjtBQUVJLE9BQUcsRUFBRVIsUUFBUSxDQUFDTyxLQUZsQjtBQUdJLFVBQU0sRUFBQyxLQUhYO0FBSUksU0FBSyxFQUFDLEtBSlY7QUFLSSxVQUFNLEVBQUMsWUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsR0FTRVAsUUFBUSxDQUFDUSxHQUFULElBQWdCO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBMEIsT0FBRyxFQUFFUixRQUFRLENBQUNRLEdBQXhDO0FBQTZDLE9BQUcsRUFBRVIsUUFBUSxDQUFDTyxLQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVnhCLEVBWUk7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tQLFFBQVEsQ0FBQ08sS0FBVCxJQUFrQjtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEJQLFFBQVEsQ0FBQ08sS0FBckMsQ0FEdkIsRUFFS1AsUUFBUSxDQUFDUyxJQUFULElBQWlCO0FBQU0sYUFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDVCxRQUFRLENBQUNTLElBQWhELENBRnRCLEVBR0tULFFBQVEsQ0FBQ1UsV0FBVCxJQUF3QkMsd0RBQUssQ0FBQ1gsUUFBUSxDQUFDVSxXQUFWLENBSGxDLENBWkosQ0FESixDQWpESixFQXFFS1QsS0FBSyxJQUFJO0FBQUcsUUFBSSxFQUFDLHFCQUFSO0FBQThCLGFBQVMsRUFBQyxhQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhGQXJFZCxDQURKO0FBeUVIOztHQWhGdUJGLEk7VUFDTkcsK0M7OztLQURNSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxmYVxcW2lkXS5qcy4yODk1MjNkZjVhMGU1OWFjOTk2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWxsUG9zdElkcywgZ2V0UG9zdERhdGEgfSBmcm9tICcuLi8uLi9saWIvcG9zdHMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHBhcnNlIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJztcclxuaW1wb3J0IHsgdXNlQW1wIH0gZnJvbSAnbmV4dC9hbXAnXHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0geyBhbXA6ICdoeWJyaWQnIH07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0RGF0YSB9KSB7XHJcbiAgICBjb25zdCBpc0FtcCA9IHVzZUFtcCgpO1xyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBQcmlzbS5oaWdobGlnaHRBbGwoKVxyXG4gICAgICAgIH0sIDApXHJcbiAgICB9LFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPSdmYXJzaSc+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGFtcC1jdXN0b20+e2BcclxuYm9keSB7XHJcbmZvbnQtZmFtaWx5OlRhaG9tYTtcclxuZm9udC1zaXplOjEycHg7XHJcbmRpcmVjdGlvbjpydGw7XHJcbmxpbmUtaGVpZ2h0OiAyN3B4O1xyXG59XHJcbi50ZXh0LXdyYXAge1xyXG4gICAgbWFyZ2luOiAwIDUlO1xyXG59XHJcbm1haW4ge1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICMwMDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5oZWFkZXIsZm9vdGVyLC5kYXJrLW1vZGUtdG9nZ2xle1xyXG5kaXNwbGF5Om5vbmV9XHJcbi5wb3N0LXRpdGxlIHtcclxuICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgcHJlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgfVxyXG4gICAgLm5vbi1hbXAtYnRuIHtcclxuICAgICAgIGJhY2tncm91bmQ6ICMwMDcwZjM7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBUYWhvbWE7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAtMXB4IC0xcHggMTRweCAwIHJnYmEoMCwxMTgsMjU1LC4zOSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3Bvc3REYXRhLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInBvc3QtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgcG9zdERhdGEuaW1nICYmIGlzQW1wID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YW1wLWltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwb3N0RGF0YS5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Bvc3REYXRhLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PSczNzMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0nOTU0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdERhdGEuaW1nICYmIDxpbWcgY2xhc3NOYW1lPVwicG9zdC1pbWdcIiBzcmM9e3Bvc3REYXRhLmltZ30gYWx0PXtwb3N0RGF0YS50aXRsZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3REYXRhLnRpdGxlICYmIDxoMSBjbGFzc05hbWU9XCJwb3N0LXRpdGxlXCI+e3Bvc3REYXRhLnRpdGxlfTwvaDE+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdERhdGEuZGF0ZSAmJiA8dGltZSBjbGFzc05hbWU9XCJwb3N0LXRpbWUgZmFyc2ktbnVtXCI+e3Bvc3REYXRhLmRhdGV9PC90aW1lPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3REYXRhLmNvbnRlbnRIdG1sICYmIHBhcnNlKHBvc3REYXRhLmNvbnRlbnRIdG1sKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtpc0FtcCAmJiA8YSBocmVmPSdodHRwczovL2Fub3JvdXppLmlyJyBjbGFzc05hbWU9J25vbi1hbXAtYnRuJz7Zhtiz2K7ZhyDZhdi52YXZiNmE24wg2LPYp9uM2Ko8L2E+fVxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCBwYXRocyA9IGdldEFsbFBvc3RJZHMoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdERhdGEocGFyYW1zLmlkKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcG9zdERhdGFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
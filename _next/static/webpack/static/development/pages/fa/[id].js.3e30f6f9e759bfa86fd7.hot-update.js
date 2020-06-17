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
  amp: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9mYS8uanMiXSwibmFtZXMiOlsiY29uZmlnIiwiYW1wIiwiUG9zdCIsInBvc3REYXRhIiwiaXNBbXAiLCJ1c2VBbXAiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiUHJpc20iLCJoaWdobGlnaHRBbGwiLCJ0aXRsZSIsImltZyIsImRhdGUiLCJjb250ZW50SHRtbCIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQSxNQUFNLEdBQUc7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBZjtBQUNRLFNBQVNDLElBQVQsT0FBNEI7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDdkMsTUFBTUMsS0FBSyxHQUFHQyx1REFBTSxFQUFwQjtBQUNBQyx5REFBUyxDQUFDLFlBQUs7QUFDWEMsY0FBVSxDQUFDLFlBQU07QUFDYkMsb0RBQUssQ0FBQ0MsWUFBTjtBQUNILEtBRlMsRUFFUCxDQUZPLENBQVY7QUFHSCxHQUpRLEVBSVAsRUFKTyxDQUFUO0FBS0EsU0FDSTtBQUFNLGFBQVMsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxzQkFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDQwQkFESixFQThDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFOLFFBQVEsQ0FBQ08sS0FBakIsQ0E5Q0osQ0FESixFQWlESTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFTLGFBQVMsRUFBQyxjQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01QLFFBQVEsQ0FBQ1EsR0FBVCxJQUFnQlAsS0FBaEIsR0FDRTtBQUNJLE9BQUcsRUFBRUQsUUFBUSxDQUFDUSxHQURsQjtBQUVJLE9BQUcsRUFBRVIsUUFBUSxDQUFDTyxLQUZsQjtBQUdJLFVBQU0sRUFBQyxLQUhYO0FBSUksU0FBSyxFQUFDLEtBSlY7QUFLSSxVQUFNLEVBQUMsWUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsR0FTRVAsUUFBUSxDQUFDUSxHQUFULElBQWdCO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBMEIsT0FBRyxFQUFFUixRQUFRLENBQUNRLEdBQXhDO0FBQTZDLE9BQUcsRUFBRVIsUUFBUSxDQUFDTyxLQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVnhCLEVBWUk7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tQLFFBQVEsQ0FBQ08sS0FBVCxJQUFrQjtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEJQLFFBQVEsQ0FBQ08sS0FBckMsQ0FEdkIsRUFFS1AsUUFBUSxDQUFDUyxJQUFULElBQWlCO0FBQU0sYUFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDVCxRQUFRLENBQUNTLElBQWhELENBRnRCLEVBR0tULFFBQVEsQ0FBQ1UsV0FBVCxJQUF3QkMsd0RBQUssQ0FBQ1gsUUFBUSxDQUFDVSxXQUFWLENBSGxDLENBWkosQ0FESixDQWpESixFQXFFS1QsS0FBSyxJQUFJO0FBQUcsUUFBSSxFQUFDLHFCQUFSO0FBQThCLGFBQVMsRUFBQyxhQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhGQXJFZCxDQURKO0FBeUVIOztHQWhGdUJGLEk7VUFDTkcsK0M7OztLQURNSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxmYVxcW2lkXS5qcy4zZTMwZjZmOWU3NTliZmE4NmZkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QWxsUG9zdElkcywgZ2V0UG9zdERhdGEgfSBmcm9tICcuLi8uLi9saWIvcG9zdHMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHBhcnNlIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJztcclxuaW1wb3J0IHsgdXNlQW1wIH0gZnJvbSAnbmV4dC9hbXAnXHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0geyBhbXA6IHRydWUgfTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3REYXRhIH0pIHtcclxuICAgIGNvbnN0IGlzQW1wID0gdXNlQW1wKCk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIFByaXNtLmhpZ2hsaWdodEFsbCgpXHJcbiAgICAgICAgfSwgMClcclxuICAgIH0sW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9J2ZhcnNpJz5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgYW1wLWN1c3RvbT57YFxyXG5ib2R5IHtcclxuZm9udC1mYW1pbHk6VGFob21hO1xyXG5mb250LXNpemU6MTJweDtcclxuZGlyZWN0aW9uOnJ0bDtcclxubGluZS1oZWlnaHQ6IDI3cHg7XHJcbn1cclxuLnRleHQtd3JhcCB7XHJcbiAgICBtYXJnaW46IDAgNSU7XHJcbn1cclxubWFpbiB7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgIzAwMDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbmhlYWRlcixmb290ZXIsLmRhcmstbW9kZS10b2dnbGV7XHJcbmRpc3BsYXk6bm9uZX1cclxuLnBvc3QtdGl0bGUge1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBwcmUge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbiAgICAubm9uLWFtcC1idG4ge1xyXG4gICAgICAgYmFja2dyb3VuZDogIzAwNzBmMztcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFRhaG9tYTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IC0xcHggLTFweCAxNHB4IDAgcmdiYSgwLDExOCwyNTUsLjM5KTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG5gfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57cG9zdERhdGEudGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicG9zdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBwb3N0RGF0YS5pbWcgJiYgaXNBbXAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhbXAtaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3REYXRhLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdERhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzM3MydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPSc5NTQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0RGF0YS5pbWcgJiYgPGltZyBjbGFzc05hbWU9XCJwb3N0LWltZ1wiIHNyYz17cG9zdERhdGEuaW1nfSBhbHQ9e3Bvc3REYXRhLnRpdGxlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdERhdGEudGl0bGUgJiYgPGgxIGNsYXNzTmFtZT1cInBvc3QtdGl0bGVcIj57cG9zdERhdGEudGl0bGV9PC9oMT59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0RGF0YS5kYXRlICYmIDx0aW1lIGNsYXNzTmFtZT1cInBvc3QtdGltZSBmYXJzaS1udW1cIj57cG9zdERhdGEuZGF0ZX08L3RpbWU+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdERhdGEuY29udGVudEh0bWwgJiYgcGFyc2UocG9zdERhdGEuY29udGVudEh0bWwpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2lzQW1wICYmIDxhIGhyZWY9J2h0dHBzOi8vYW5vcm91emkuaXInIGNsYXNzTmFtZT0nbm9uLWFtcC1idG4nPtmG2LPYrtmHINmF2LnZhdmI2YTbjCDYs9in24zYqjwvYT59XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IHBhdGhzID0gZ2V0QWxsUG9zdElkcygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2VcclxuICAgIH1cclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRQb3N0RGF0YShwYXJhbXMuaWQpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb3N0RGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
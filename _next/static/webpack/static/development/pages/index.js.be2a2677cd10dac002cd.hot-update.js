webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "D:\\Projects\\Anorouzi.ir\\SSR\\components\\Logo.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Logo = function Logo(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      winSize = _useState[0],
      setWinSize = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setWinSize(window.innerWidth);
  }, []);
  return __jsx("div", {
    className: props.position + ' logo',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("svg", {
    fill: "transparent",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 45.5 38",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M14.7 36.5c-1-.6-1.3-1.8-.7-2.7l5.9-10.3c.6-1 1.8-1.3 2.7-.7l.9.5c1.9 1.1 2.6 3.6 1.5 5.5l-3.4 5.9c-1.4 2.4-4.5 3.2-6.9 1.8z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M44.9 36.2c.3.5.1.8-.5.8h-6.9c-.6 0-1.2-.3-1.5-.8l-3-4.9-1-1.7-8.7-14.2c-.1-.3-.5-.4-.8-.2-.1.1-.2.1-.2.2l-8.7 14.2-1 1.7-3 4.9c-.4.5-1 .8-1.6.8H1.1c-.6 0-.8-.4-.5-.8l3-4.9 1.1-1.7L22.2.8c.1-.3.5-.4.8-.2.1.1.2.1.2.2l17.6 28.8 1 1.7 3.1 4.9z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M28.2 29l1.2.7c1.9 1.1 2.6 3.6 1.5 5.5l-.6.8c-.8 1.4-2.7 1.9-4.1 1.1l-2-1.2c-.5-.3-.6-.9-.4-1.4l3-5.2c.3-.4.9-.5 1.4-.3z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  })), props.farsi ? __jsx("span", {
    className: "tooltip farsi",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, props.farsi) : __jsx("span", {
    className: "tooltip",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, winSize >= 900 ? 'Hi, It\'s Me' : 'Ali Norouzi'), __jsx("div", {
    className: "avatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }));
};

_s(Logo, "P+1ef9zgxpm29Ks+bGMohZUslD8=");

_c = Logo;
/* harmony default export */ __webpack_exports__["default"] = (Logo);

var _c;

$RefreshReg$(_c, "Logo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ28uanMiXSwibmFtZXMiOlsiTG9nbyIsInByb3BzIiwidXNlU3RhdGUiLCJ3aW5TaXplIiwic2V0V2luU2l6ZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJwb3NpdGlvbiIsImZhcnNpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFVO0FBQUE7O0FBQUEsa0JBQ1VDLHNEQUFRLENBQUMsRUFBRCxDQURsQjtBQUFBLE1BQ1pDLE9BRFk7QUFBQSxNQUNKQyxVQURJOztBQUVuQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pELGNBQVUsQ0FBQ0UsTUFBTSxDQUFDQyxVQUFSLENBQVY7QUFDSCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0EsU0FDQTtBQUFLLGFBQVMsRUFBR04sS0FBSyxDQUFDTyxRQUFOLEdBQWlCLE9BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFFBQUksRUFBQyxhQUFWO0FBQXdCLFNBQUssRUFBQyw0QkFBOUI7QUFBMkQsS0FBQyxFQUFDLEdBQTdEO0FBQWlFLEtBQUMsRUFBQyxHQUFuRTtBQUF1RSxXQUFPLEVBQUMsS0FBL0U7QUFBcUYsV0FBTyxFQUFDLGFBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLEtBQUMsRUFBQyw4SEFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFNLEtBQUMsRUFBQyxrUEFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFNLEtBQUMsRUFBQywwSEFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FESixFQU1NUCxLQUFLLENBQUNRLEtBQU4sR0FBYztBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDUixLQUFLLENBQUNRLEtBQXZDLENBQWQsR0FDRTtBQUFNLGFBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTRCTixPQUFPLElBQUksR0FBWCxHQUFpQixjQUFqQixHQUFrQyxhQUE5RCxDQVBSLEVBU0k7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosQ0FEQTtBQVlGLENBakJGOztHQUFNSCxJOztLQUFBQSxJO0FBa0JTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYmUyYTI2NzdjZDEwZGFjMDAyY2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgTG9nbyA9IChwcm9wcyk9PiB7XHJcbiAgICBjb25zdCBbd2luU2l6ZSxzZXRXaW5TaXplXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0V2luU2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9eyBwcm9wcy5wb3NpdGlvbiArICcgbG9nbyd9PlxyXG4gICAgICAgIDxzdmcgZmlsbD1cInRyYW5zcGFyZW50XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHg9XCIwXCIgeT1cIjBcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCA0NS41IDM4XCIgPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE0LjcgMzYuNWMtMS0uNi0xLjMtMS44LS43LTIuN2w1LjktMTAuM2MuNi0xIDEuOC0xLjMgMi43LS43bC45LjVjMS45IDEuMSAyLjYgMy42IDEuNSA1LjVsLTMuNCA1LjljLTEuNCAyLjQtNC41IDMuMi02LjkgMS44elwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk00NC45IDM2LjJjLjMuNS4xLjgtLjUuOGgtNi45Yy0uNiAwLTEuMi0uMy0xLjUtLjhsLTMtNC45LTEtMS43LTguNy0xNC4yYy0uMS0uMy0uNS0uNC0uOC0uMi0uMS4xLS4yLjEtLjIuMmwtOC43IDE0LjItMSAxLjctMyA0LjljLS40LjUtMSAuOC0xLjYuOEgxLjFjLS42IDAtLjgtLjQtLjUtLjhsMy00LjkgMS4xLTEuN0wyMi4yLjhjLjEtLjMuNS0uNC44LS4yLjEuMS4yLjEuMi4ybDE3LjYgMjguOCAxIDEuNyAzLjEgNC45elwiLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0yOC4yIDI5bDEuMi43YzEuOSAxLjEgMi42IDMuNiAxLjUgNS41bC0uNi44Yy0uOCAxLjQtMi43IDEuOS00LjEgMS4xbC0yLTEuMmMtLjUtLjMtLjYtLjktLjQtMS40bDMtNS4yYy4zLS40LjktLjUgMS40LS4zelwiLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICB7IHByb3BzLmZhcnNpID8gPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcCBmYXJzaVwiPntwcm9wcy5mYXJzaX08L3NwYW4+IDpcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcFwiPnsgd2luU2l6ZSA+PSA5MDAgPyAnSGksIEl0XFwncyBNZScgOiAnQWxpIE5vcm91emknfTwvc3Bhbj5cclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2F2YXRhcicvPlxyXG4gICAgPC9kaXY+XHJcbil9O1xyXG5leHBvcnQgZGVmYXVsdCBMb2dvO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
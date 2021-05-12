"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AwardIcon = props => {
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: props.className,
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M28.5979 33.6773L29.1243 34.1686L28.5979 33.6773L26.1763 36.2721C26.1744 36.2742 26.1731 36.2751 26.1723 36.2756C26.1714 36.2762 26.1699 36.277 26.1676 36.2778C26.1623 36.2795 26.154 36.2807 26.1446 36.2795C26.1409 36.279 26.1379 36.2782 26.1358 36.2775L21.8723 27.5176L28.9679 24.3475C28.979 24.3426 28.9908 24.3424 29.0006 24.3457C29.0012 24.3459 29.0017 24.3461 29.0022 24.3463L33.2642 33.1033C33.2637 33.1033 33.2631 33.1033 33.2625 33.1033L29.6312 33.2128C29.242 33.2245 28.8673 33.3887 28.5979 33.6773ZM6.73575 33.1032L10.9978 24.3462C10.9983 24.346 10.9988 24.3458 10.9994 24.3456C11.0092 24.3422 11.021 24.3424 11.0321 24.3474L18.1277 27.5175L13.8642 36.2774C13.8621 36.2781 13.8592 36.2789 13.8554 36.2794C13.846 36.2806 13.8377 36.2794 13.8324 36.2777C13.8314 36.2773 13.8305 36.277 13.8298 36.2766C13.8289 36.2762 13.8282 36.2758 13.8277 36.2755C13.8275 36.2754 13.8274 36.2753 13.8271 36.2751C13.8263 36.2746 13.8252 36.2736 13.8237 36.272L11.4021 33.6772C11.1327 33.3886 10.758 33.2244 10.3688 33.2126L6.73754 33.1032C6.73693 33.1032 6.73633 33.1032 6.73575 33.1032Z",
    fill: "white",
    stroke: "#282E3E",
    "stroke-width": "1.44"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M32.8174 15.7456C32.8174 22.3585 27.2131 27.7713 20.2343 27.7713C13.2554 27.7713 7.65115 22.3585 7.65115 15.7456C7.65115 9.13279 13.2554 3.72 20.2343 3.72C27.2131 3.72 32.8174 9.13279 32.8174 15.7456Z",
    fill: "url(#award)",
    stroke: "#282E3E",
    "stroke-width": "1.44"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M20.2344 9.7029L21.3282 12.9281C21.5264 13.5125 22.0749 13.9056 22.6919 13.9056H26.1636L23.4087 15.8233C22.8823 16.1897 22.6617 16.8602 22.8677 17.4676L23.9324 20.607L21.0571 18.6056C20.5627 18.2614 19.9062 18.2614 19.4117 18.6056L16.5365 20.607L17.6012 17.4676C17.8072 16.8602 17.5866 16.1897 17.0601 15.8233L14.3052 13.9056L17.7769 13.9056C18.394 13.9056 18.9425 13.5125 19.1407 12.9281L20.2344 9.7029Z",
    fill: "white",
    stroke: "#282E3E",
    "stroke-width": "1.44"
  }), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "award",
    x1: "8.35649",
    y1: "28.4912",
    x2: "38.8262",
    y2: "14.6045",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.109375",
    stopColor: "#F14D70"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.317708",
    stopColor: "#FF008A"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.520833",
    stopColor: "#FF446C"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: "0.869792",
    stopColor: "#FFB016"
  }))));
};

var _default = AwardIcon;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BottleIcon = props => {
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: props.className,
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("rect", {
    x: "9.9458",
    y: "9.79999",
    width: "20",
    height: "25",
    rx: "1.08187",
    fill: "url(#bottle)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M19.0356 17C18.648 17 18.3338 17.3142 18.3338 17.7018V20.3332H15.7018C15.3142 20.3332 15 20.6474 15 21.035V22.9648C15 23.3524 15.3142 23.6666 15.7018 23.6666H18.3338V26.2982C18.3338 26.6858 18.648 27 19.0356 27H20.9654C21.353 27 21.6672 26.6858 21.6672 26.2982V23.6666H24.2982C24.6858 23.6666 25 23.3524 25 22.9648V21.035C25 20.6474 24.6858 20.3332 24.2982 20.3332H21.6672V17.7018C21.6672 17.3142 21.353 17 20.9654 17H19.0356Z",
    fill: "white"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "8",
    y: "5",
    width: "24",
    height: "6",
    rx: "0.540936",
    fill: "#282E3E"
  }), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "bottle",
    x1: "11.0172",
    y1: "34.8",
    x2: "35.6705",
    y2: "26.1879",
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

var _default = BottleIcon;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FacebookIconDark = props => {
  return /*#__PURE__*/_react.default.createElement("svg", {
    className: props.className,
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M10.4778 5C7.44335 5 5 7.44335 5 10.4778V29.5222C5 32.5567 7.44335 35 10.4778 35H20.7997V23.2719H17.6985V19.0494H20.7997V15.4419C20.7997 12.6076 22.6321 10.0053 26.8532 10.0053C28.5622 10.0053 29.826 10.1694 29.826 10.1694L29.7266 14.1125C29.7266 14.1125 28.4377 14.1004 27.0313 14.1004C25.5091 14.1004 25.265 14.8017 25.265 15.966V19.0494H29.8475L29.6478 23.2719H25.265V35.0001H29.5222C32.5567 35.0001 35 32.5567 35 29.5223V10.4779C35 7.44338 32.5567 5.00003 29.5222 5.00003H10.4778L10.4778 5Z",
    fill: "#282E3E"
  }));
};

var _default = FacebookIconDark;
exports.default = _default;
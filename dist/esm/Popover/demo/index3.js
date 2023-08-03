import React from "react";
import Popover from "..";
import Button from "../../Button";
export default function PopoverDemo3() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement(Popover, null, /*#__PURE__*/React.createElement(Button, null, "\u4E0A\u65B9")), /*#__PURE__*/React.createElement(Popover, {
    placement: "bottom"
  }, /*#__PURE__*/React.createElement(Button, null, "\u4E0B\u65B9")), /*#__PURE__*/React.createElement(Popover, {
    placement: "left"
  }, /*#__PURE__*/React.createElement(Button, null, "\u5DE6\u8FB9")), /*#__PURE__*/React.createElement(Popover, {
    placement: "right"
  }, /*#__PURE__*/React.createElement(Button, null, "\u53F3\u8FB9")));
}
import React from "react";
import Popover from '..';
import Button from "../../Button";
export default function PopoverDemo1() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement(Popover, {
    trigger: "hover",
    width: 100,
    title: "\u54C8\u54C8"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "text"
  }, "hover\u6FC0\u6D3B")), /*#__PURE__*/React.createElement(Popover, null, /*#__PURE__*/React.createElement(Button, {
    type: "text"
  }, "click\u6FC0\u6D3B")), /*#__PURE__*/React.createElement(Popover, {
    trigger: "focus"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "text"
  }, "focus\u6FC0\u6D3B")));
}
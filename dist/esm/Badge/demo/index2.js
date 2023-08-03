import React from "react";
import Badge from "..";
import Button from "../../Button";
export default function BadgeDemo2() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    value: 120,
    max: 99
  }, /*#__PURE__*/React.createElement(Button, {
    type: "text"
  }, "\u8BC4\u8BBA")), /*#__PURE__*/React.createElement(Badge, {
    type: "primary",
    value: 55,
    max: 10
  }, /*#__PURE__*/React.createElement(Button, {
    type: "text"
  }, "\u8BC4\u8BBA")));
}
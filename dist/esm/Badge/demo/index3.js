import React from "react";
import Badge from "..";
import Button from "../../Button";
export default function BadgeDemo3() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    value: "new",
    max: 99
  }, /*#__PURE__*/React.createElement(Button, {
    type: "text"
  }, "\u8BC4\u8BBA")), /*#__PURE__*/React.createElement(Badge, {
    value: "hot",
    type: "primary"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "text"
  }, "\u8BC4\u8BBA")));
}
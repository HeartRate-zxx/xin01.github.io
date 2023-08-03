import React from "react";
import Badge from "..";
import Button from "../../Button";
export default function BadgeDemo1() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    value: 16
  }, /*#__PURE__*/React.createElement(Button, {
    type: "text"
  }, "\u8BC4\u8BBA")), /*#__PURE__*/React.createElement(Badge, {
    value: 8
  }, /*#__PURE__*/React.createElement(Button, {
    type: "text"
  }, "\u56DE\u590D")), /*#__PURE__*/React.createElement(Badge, {
    type: "primary",
    value: 55
  }, /*#__PURE__*/React.createElement(Button, {
    type: "text"
  }, "\u8BC4\u8BBA")), /*#__PURE__*/React.createElement(Badge, {
    type: "warning",
    value: 23
  }, /*#__PURE__*/React.createElement(Button, {
    type: "text"
  }, "\u56DE\u590D")));
}
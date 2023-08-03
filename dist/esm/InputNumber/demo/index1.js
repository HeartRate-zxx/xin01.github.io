import React from "react";
import Input from "..";
export default function ASC() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(Input, {
    initialValue: 5,
    minValue: 2,
    maxValue: 10
  }));
}
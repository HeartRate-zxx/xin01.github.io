import React from "react";
import Popover from "..";
import Button from "../../Button";
export default function PopoverDemo2() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Popover, {
    trigger: "click",
    title: /*#__PURE__*/React.createElement("p", null, "\u5220\u9664\u5220\u9664"),
    content: /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        margin: '0',
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      type: "text"
    }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(Button, {
      type: "primary"
    }, "\u786E\u5B9A"))
  }, /*#__PURE__*/React.createElement(Button, null, "\u5220\u9664")));
}
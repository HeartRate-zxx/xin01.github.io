import React from "react";
import Switch from '..';
export default function SwitchTwo() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    activeText: "\u5F00\u542F",
    isActiveText: "\u5173\u95ED",
    width: 50
  }), /*#__PURE__*/React.createElement(Switch, {
    activeText: "\u6309\u6708\u4ED8\u8D39",
    isActiveText: "\u6309\u5E74\u4ED8\u8D39",
    activeColor: "#13ce66",
    inActiveColor: "#ff4949"
  }));
}
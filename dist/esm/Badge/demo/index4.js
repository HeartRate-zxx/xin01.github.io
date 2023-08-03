import React from "react";
import Badge from "..";
import { ShareAltOutlined } from '@ant-design/icons';
export default function BadgeDemo3() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    isDot: true
  }, "\u5173\u6CE8 "), /*#__PURE__*/React.createElement(Badge, {
    isDot: true
  }, /*#__PURE__*/React.createElement(ShareAltOutlined, {
    style: {
      padding: '10px',
      background: 'skyblue',
      borderRadius: '7px'
    }
  })));
}
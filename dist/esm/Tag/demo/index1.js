import React from "react";
import Tag from "..";
export default function Tag1() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-evenly'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    type: "succes"
  }, "\u6807\u7B7E\u4E00"), /*#__PURE__*/React.createElement(Tag, {
    type: "info"
  }, "\u6807\u7B7E\u4E8C"), /*#__PURE__*/React.createElement(Tag, {
    type: "warning"
  }, "\u6807\u7B7E\u4E09"), /*#__PURE__*/React.createElement(Tag, {
    type: "dangerr"
  }, "\u6807\u7B7E\u56DB"));
}
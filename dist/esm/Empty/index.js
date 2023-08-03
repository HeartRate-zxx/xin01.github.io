import React, { memo } from 'react';
import "./Empty.module.less";
var Empty = /*#__PURE__*/memo(function (props) {
  var description = props.description,
    image = props.image,
    image_size = props.image_size,
    children = props.children;
  console.log(props);
  return /*#__PURE__*/React.createElement("div", {
    className: "empty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "imgBox"
  }, /*#__PURE__*/React.createElement("img", {
    src: image ? image : "https://img.tukuppt.com/png_preview/00/12/65/gtXRwDn9X0.jpg!/fw/780",
    style: {
      width: image_size ? image_size : "100%"
    },
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "characters"
  }, description), children);
});
Empty.defaultProps = {
  description: '暂无数据'
};
export default Empty;
import React, { memo } from 'react';
import "./loading.module.less";
var Loading = /*#__PURE__*/memo(function (props) {
  var text = props.text,
    children = props.children,
    mask = props.mask,
    loading = props.loading,
    all = props.all,
    type = props.type,
    className = props.className;
  var styleProps = [className].join('');
  return (
    /*#__PURE__*/
    // 返回两个容器外层以及内层的loading
    React.createElement("div", {
      className: styleProps
    }, /*#__PURE__*/React.createElement("div", null, children ? children[0] : /*#__PURE__*/React.createElement("div", {
      className: "icon"
    })))
  );
});
export default Loading;
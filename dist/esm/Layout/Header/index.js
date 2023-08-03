import React, { memo, useMemo } from 'react';
import "./index.module.less";
var Header = function Header(props) {
  var children = props.children,
    extraStyle = props.extraStyle;
  var propsStyle = useMemo(function () {
    if (extraStyle) {
      return extraStyle;
    }
    return {};
  }, [extraStyle]);
  return /*#__PURE__*/React.createElement("div", {
    className: "header",
    style: propsStyle
  }, children);
};
export default /*#__PURE__*/memo(Header);
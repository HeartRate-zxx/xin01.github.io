import React, { useMemo, memo } from 'react';
import "./index.module.less";
var Layout = function Layout(props) {
  var children = props.children,
    extraStyle = props.extraStyle;
  var propsStyles = useMemo(function () {
    if (extraStyle) {
      return extraStyle;
    }
    return {};
  }, [extraStyle]);
  return /*#__PURE__*/React.createElement("div", {
    className: "layout",
    style: propsStyles
  }, children);
};
export default /*#__PURE__*/memo(Layout);
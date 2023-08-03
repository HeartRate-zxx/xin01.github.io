import React, { useMemo, memo } from 'react';
import "./index.module.less";
var Footer = function Footer(props) {
  var children = props.children,
    extraStyle = props.extraStyle;
  var propsStyle = useMemo(function () {
    if (extraStyle) {
      return extraStyle;
    }
    return {};
  }, [extraStyle]);
  return /*#__PURE__*/React.createElement("div", {
    className: "footer",
    style: propsStyle
  }, children);
};
export default /*#__PURE__*/memo(Footer);
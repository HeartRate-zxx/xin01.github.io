import React, { memo, useMemo } from "react";
import "./Divider.module.less";
var Divider = /*#__PURE__*/memo(function (props) {
  var direction = props.direction,
    contentPosition = props.contentPosition,
    children = props.children;
  var dividerStyle = useMemo(function () {
    if (!direction && direction !== 'vertical') {
      return "horizontal";
    }
    return direction;
  }, [direction]);
  var spanStyle = useMemo(function () {
    if (!contentPosition && contentPosition !== 'left' && contentPosition !== 'right') {
      return 'center';
    }
    return contentPosition;
  }, [contentPosition]);
  return /*#__PURE__*/React.createElement("div", {
    className: dividerStyle
  }, /*#__PURE__*/React.createElement("span", {
    className: spanStyle
  }, children));
});
export default Divider;
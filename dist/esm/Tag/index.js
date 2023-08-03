import React, { useMemo, memo, useRef } from "react";
import { CloseOutlined } from '@ant-design/icons';
import "./Tag.module.less";
var Tag = /*#__PURE__*/memo(function (props) {
  var type = props.type,
    closable = props.closable,
    disable_transitions = props.disable_transitions,
    hit = props.hit,
    color = props.color,
    size = props.size,
    width = props.width,
    height = props.height,
    children = props.children;
  // console.log(closable);

  var tagStyle = useMemo(function () {
    if (!type && type !== 'succes' && type !== 'info' && type !== 'warning' && type !== 'dangerr' && !size && size !== 'medium' && size !== 'small' && size !== 'mini') {
      return 'succes';
    }
    return size || type;
    // return type as any
  }, [type, size]);
  var tagSize = useMemo(function () {
    var size = {
      width: '150px',
      height: '40px'
    };
    if (width) {
      size.width = width + 'px';
    }
    if (height) {
      size.height = height + 'px';
    }
    return size;
  }, [width, height]);
  var shan = function shan() {
    console.log();
  };
  var counts = useRef([]);
  var deletes = function deletes() {
    console.log('2');
    if (closable) {
      counts.current.style.display = "none";
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "tag",
    ref: function ref(el) {
      return counts.current = el;
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: tagStyle,
    style: tagSize,
    onClick: function onClick() {
      return deletes();
    }
  }, children, closable && /*#__PURE__*/React.createElement(CloseOutlined, {
    className: "svg",
    onClick: function onClick() {
      shan();
    }
  })));
});
export default Tag;
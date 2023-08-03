function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useMemo, memo, useState, useRef } from "react";
import "./Popover.module.less";
var Popover = /*#__PURE__*/memo(function (props) {
  var trigger = props.trigger,
    title = props.title,
    content = props.content,
    width = props.width,
    children = props.children,
    placement = props.placement;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var ref = useRef(null);
  // 点击
  var click = function click() {
    setShow(!show);
    console.log('click', ref);
  };
  // 移入
  var handleMouseEnter = function handleMouseEnter() {
    setShow(!show);
  };
  // 移出
  var handleMouseLeave = function handleMouseLeave() {
    setShow(!show);
  };

  // 长按事件
  var flag = 0;
  // 鼠标按下
  var MouseDown = function MouseDown() {
    flag = setTimeout(function () {
      setShow(true);
    }, 300);
  };
  // 鼠标抬起
  var MouseUp = function MouseUp() {
    clearInterval(flag);
    setShow(false);
  };
  var popoverStyle = useMemo(function () {
    if (!trigger && trigger !== 'hover' && trigger !== 'focus') {
      return 'click';
    }
    return trigger;
  }, [trigger]);
  var popoverSize = useMemo(function () {
    var size = {
      width: '80px',
      position: 'relative'
    };
    if (width) {
      size.width = width + 'px';
    }
    return size;
  }, [width, content, title]);
  var placementClass = useMemo(function () {
    if (!placement && placement !== 'bottom' && placement !== 'left' && placement !== 'right') {
      return 'top';
    }
    return placement;
  }, [placement]);
  return /*#__PURE__*/React.createElement("div", {
    className: popoverStyle,
    ref: ref,
    onClick: popoverStyle === 'click' ? click : undefined,
    onMouseEnter: popoverStyle === 'hover' ? handleMouseEnter : undefined,
    onMouseLeave: popoverStyle === 'hover' ? handleMouseLeave : undefined,
    onMouseDown: popoverStyle === 'focus' ? MouseDown : undefined,
    onMouseUp: popoverStyle === 'focus' ? MouseUp : undefined,
    style: popoverSize
  }, children, /*#__PURE__*/React.createElement("div", {
    className: placementClass,
    style: {
      display: show ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, title), content, /*#__PURE__*/React.createElement("p", {
    className: "san"
  })));
});
export function getOverlay(title, content) {
  if (!title && !content) {
    return undefined;
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", null, title), /*#__PURE__*/React.createElement("div", null, content));
}
Popover.defaultProps = {
  title: '标题',
  content: "我是哈哈哈哈哈内容"
};
export default Popover;
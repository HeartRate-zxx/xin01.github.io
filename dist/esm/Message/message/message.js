function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// 弹框组件，先分析一下
import React, { useEffect, useState } from 'react';
import "./message.css";
import Button from "../button/button";

/**
 * 1.点击出现弹框
 * 2.点击X弹框消失
 * */

var Message = function Message(props) {
  var children = props.children,
    className = props.className,
    delay = props.delay,
    onClick = props.onClick,
    title = props.title;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    flag = _useState2[0],
    setFlag = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showFirstSpan = _useState4[0],
    setshowFirstSpan = _useState4[1];
  var styleProps = [className].join(' ');
  var handleClick = function handleClick() {
    setFlag(function (prevState) {
      return !prevState;
    });
    if (title === "打开信息提示") {
      setshowFirstSpan(false);
    } else {
      setshowFirstSpan(true);
    }
  };
  // 三秒之后弹框自动消失
  useEffect(function () {
    var timer = setTimeout(function () {
      setFlag(function (prevState) {
        return false;
      });
    }, delay);
    return function () {
      return clearTimeout(timer);
    };
  }, [flag]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    },
    className: styleProps
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleClick,
    style: {
      fontSize: '12px'
    }
  }, title || 'hello'), flag && /*#__PURE__*/React.createElement("span", {
    className: "box"
  }, children || '这是一个信息提示窗!', "\xA0\xA0\xA0\xA0", showFirstSpan ? /*#__PURE__*/React.createElement("span", {
    onClick: handleClick,
    className: "xxx"
  }, "X") : null));
};
Message.defaultProps = {
  delay: 3000
};
export default Message;
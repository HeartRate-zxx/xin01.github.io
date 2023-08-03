function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { memo, useState } from "react";
import "./input.module.less";
var Input = /*#__PURE__*/memo(function (props) {
  var minValue = props.minValue,
    maxValue = props.maxValue,
    initialValue = props.initialValue,
    disabled = props.disabled,
    step = props.step;

  // const inputSize = useMemo(() => {
  // }, [minValue, maxValue, initialValue, disabled, step])

  var _useState = useState(initialValue),
    _useState2 = _slicedToArray(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  var _useState3 = useState(step),
    _useState4 = _slicedToArray(_useState3, 2),
    steps = _useState4[0],
    setSteps = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    flag = _useState6[0],
    setFlag = _useState6[1];

  // 减少
  var jian = function jian() {
    if (minValue && count > minValue) {
      setCount(count - 1);
      // console.log(count);
      setFlag(false);
    }
    if (count <= minValue) {
      setFlag(true);
      console.log(flag);
      return;
    }
    if (steps && count) {
      setCount(count - steps);
    }
  };
  // 增加
  var jia = function jia() {
    if (maxValue && count < maxValue) {
      setFlag(false);
      setCount(count + 1);
      return;
    }
    if (steps && count) {
      setCount(count + steps);
    }
  };

  // 监听 input
  var inputq = function inputq(e) {
    console.log(e.target.value);
    var val = e.target.value;
    setCount(val);
  };

  // 失去焦点
  var InputNumber = function InputNumber(e) {
    if (maxValue && e.target.value > maxValue) {
      e.target.value = maxValue;
      setCount(maxValue);
    }
    if (minValue && e.target.value < minValue) {
      e.target.value = minValue;
      setCount(minValue);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "inputNumber"
  }, /*#__PURE__*/React.createElement("button", {
    className: "del",
    style: {
      cursor: (disabled ? true : count <= minValue) ? "not-allowed" : ""
    },
    disabled: !disabled ? count === minValue ? true : false : true,
    onClick: function onClick() {
      return jian();
    }
  }, "-"), /*#__PURE__*/React.createElement("input", {
    style: {
      cursor: disabled ? "not-allowed" : ""
    },
    disabled: disabled ? true : false,
    onInput: function onInput(e) {
      return inputq(e);
    },
    onBlur: function onBlur(e) {
      return InputNumber(e);
    },
    placeholder: "0",
    value: count,
    min: minValue,
    max: maxValue,
    step: step
  }), /*#__PURE__*/React.createElement("button", {
    className: "add",
    style: {
      cursor: (disabled ? true : count >= maxValue) ? "not-allowed" : ""
    },
    disabled: !disabled ? step ? false : count === maxValue ? true : false : true,
    onClick: function onClick() {
      return jia();
    }
  }, "+"));
});
export default Input;
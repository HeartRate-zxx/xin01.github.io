function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, memo, useMemo, useRef } from "react";
import "./Badge.module.less";
var Badge = /*#__PURE__*/memo(function (props) {
  var type = props.type,
    value = props.value,
    isDot = props.isDot,
    max = props.max,
    children = props.children;
  var refs = useRef(null);
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    flag = _useState2[0],
    setFlag = _useState2[1]; // 若value不存在或value<=0，将sup隐藏
  var _useState3 = useState(value),
    _useState4 = _slicedToArray(_useState3, 2),
    values = _useState4[0],
    setValues = _useState4[1];
  var badgeStyle = useMemo(function () {
    if (Number.isFinite(value)) {
      if (values >= max) {
        values = max + '+';
      }
    }
    if (!value && values <= 0 && !isDot) {
      setFlag(false);
      console.log('都不在');
    } else if (isDot) {
      setFlag(true);
      setValues('');
    }
  }, [value, max, isDot]);
  var supClass = useMemo(function () {
    if (!type && type !== 'warning' && type !== 'primary' && type !== 'success' && type !== 'info') {
      return 'danger';
    }
    return type;
  }, [type]);
  return /*#__PURE__*/React.createElement("div", {
    className: "badge"
  }, children, /*#__PURE__*/React.createElement("sup", {
    ref: refs,
    className: isDot ? "isdot" : supClass,
    style: {
      display: flag ? 'block' : 'none'
    }
  }, values));
});
export default Badge;
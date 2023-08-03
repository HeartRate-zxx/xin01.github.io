function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useRef } from 'react';
import "./panel.module.less";
// interface PanelProps {
//     items?: any;
//     height?: Number;
//     accordion?: boolean
// }
var Panel = function Panel(props) {
  var items = props.items,
    height = props.height,
    accordion = props.accordion;
  var count = useRef([]);
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    abc = _useState2[0],
    setAbc = _useState2[1];
  var togglePanel = function togglePanel(index, item) {
    if (!accordion) {
      var _count$current$index, _count$current$index2;
      if (((_count$current$index = count.current[index]) === null || _count$current$index === void 0 ? void 0 : _count$current$index.style.height) == "") {
        count.current[index].style.height = height + "px";
        return;
      }
      if (((_count$current$index2 = count.current[index]) === null || _count$current$index2 === void 0 ? void 0 : _count$current$index2.style.height) == height + "px") {
        var _count$current$index3;
        count.current[index].style.height = "";
        console.log((_count$current$index3 = count.current[index]) === null || _count$current$index3 === void 0 ? void 0 : _count$current$index3.style.height);
      }
    }
    if (accordion) {
      setAbc(index);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "collapse"
  }, items.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.key
    }, /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return togglePanel(index, item.key);
      },
      className: "fold"
    }, /*#__PURE__*/React.createElement("span", null, item.label)), /*#__PURE__*/React.createElement("div", {
      className: "collapseCenter",
      ref: function ref(el) {
        return count.current[index] = el;
      },
      style: accordion ? {
        height: abc == index ? height + "px" : "0"
      } : undefined
    }, item.children));
  }));
};
export default Panel;
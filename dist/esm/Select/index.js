function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useMemo, createRef, useEffect, useState, useCallback, memo } from 'react';
import { DownOutlined, LoadingOutlined, CloseOutlined } from '@ant-design/icons';
import "./index.module.less";
var Select = function Select(props) {
  var option = props.option,
    width = props.width,
    placeholder = props.placeholder,
    disabled = props.disabled,
    loading = props.loading,
    showSearch = props.showSearch,
    clearable = props.clearable,
    handleSelectCallback = props.handleSelectCallback,
    handleTextChange = props.handleTextChange;
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  var optionRef = /*#__PURE__*/createRef();
  useEffect(function () {
    optionRef.current.height = "0px";
    console.log(option);
  }, []);
  var ownsWidth = useMemo(function () {
    //传参宽度
    if (width) {
      return {
        width: "".concat(width, "px")
      };
    }
    return {};
  }, [width]);
  var disabledStyle = useMemo(function () {
    //禁用状态
    if (disabled) {
      return {
        cursor: 'not-allowed',
        background: 'rgb(238, 238, 238)'
      };
    }
  }, [disabled]);
  var toggleOptions = function toggleOptions(e) {
    //切换下拉
    e.stopPropagation();
    if (disabled) return;
    console.log(optionRef.current.style.height);
    if (optionRef.current.style.height === '0px' || optionRef.current.style.height === '') {
      if (showSearch) {
        optionRef.current.style.height = "".concat(inputFilterOtpions.length * 100, "%");
      } else {
        optionRef.current.style.height = "".concat(option.length * 100, "%");
      }
    } else {
      optionRef.current.style.height = '0px';
    }
    console.log(optionRef.current.height);
  };
  var changeOptions = function changeOptions(v, e) {
    //选择选项
    e.stopPropagation();
    if (v.disabled) return;
    optionRef.current.style.height = '0px';
    setSelected(v.label);
    if (handleSelectCallback) {
      handleSelectCallback(v.value);
    }
  };
  var inputFilterOtpions = useMemo(function () {
    //输入状态options过滤
    return option.filter(function (item) {
      return item.label.includes(selected);
    });
  }, [option, selected]);
  var handleInputChange = useCallback(function (e) {
    //输入后的回调
    setSelected(e.target.value);
    optionRef.current.style.height = option.filter(function (item) {
      return item.label.includes(e.target.value);
    }).length * 100 + '%';
    if (handleTextChange) {
      handleTextChange(e.target.value);
    }
  }, [selected]);
  return showSearch ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "select",
    style: _objectSpread(_objectSpread({}, ownsWidth), disabledStyle)
  }, /*#__PURE__*/React.createElement("div", {
    className: "selected"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "selected",
    value: selected,
    placeholder: placeholder,
    onClick: toggleOptions,
    onChange: function onChange(e) {
      return handleInputChange(e);
    }
  }), clearable ? /*#__PURE__*/React.createElement(CloseOutlined, {
    onClick: function onClick() {
      return setSelected('');
    }
  }) : /*#__PURE__*/React.createElement(DownOutlined, {
    onClick: toggleOptions
  })), /*#__PURE__*/React.createElement("div", {
    className: "selectOptions",
    style: ownsWidth,
    ref: optionRef
  }, inputFilterOtpions.map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.label,
      className: "option",
      style: s.disabled ? {
        cursor: 'not-allowed',
        background: 'rgb(238, 238, 238)'
      } : {},
      onClick: function onClick(e) {
        return changeOptions(s, e);
      }
    }, s.label);
  })))) : /*#__PURE__*/React.createElement("div", {
    className: "select",
    style: _objectSpread(_objectSpread({}, ownsWidth), disabledStyle)
  }, /*#__PURE__*/React.createElement("div", {
    className: "selected",
    onClick: toggleOptions
  }, selected ? /*#__PURE__*/React.createElement("div", {
    className: "size"
  }, selected) : placeholder && /*#__PURE__*/React.createElement("div", {
    className: "placeholder"
  }, placeholder) || /*#__PURE__*/React.createElement("div", null), loading ? /*#__PURE__*/React.createElement(LoadingOutlined, null) : /*#__PURE__*/React.createElement(DownOutlined, null)), /*#__PURE__*/React.createElement("div", {
    className: "selectOptions",
    style: ownsWidth,
    ref: optionRef
  }, option.map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.label,
      className: "option",
      style: s.disabled ? {
        cursor: 'not-allowed',
        background: 'rgb(238, 238, 238)'
      } : {},
      onClick: function onClick(e) {
        return changeOptions(s, e);
      }
    }, s.label);
  })));
};
export default /*#__PURE__*/memo(Select);
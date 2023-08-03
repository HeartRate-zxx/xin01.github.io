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
import React, { useEffect, memo, useState, useCallback } from 'react';
import { DoubleLeftOutlined, LeftOutlined, DoubleRightOutlined, RightOutlined, SwapRightOutlined } from '@ant-design/icons';
import Input from "../../Input";
import "./index.module.less";
var RangeDatePicker = function RangeDatePicker(props) {
  var showClear = props.showClear,
    align = props.align,
    handleChange = props.handleChange,
    handleIptChange = props.handleIptChange;
  var _useState = useState({
      startYear: new Date().getFullYear(),
      startMonth: new Date().getMonth() + 1,
      startDay: new Date().getDate()
    }),
    _useState2 = _slicedToArray(_useState, 2),
    startDate = _useState2[0],
    setStartDate = _useState2[1];
  var _useState3 = useState({
      endYear: new Date().getFullYear(),
      endMonth: new Date().getMonth() + 2,
      endDay: new Date().getDate()
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    endDate = _useState4[0],
    setEndDate = _useState4[1];
  var _useState5 = useState(''),
    _useState6 = _slicedToArray(_useState5, 2),
    startTime = _useState6[0],
    setStartTime = _useState6[1];
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    endTime = _useState8[0],
    setEndTime = _useState8[1];
  var _useState9 = useState(0),
    _useState10 = _slicedToArray(_useState9, 2),
    startMonthFirstDay = _useState10[0],
    setStartMonthFirstDay = _useState10[1]; //本月第一天是周几
  var _useState11 = useState(0),
    _useState12 = _slicedToArray(_useState11, 2),
    endMonthFirstDay = _useState12[0],
    setEndMonthFirstDay = _useState12[1]; //本月第一天是周几
  var _useState13 = useState([]),
    _useState14 = _slicedToArray(_useState13, 2),
    startDayListArray = _useState14[0],
    setStartDayListArray = _useState14[1]; //start月的日历
  var _useState15 = useState([]),
    _useState16 = _slicedToArray(_useState15, 2),
    endDayListArray = _useState16[0],
    setEndDayListArray = _useState16[1]; //end月的日历
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    showTimeDiaglog = _useState18[0],
    setShowTimeDialog = _useState18[1]; //日期选择器dialog show
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    renderShowDialog = _useState20[0],
    setRenderShowDialog = _useState20[1];
  var _useState21 = useState({
      start: false,
      end: false
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    chooseStatus = _useState22[0],
    setChooseStatus = _useState22[1]; //是否被选择过

  var activeBorderDom = document.querySelector('.activeBorder');
  useEffect(function () {
    var startYear = startDate.startYear,
      startMonth = startDate.startMonth;
    var endYear = endDate.endYear,
      endMonth = endDate.endMonth;
    var startFirstDay = new Date("".concat(startYear, "/").concat(startMonth, "/1")).getDay();
    var endFirstDay = new Date("".concat(endYear, "/").concat(endMonth, "/1")).getDay();
    var startTotalDay = new Date(startYear, startMonth, 0).getDate();
    var endTotalDay = new Date(endYear, endMonth, 0).getDate();
    var startDayList = new Array(startFirstDay).fill('');
    var endDayList = new Array(endFirstDay).fill('');
    for (var i = 1; i < startTotalDay + 1; i++) {
      startDayList.push(i);
    }
    for (var _i2 = 1; _i2 < endTotalDay + 1; _i2++) {
      endDayList.push(_i2);
    }
    setStartDayListArray(startDayList);
    setStartMonthFirstDay(startFirstDay);
    setEndDayListArray(endDayList);
    setEndMonthFirstDay(endFirstDay);
  }, [startDate.startYear, startDate.startMonth, endDate.endYear, endDate.endMonth]);
  useEffect(function () {
    window.addEventListener('click', function () {
      setShowTimeDialog(false);
      setTimeout(function () {
        setRenderShowDialog(false);
      }, 300);
    });
  }, []);
  useEffect(function () {
    if (chooseStatus.start && chooseStatus.end) {
      setShowTimeDialog(false);
      setTimeout(function () {
        setRenderShowDialog(false);
      }, 300);
      setChooseStatus(function (old) {
        old.start = false;
        old.end = false;
        return _objectSpread({}, old);
      });
      handleChange && handleChange(startTime, endTime);
    }
  }, [chooseStatus]);
  var startIptFocus = function startIptFocus() {
    setShowTimeDialog(true);
    setRenderShowDialog(true);
    activeBorderDom.style.left = '0';
  };
  var endIptFocus = function endIptFocus() {
    setShowTimeDialog(true);
    setRenderShowDialog(true);
    activeBorderDom.style.left = '190px';
  };
  var preYear = function preYear(type) {
    //切换上一年
    if (type == 'start') {
      var renderDate = _objectSpread({}, startDate);
      renderDate.startYear -= 1;
      setStartDate(renderDate);
    } else if (type == 'end') {
      if (endDate.endYear > startDate.startYear) {
        var _renderDate = _objectSpread({}, endDate);
        _renderDate.endYear -= 1;
        setEndDate(_renderDate);
      }
    }
  };
  var nextYear = function nextYear(type) {
    //切换下一年
    if (type == 'start') {
      if (startDate.startYear < endDate.endYear) {
        var renderDate = _objectSpread({}, startDate);
        renderDate.startYear += 1;
        setStartDate(renderDate);
      }
    } else if (type == 'end') {
      var _renderDate2 = _objectSpread({}, endDate);
      _renderDate2.endYear += 1;
      setEndDate(_renderDate2);
    }
  };
  var preMonth = function preMonth(type) {
    //切换上一个月
    if (type == 'start') {
      var renderDate = _objectSpread({}, startDate);
      if (renderDate.startMonth == 1) {
        renderDate.startMonth = 12;
        renderDate.startYear -= 1;
      } else {
        renderDate.startMonth -= 1;
      }
      setStartDate(renderDate);
    } else if (type == 'end') {
      if (endDate.endYear == startDate.startYear && endDate.endMonth == startDate.startMonth) {
        return;
      } else {
        var _renderDate3 = _objectSpread({}, endDate);
        if (_renderDate3.endMonth == 1) {
          _renderDate3.endMonth = 12;
          _renderDate3.endYear -= 1;
        } else {
          _renderDate3.endMonth -= 1;
        }
        if (_renderDate3.endDay < startDate.startDay) {
          _renderDate3.endDay = startDate.startDay;
        }
        setEndDate(_renderDate3);
      }
    }
  };
  var nextMonth = function nextMonth(type) {
    //切换下一个月
    if (type == 'start') {
      if (endDate.endYear == startDate.startYear && endDate.endMonth == startDate.startMonth) {
        return;
      } else {
        var renderDate = _objectSpread({}, startDate);
        if (renderDate.startMonth == 12) {
          renderDate.startMonth = 1;
          renderDate.startYear += 1;
        } else {
          renderDate.startMonth += 1;
        }
        setStartDate(renderDate);
      }
    } else if (type == 'end') {
      var _renderDate4 = _objectSpread({}, endDate);
      if (_renderDate4.endMonth == 12) {
        _renderDate4.endMonth = 1;
        _renderDate4.endYear += 1;
      } else {
        _renderDate4.endMonth += 1;
      }
      setEndDate(_renderDate4);
    }
  };
  var chooseStartDay = function chooseStartDay(day) {
    //选择开始日期
    if (day == '') return;
    setStartDate(function (old) {
      old.startDay = day;
      return _objectSpread({}, old);
    });
    setChooseStatus(function (old) {
      old.start = true;
      return _objectSpread({}, old);
    });
    setStartTime("".concat(startDate.startYear, "-").concat(startDate.startMonth, "-").concat(day));
    if (startDate.startYear == endDate.endYear && startDate.startMonth == endDate.endMonth) {
      if (day > endDate.endDay) {
        setEndDate(function (old) {
          old.endDay = day;
          return _objectSpread({}, old);
        });
      }
    }
  };
  var chooseEndDay = function chooseEndDay(day) {
    //选择结束日期
    if (startDate.startYear == endDate.endYear && startDate.startMonth == endDate.endMonth) {
      if (day < startDate.startDay) {
        return;
      }
    }
    setChooseStatus(function (old) {
      old.end = true;
      return _objectSpread({}, old);
    });
    setEndDate(function (old) {
      old.endDay = day;
      return _objectSpread({}, old);
    });
    setEndTime("".concat(endDate.endYear, "-").concat(endDate.endMonth, "-").concat(day));
  };
  var enterChangeStartTime = function enterChangeStartTime(e) {
    //回车改变
    if (e.keyCode == 13) {
      if (/^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(startTime)) {
        var start = startTime.split('-');
        if (Number(start[0]) <= endDate.endYear && Number(start[1]) <= endDate.endMonth && Number(start[2]) <= endDate.endDay) {
          setStartDate(function (old) {
            old.startYear = Number(start[0]);
            old.startMonth = Number(start[1]);
            old.startDay = Number(start[2]);
            return _objectSpread({}, old);
          });
          setChooseStatus(function (old) {
            old.start = true;
            return _objectSpread({}, old);
          });
        } else {
          setStartTime('');
        }
      } else {
        setStartTime('');
      }
    }
  };
  var blurStartTime = function blurStartTime() {
    //失去焦点
    if (!/^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(startTime)) {
      setStartTime('');
    }
  };
  var enterChangeEndTime = function enterChangeEndTime(e) {
    //回车改变
    if (e.keyCode == 13) {
      if (/^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(endTime)) {
        var start = endTime.split('-');
        if (Number(start[0]) >= startDate.startYear && Number(start[1]) >= startDate.startMonth && Number(start[2]) >= startDate.startDay) {
          setEndDate(function (old) {
            old.endYear = Number(start[0]);
            old.endMonth = Number(start[1]);
            old.endDay = Number(start[2]);
            return _objectSpread({}, old);
          });
          setChooseStatus(function (old) {
            old.end = true;
            return _objectSpread({}, old);
          });
        } else {
          setEndTime('');
        }
      } else {
        setEndTime('');
      }
    }
  };
  var blurEndTime = function blurEndTime() {
    //失去焦点
    if (!/^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(endTime)) {
      setEndTime('');
    }
  };
  var clearStartTime = function clearStartTime() {
    //清空开始时间
    setStartTime('');
    setStartDate(function (old) {
      var now = new Date();
      old.startDay = now.getDate();
      old.startMonth = now.getMonth() + 1;
      old.startYear = now.getFullYear();
      return _objectSpread({}, old);
    });
  };
  var clearEndTime = function clearEndTime() {
    //清空结束时间
    setEndTime('');
    setEndDate(function (old) {
      var now = new Date();
      old.endDay = now.getDate();
      old.endMonth = now.getMonth() + 1;
      old.endYear = now.getFullYear();
      return _objectSpread({}, old);
    });
  };
  var activeStyles = function activeStyles() {
    //选中的样式
    return {
      activeDay: {
        color: '#fff',
        background: '#1890FF',
        fontWeight: 'bold',
        borderRadius: '5px'
      },
      showDialog: {
        opacity: 1
      }
    };
  };
  var alignFn = useCallback(function () {
    if (!align) {
      return {
        bottom: {
          top: '40px'
        }
      };
    }
    return {
      right: {
        left: '360px',
        bottom: '20px'
      },
      left: {
        right: '600px',
        bottom: '20px'
      },
      top: {
        bottom: '40px'
      },
      bottom: {
        top: '40px'
      }
    }[align];
  }, [align]);
  var disabledClass = useCallback(function (day) {
    if (day == '') {
      return 'white';
    }
    if (startDate.startYear == endDate.endYear && startDate.startMonth == endDate.endMonth) {
      if (day < startDate.startDay) {
        return 'disabled-day';
      }
      return 'day-box';
    }
    return 'day-box';
  }, [startDate, endDate]);
  return /*#__PURE__*/React.createElement("div", {
    className: "range",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rangePicker",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u8BF7\u8F93\u5165\u5F00\u59CB\u65E5\u671F",
    defaultValue: startTime ? startTime : "".concat(startDate.startYear, "-").concat(startDate.startMonth, "-").concat(startDate.startDay),
    handleIptChange: function handleIptChange(v) {
      return setStartTime(v);
    },
    handleIptFocus: startIptFocus,
    handleKeyDown: function handleKeyDown(e) {
      return enterChangeStartTime(e);
    },
    handleIptBlur: blurStartTime,
    clearCallback: clearStartTime,
    showClear: showClear
  }), /*#__PURE__*/React.createElement(SwapRightOutlined, {
    style: {
      color: '#cccccc',
      fontSize: '20px'
    }
  }), /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u8BF7\u8F93\u5165\u7ED3\u675F\u65E5\u671F",
    defaultValue: endTime ? endTime : "".concat(endDate.endYear, "-").concat(endDate.endMonth, "-").concat(endDate.endDay),
    handleIptChange: function handleIptChange(v) {
      return setEndTime(v);
    },
    handleIptFocus: endIptFocus,
    handleKeyDown: function handleKeyDown(e) {
      return enterChangeEndTime(e);
    },
    handleIptBlur: blurEndTime,
    clearCallback: clearEndTime,
    showClear: showClear
  }), /*#__PURE__*/React.createElement("div", {
    className: "activeBorder"
  })), renderShowDialog && /*#__PURE__*/React.createElement("div", {
    className: "date-box",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: _objectSpread(_objectSpread({}, showTimeDiaglog ? activeStyles().showDialog : {}), alignFn())
  }, /*#__PURE__*/React.createElement("div", {
    className: "left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "top-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(DoubleLeftOutlined, {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return preYear('start');
    }
  }), /*#__PURE__*/React.createElement(LeftOutlined, {
    style: {
      marginLeft: '10px',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return preMonth('start');
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, startDate.startYear, "\u5E74 ", startDate.startMonth, "\u6708"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RightOutlined, {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return nextMonth('start');
    }
  }), /*#__PURE__*/React.createElement(DoubleRightOutlined, {
    style: {
      marginLeft: '10px',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return nextYear('start');
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "week"
  }, /*#__PURE__*/React.createElement("div", null, "\u4E00"), /*#__PURE__*/React.createElement("div", null, "\u4E8C"), /*#__PURE__*/React.createElement("div", null, "\u4E09"), /*#__PURE__*/React.createElement("div", null, "\u56DB"), /*#__PURE__*/React.createElement("div", null, "\u4E94"), /*#__PURE__*/React.createElement("div", null, "\u516D"), /*#__PURE__*/React.createElement("div", null, "\u65E5")), /*#__PURE__*/React.createElement("div", {
    className: "day-list"
  }, startDayListArray.map(function (i, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: i == '' ? 'white' : 'box-list',
      style: i == startDate.startDay ? activeStyles().activeDay : {},
      onClick: function onClick() {
        return chooseStartDay(Number(i));
      }
    }, i);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "top-bar"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DoubleLeftOutlined, {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return preYear('end');
    }
  }), /*#__PURE__*/React.createElement(LeftOutlined, {
    style: {
      marginLeft: '10px',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return preMonth('end');
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "info"
  }, endDate.endYear, "\u5E74 ", endDate.endMonth, "\u6708"), /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(RightOutlined, {
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return nextMonth('end');
    }
  }), /*#__PURE__*/React.createElement(DoubleRightOutlined, {
    style: {
      marginLeft: '10px',
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return nextYear('end');
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "week"
  }, /*#__PURE__*/React.createElement("div", null, "\u4E00"), /*#__PURE__*/React.createElement("div", null, "\u4E8C"), /*#__PURE__*/React.createElement("div", null, "\u4E09"), /*#__PURE__*/React.createElement("div", null, "\u56DB"), /*#__PURE__*/React.createElement("div", null, "\u4E94"), /*#__PURE__*/React.createElement("div", null, "\u516D"), /*#__PURE__*/React.createElement("div", null, "\u65E5")), /*#__PURE__*/React.createElement("div", {
    className: "day-list"
  }, endDayListArray.map(function (i, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: disabledClass(i),
      style: i == endDate.endDay ? activeStyles().activeDay : {},
      onClick: function onClick() {
        return chooseEndDay(Number(i));
      }
    }, i);
  })))));
};
export default /*#__PURE__*/memo(RangeDatePicker);
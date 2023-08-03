function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
import React, { memo, useState, useEffect, useCallback } from 'react';
import RangeDatePicker from "./rangeDatePicker";
import { FieldTimeOutlined, CloseOutlined, CheckOutlined, LeftOutlined, RightOutlined, RollbackOutlined, DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import "./index.module.less";
var monthList = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
var DatePicker = function DatePicker(props) {
  var type = props.type,
    showRange = props.showRange,
    showClear = props.showClear,
    align = props.align,
    handleChange = props.handleChange;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showTimeDialog = _useState2[0],
    setShowTimeDialog = _useState2[1]; //显示dialog
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    renderShowDialog = _useState4[0],
    setRenderShowDialog = _useState4[1]; // 设置dialog
  var _useState5 = useState({
      //选中的日期
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate()
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    nowDate = _useState6[0],
    setNowDate = _useState6[1];
  var _useState7 = useState(0),
    _useState8 = _slicedToArray(_useState7, 2),
    thisMonthFirstDay = _useState8[0],
    setThisMonthFirstDay = _useState8[1]; //本月第一天是周几
  var _useState9 = useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    dayListArray = _useState10[0],
    setDayListArray = _useState10[1]; //每月的日历
  var _useState11 = useState(0),
    _useState12 = _slicedToArray(_useState11, 2),
    pickStatus = _useState12[0],
    setPickStatus = _useState12[1]; //timerpick状态，0表示选择日期，1表示改变月份，2表示改变年份
  var _useState13 = useState(null),
    _useState14 = _slicedToArray(_useState13, 2),
    iptValue = _useState14[0],
    setIptValue = _useState14[1]; //文本框输入的值
  var _useState15 = useState([2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]),
    _useState16 = _slicedToArray(_useState15, 2),
    yearList = _useState16[0],
    setYearList = _useState16[1];
  useEffect(function () {
    window.addEventListener('click', function () {
      setShowTimeDialog(false);
      setTimeout(function () {
        setRenderShowDialog(false);
      }, 300);
    });
  }, []);
  useEffect(function () {
    var year = nowDate.year,
      month = nowDate.month;
    var firstDay = new Date("".concat(year, "/").concat(month, "/1")).getDay();
    var totalDay = new Date(year, month, 0).getDate();
    var dayList = new Array(firstDay).fill('');
    for (var i = 1; i < totalDay + 1; i++) {
      dayList.push(i);
    }
    setThisMonthFirstDay(firstDay); //重新计算本月第一天为周几
    setDayListArray(dayList); //重排本月日历
  }, [nowDate.year, nowDate.month]);
  var openDialog = function openDialog(e) {
    e.stopPropagation();
    setShowTimeDialog(true);
    setRenderShowDialog(true);
  };
  var changeDay = function changeDay(day) {
    //改变日期
    if (!day) return;
    setNowDate(function (old) {
      old.day = day;
      return _objectSpread({}, old);
    });
    handleChange && handleChange("".concat(nowDate.year, "-").concat(nowDate.month, "-").concat(nowDate.day));
    setShowTimeDialog(false);
    setTimeout(function () {
      setRenderShowDialog(false);
    }, 300);
  };
  var setToToday = function setToToday() {
    //改变到今天
    var today = new Date();
    setNowDate(function (old) {
      old.year = today.getFullYear();
      old.month = today.getMonth() + 1;
      old.day = today.getDate();
      return _objectSpread({}, old);
    });
  };
  var changeToNextMonth = function changeToNextMonth() {
    //改变到下个月
    var renderDate = _objectSpread({}, nowDate);
    if (renderDate.month === 12) {
      //12月新年
      renderDate.year += 1;
      renderDate.month = 1;
    } else {
      //普通递增
      renderDate.month += 1;
    }
    setNowDate(renderDate);
  };
  var changeToPreMonth = function changeToPreMonth() {
    //改变到上个月
    var renderDate = _objectSpread({}, nowDate);
    if (renderDate.month === 1) {
      //12月新年
      renderDate.year -= 1;
      renderDate.month = 12;
    } else {
      //普通递增
      renderDate.month -= 1;
    }
    setNowDate(renderDate);
  };
  var changeMonth = function changeMonth(month) {
    //改变月份
    setNowDate(function (old) {
      old.month = month;
      return _objectSpread({}, old);
    });
    setPickStatus(0);
  };
  var changeYear = function changeYear(year) {
    //改变年份
    setNowDate(function (old) {
      old.year = year;
      return _objectSpread({}, old);
    });
    setPickStatus(0);
  };
  var bindIptText = function bindIptText(e) {
    //绑定文本框
    setIptValue(e.target.value);
  };
  var enterChangeDate = function enterChangeDate(e) {
    //回车确认更改
    if (e.keyCode === 13) {
      //回车
      if (iptValue !== null) {
        if (/^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(iptValue)) {
          var inputValue = iptValue.split('-');
          setNowDate(function (old) {
            old.year = Number(inputValue[0]);
            old.month = Number(inputValue[1]);
            old.day = Number(inputValue[2]);
            return _objectSpread({}, old);
          });
          handleChange && handleChange("".concat(Number(inputValue[0]), "-").concat(Number(inputValue[1]), "-").concat(Number(inputValue[2])));
        }
      }
      setIptValue(null);
      setShowTimeDialog(false);
      setTimeout(function () {
        setRenderShowDialog(false);
      }, 300);
    }
  };
  var blurInput = function blurInput() {
    //文本框失去焦点
    if (iptValue !== null) {
      if (/^([1-2]\d{3})-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30|31)$/.test(iptValue)) {
        var inputValue = iptValue.split('-');
        setNowDate(function (old) {
          old.year = Number(inputValue[0]);
          old.month = Number(inputValue[1]);
          old.day = Number(inputValue[2]);
          return _objectSpread({}, old);
        });
      }
    }
    setIptValue(null);
  };
  var setNextGroupYear = function setNextGroupYear() {
    //设定下一组年份
    setYearList(function (old) {
      return _toConsumableArray(old.map(function (y) {
        return y + 9;
      }));
    });
  };
  var setPreGroupYear = function setPreGroupYear() {
    // 设定下一组年份
    setYearList(function (old) {
      return _toConsumableArray(old.map(function (y) {
        return y - 9;
      }));
    });
  };
  var clearDate = function clearDate() {
    //清空
    setNowDate(function (old) {
      old.year = new Date().getFullYear(), old.month = new Date().getMonth() + 1, old.day = new Date().getDate();
      return _objectSpread({}, old);
    });
    setIptValue(null);
  };
  var rangeDatePickChangeCallback = function rangeDatePickChangeCallback(start, end) {
    handleChange && handleChange(start, end);
  };
  var activeStyle = {
    //选中的所有样式
    result: {
      letterSpacing: 'normal',
      color: '#1890FF',
      width: '120px'
    },
    icon: {
      opacity: 1,
      marginLeft: '5px'
    },
    checkBox: {
      opacity: 1
    },
    dayActive: {
      backgroundColor: '#1890FF',
      color: '#fff',
      fontWeight: 'bold',
      borderRadius: '5px'
    }
  };
  var alignFn = useCallback(function () {
    //对齐方式
    if (!align) {
      return {
        bottom: {
          top: '40px'
        }
      };
    }
    return {
      right: {
        left: '170px',
        bottom: '20px'
      },
      left: {
        right: '800px',
        bottom: '40px'
      },
      top: {
        bottom: '40px'
      },
      bottom: {
        top: '40px'
      }
    }[align];
  }, [align]);
  return showRange ? /*#__PURE__*/React.createElement(RangeDatePicker, {
    showClear: showClear,
    align: align ? align : 'bottom',
    handleChange: rangeDatePickChangeCallback
  }) : /*#__PURE__*/React.createElement("div", {
    className: "time-picker"
  }, (type == 'primary' || !type) && /*#__PURE__*/React.createElement("div", {
    className: "result",
    style: showTimeDialog ? activeStyle.result : {},
    onClick: function onClick(e) {
      return openDialog(e);
    }
  }, /*#__PURE__*/React.createElement("span", null, nowDate.year, "-", nowDate.month, "-", nowDate.day), /*#__PURE__*/React.createElement("div", {
    className: "icon",
    style: showTimeDialog ? activeStyle.icon : {}
  }, /*#__PURE__*/React.createElement(FieldTimeOutlined, null))), type == 'input' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: iptValue !== null ? iptValue : "".concat(nowDate.year, "-").concat(nowDate.month, "-").concat(nowDate.day),
    onClick: function onClick(e) {
      return openDialog(e);
    },
    onChange: function onChange(e) {
      return bindIptText(e);
    },
    onKeyDown: function onKeyDown(e) {
      return enterChangeDate(e);
    },
    onBlur: blurInput
  }), showClear && /*#__PURE__*/React.createElement(CloseOutlined, {
    style: {
      position: 'relative',
      right: '15px',
      fontSize: '12px',
      cursor: 'pointer'
    },
    onClick: clearDate
  })), renderShowDialog && /*#__PURE__*/React.createElement("div", {
    className: "check-box",
    style: _objectSpread(_objectSpread({}, showTimeDialog ? activeStyle.checkBox : {}), alignFn()),
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "top-bar"
  }, /*#__PURE__*/React.createElement("b", {
    className: "year",
    onClick: function onClick() {
      return setPickStatus(2);
    }
  }, nowDate.year), /*#__PURE__*/React.createElement("b", {
    className: "month",
    onClick: function onClick() {
      return setPickStatus(1);
    },
    style: {
      marginRight: '20px'
    }
  }, nowDate.month), /*#__PURE__*/React.createElement("div", {
    className: "close-icon",
    onClick: function onClick() {
      setShowTimeDialog(false);
      setTimeout(function () {
        setRenderShowDialog(false);
      }, 300);
    }
  }, /*#__PURE__*/React.createElement(CloseOutlined, null))), /*#__PURE__*/React.createElement("div", {
    className: "date-content"
  }, pickStatus == 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "week"
  }, /*#__PURE__*/React.createElement("div", null, "\u65E5"), /*#__PURE__*/React.createElement("div", null, "\u4E00"), /*#__PURE__*/React.createElement("div", null, "\u4E8C"), /*#__PURE__*/React.createElement("div", null, "\u4E09"), /*#__PURE__*/React.createElement("div", null, "\u56DB"), /*#__PURE__*/React.createElement("div", null, "\u4E94"), /*#__PURE__*/React.createElement("div", null, "\u516D")), /*#__PURE__*/React.createElement("div", {
    className: "day-list"
  }, dayListArray.map(function (day, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: day ? 'day' : 'white',
      style: nowDate.day == day ? activeStyle.dayActive : {},
      onClick: function onClick() {
        return changeDay(day);
      }
    }, day);
  }))), pickStatus == 1 && /*#__PURE__*/React.createElement("div", {
    className: "month-toggle-box"
  }, monthList.map(function (m, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: m,
      className: "month",
      style: index + 1 == nowDate.month ? activeStyle.dayActive : {},
      onClick: function onClick() {
        return changeMonth(index + 1);
      }
    }, m);
  })), pickStatus == 2 && /*#__PURE__*/React.createElement("div", {
    className: "year-toggle-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "toggle-bar"
  }, /*#__PURE__*/React.createElement(DoubleLeftOutlined, {
    style: {
      cursor: 'pointer'
    },
    onClick: setPreGroupYear
  }), /*#__PURE__*/React.createElement("span", null, yearList[0], "-", yearList[8]), /*#__PURE__*/React.createElement(DoubleRightOutlined, {
    style: {
      cursor: 'pointer'
    },
    onClick: setNextGroupYear
  })), /*#__PURE__*/React.createElement("div", {
    className: "list"
  }, yearList.map(function (m) {
    return /*#__PURE__*/React.createElement("div", {
      key: m,
      className: "year",
      style: m == nowDate.year ? activeStyle.dayActive : {},
      onClick: function onClick() {
        return changeYear(m);
      }
    }, m);
  })))), /*#__PURE__*/React.createElement("div", {
    className: "time-footer"
  }, pickStatus == 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "today",
    onClick: setToToday
  }, /*#__PURE__*/React.createElement("span", null, "\u4ECA\u5929"), /*#__PURE__*/React.createElement(CheckOutlined, null)), /*#__PURE__*/React.createElement("div", {
    className: "toggle-month"
  }, /*#__PURE__*/React.createElement(LeftOutlined, {
    style: {
      marginRight: '5px'
    },
    onClick: changeToPreMonth
  }), /*#__PURE__*/React.createElement(RightOutlined, {
    onClick: changeToNextMonth
  }))), (pickStatus == 1 || pickStatus == 2) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    className: "go-back-icon",
    onClick: function onClick() {
      return setPickStatus(0);
    }
  }, /*#__PURE__*/React.createElement(RollbackOutlined, null))))));
};
export default /*#__PURE__*/memo(DatePicker);
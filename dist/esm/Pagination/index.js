function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState, useEffect, useMemo, memo } from 'react';
import { EllipsisOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import Select from "../Select/index";
import "./index.module.less";
var Pagination = function Pagination(props) {
  var changePageCallback = props.changePageCallback,
    total = props.total,
    pageSizeOptions = props.pageSizeOptions,
    showJumpInput = props.showJumpInput,
    showSizeChanger = props.showSizeChanger;
  var _useState = useState(1),
    _useState2 = _slicedToArray(_useState, 2),
    nowIndex = _useState2[0],
    setNowIndex = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    pageRenderArray = _useState4[0],
    setPageRenderArray = _useState4[1];
  var _useState5 = useState(pageSizeOptions ? pageSizeOptions[0] : 10),
    _useState6 = _slicedToArray(_useState5, 2),
    sizePage = _useState6[0],
    setSizePage = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showSizeOptions = _useState8[0],
    setShowSizeOptions = _useState8[1];
  var totalPage = useMemo(function () {
    setNowIndex(1);
    if (Math.ceil(total / sizePage) > 6) {
      setPageRenderArray([2, 3, 4, 5, 6]);
    } else {
      if (Math.ceil(total / sizePage) > 2) {
        var array = new Array(Math.ceil(total / sizePage) - 2).fill(0);
        array.forEach(function (item, index) {
          array[index] = index + 2;
        });
        setPageRenderArray(array);
      } else {
        setPageRenderArray([]);
      }
    }
    return Math.ceil(total / sizePage);
  }, [total, sizePage]);
  useEffect(function () {
    console.log(_typeof(nowIndex));
  }, [nowIndex]);

  //点击改页码
  var changePage = function changePage(pageNum) {
    return function () {
      //小型分页器
      if (totalPage <= 6) {
        changePageCallback(pageNum);
        return setNowIndex(pageNum);
      }
      if (pageNum > 4 && pageNum <= totalPage - 4) {
        setPageRenderArray([pageNum - 2, pageNum - 1, pageNum, pageNum + 1, pageNum + 2]);
      }
      //页码为1的情况
      if (pageNum <= 4) {
        setPageRenderArray([2, 3, 4, 5, 6]);
      }
      //页码到倒数第四页内的情况
      if (pageNum > totalPage - 4) {
        setPageRenderArray([totalPage - 5, totalPage - 4, totalPage - 3, totalPage - 2, totalPage - 1]);
      }
      setNowIndex(pageNum);
      changePageCallback(pageNum);
    };
  };
  //向前翻一页
  var prevPage = function prevPage() {
    if (nowIndex === 1) {
      return;
    }
    setNowIndex(nowIndex - 1);
    if (totalPage > 6) {
      if (nowIndex > totalPage - 3) {
        return;
      } else if (nowIndex > 4) {
        setPageRenderArray(pageRenderArray.map(function (item) {
          return item - 1;
        }));
      } else if (nowIndex - 5 <= 4) {
        //开头几页翻页的情况，回到第一页
        setPageRenderArray([2, 3, 4, 5, 6]);
      }
    }
    changePageCallback(nowIndex - 1);
  };
  //向后翻一页
  var nextPage = function nextPage() {
    if (nowIndex === totalPage) {
      return;
    }
    setNowIndex(nowIndex + 1);
    if (totalPage > 6) {
      if (nowIndex + 5 > totalPage) {
        setPageRenderArray([totalPage - 5, totalPage - 4, totalPage - 3, totalPage - 2, totalPage - 1]);
      } else if (nowIndex < 4) {
        return;
      } else if (nowIndex + 5 < totalPage) {
        setPageRenderArray(pageRenderArray.map(function (item) {
          return item + 1;
        }));
      }
    }
    changePageCallback(nowIndex + 1);
  };
  //向前翻五页
  var prevFivePage = function prevFivePage() {
    var updateIndex = 0;
    if (nowIndex - 5 <= 4) {
      //开头几页翻页的情况，回到第一页
      setPageRenderArray([2, 3, 4, 5, 6]);
      updateIndex = nowIndex - 5 <= 1 ? 1 : nowIndex - 5;
    } else if (nowIndex + 5 > totalPage) {
      setPageRenderArray([nowIndex - 7, nowIndex - 6, nowIndex - 5, nowIndex - 4, nowIndex - 3]);
      updateIndex = nowIndex - 5;
    } else if (nowIndex - 5 > 4) {
      //中间翻页的情况
      setPageRenderArray(pageRenderArray.map(function (item) {
        return item - 5;
      }));
      updateIndex = nowIndex - 5;
    }
    setNowIndex(updateIndex);
    changePageCallback(updateIndex);
  };
  //向后翻五页
  var nextFivePage = function nextFivePage() {
    var updateIndex = 0;
    if (nowIndex + 7 >= totalPage) {
      setPageRenderArray([totalPage - 5, totalPage - 4, totalPage - 3, totalPage - 2, totalPage - 1]);
      updateIndex = nowIndex + 5 > totalPage ? totalPage : nowIndex + 5;
    } else if (nowIndex - 5 < 0) {
      setPageRenderArray([nowIndex + 3, nowIndex + 4, nowIndex + 5, nowIndex + 6, nowIndex + 7]);
      updateIndex = nowIndex + 5;
    } else if (nowIndex + 5 < totalPage) {
      setPageRenderArray(pageRenderArray.map(function (item) {
        return item + 5;
      }));
      updateIndex = nowIndex + 5;
    }
    setNowIndex(updateIndex);
    changePageCallback(updateIndex);
  };
  //跳页
  var jumpPageNum = function jumpPageNum(e) {
    if (e.keyCode === 13) {
      var jumpPage = Number(e.target.value);
      if (jumpPage > totalPage || jumpPage < 0 || isNaN(jumpPage)) {
        //超出页码范围，不跳
        return e.target.value = '';
      }
      if (jumpPage > 6 && jumpPage < totalPage - 6) {
        setPageRenderArray([jumpPage - 2, jumpPage - 1, jumpPage, jumpPage + 1, jumpPage + 2]);
      } else if (jumpPage - 5 < 0) {
        setPageRenderArray([2, 3, 4, 5, 6]);
      } else if (jumpPage + 5 > totalPage) {
        setPageRenderArray([totalPage - 5, totalPage - 4, totalPage - 3, totalPage - 2, totalPage - 1]);
      }
      setNowIndex(jumpPage);
      changePageCallback(jumpPage);
      e.target.value = '';
    }
  };
  //select回调
  var handleSelectCallback = function handleSelectCallback(pageSize) {
    console.log(pageSize);
    setSizePage(pageSize);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/React.createElement("div", {
    className: nowIndex === 1 ? "prev disabled" : "prev",
    onClick: prevPage
  }, /*#__PURE__*/React.createElement(LeftOutlined, null)), /*#__PURE__*/React.createElement("div", {
    className: nowIndex === 1 ? "actived numberBox" : "numberBox",
    onClick: changePage(1)
  }, "1"), nowIndex > 4 && totalPage > 6 && /*#__PURE__*/React.createElement("div", {
    className: "numberBox",
    onClick: prevFivePage
  }, /*#__PURE__*/React.createElement(EllipsisOutlined, null)), totalPage <= 4 && pageRenderArray.length >= 1 && pageRenderArray.map(function (index) {
    return /*#__PURE__*/React.createElement("div", {
      className: nowIndex === index + 2 ? "actived numberBox" : "numberBox",
      key: index,
      onClick: changePage(index + 2)
    }, index + 2);
  }), totalPage > 4 && pageRenderArray.map(function (item, index) {
    {
      return /*#__PURE__*/React.createElement("div", {
        className: nowIndex === item ? "actived numberBox" : "numberBox",
        key: index,
        onClick: changePage(item)
      }, item);
    }
  }), totalPage - nowIndex >= 4 && totalPage > 6 && /*#__PURE__*/React.createElement("div", {
    className: "numberBox",
    onClick: nextFivePage
  }, /*#__PURE__*/React.createElement(EllipsisOutlined, null)), totalPage > 1 && /*#__PURE__*/React.createElement("div", {
    className: nowIndex === totalPage ? "actived numberBox" : "numberBox",
    onClick: changePage(totalPage)
  }, totalPage), /*#__PURE__*/React.createElement("div", {
    className: nowIndex === totalPage || totalPage <= 1 ? "next disabled" : "next",
    onClick: nextPage
  }, /*#__PURE__*/React.createElement(RightOutlined, null)), Array.isArray(pageSizeOptions) && showSizeChanger && /*#__PURE__*/React.createElement(Select, {
    option: pageSizeOptions.map(function (item) {
      return {
        label: "".concat(item, " \u6761/\u9875"),
        value: item
      };
    }),
    width: 100,
    handleSelectCallback: handleSelectCallback
  }), showJumpInput && /*#__PURE__*/React.createElement("div", {
    className: "jumpBox"
  }, /*#__PURE__*/React.createElement("span", null, "\u8DF3\u81F3"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "jump",
    onKeyUp: jumpPageNum
  }), /*#__PURE__*/React.createElement("span", null, "\u9875")));
};
export default /*#__PURE__*/memo(Pagination);
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
import React, { useState, useEffect, memo, useCallback, useMemo } from 'react';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import "./index.module.less";
var Menu = function Menu(props) {
  var _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    nowActiveMainKey = _useState2[0],
    setNowActiveMainKey = _useState2[1]; //选中的一级菜单key
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    nowActiveKey = _useState4[0],
    setNowActiveKey = _useState4[1]; //选中的子菜单key
  var _useState5 = useState({}),
    _useState6 = _slicedToArray(_useState5, 2),
    parentMenuHeightList = _useState6[0],
    setParentMenuHeightList = _useState6[1]; //父菜单高度集合

  var items = props.items,
    width = props.width,
    dark = props.dark,
    ableToggle = props.ableToggle,
    defaultOpen = props.defaultOpen,
    handleRouteChange = props.handleRouteChange;
  useEffect(function () {
    var initList = initParentMenuHeight(items, {}, '');
    if (defaultOpen) {
      //默认展开
      for (var key in initList) {
        initList[key].height = initList[key].childNum + 1;
        if (initList[key].children.length > 0) {
          initList[key].children.map(function (item) {
            return item.height = (item.childNum + 1) * 50 + 'px';
          });
          initList[key].height += initList[key].children.reduce(function (pre, next) {
            return pre.childNum + next.childNum;
          });
        }
        initList[key].height = initList[key].height * 50 + 'px';
      }
    }
    setParentMenuHeightList(initList);
  }, []);
  useEffect(function () {
    handleRouteChange && handleRouteChange(nowActiveKey);
  }, [nowActiveKey]);
  var initParentMenuHeight = function initParentMenuHeight(item, obj, fatherKey) {
    //初始化父级菜单高度
    item.forEach(function (m) {
      if (m.children) {
        if (m.level == 1) {
          obj[m.key] = {
            key: m.key,
            height: '50px',
            childNum: m.children.length,
            level: m.level,
            children: []
          };
        } else {
          var _obj$fatherKey;
          (_obj$fatherKey = obj[fatherKey]) === null || _obj$fatherKey === void 0 ? void 0 : _obj$fatherKey.children.push({
            key: m.key,
            height: '50px',
            childNum: m.children.length,
            level: m.level
          });
        }
        initParentMenuHeight(m.children, obj, m.level && m.level == 1 ? m.key : '');
      }
    });
    return obj;
  };
  var toggleFirstMenu = function toggleFirstMenu(fMenu, e) {
    //点击父级菜单
    e.stopPropagation();
    var selectKey = fMenu.key;
    var refreshObject = _objectSpread({}, parentMenuHeightList);
    refreshObject[selectKey].height = refreshObject[selectKey].height == '50px' ? (refreshObject[selectKey].childNum + 1) * 50 + 'px' : '50px';
    if (ableToggle) {
      //手风琴折叠
      if (refreshObject[selectKey].height !== '50px') {
        for (var key in refreshObject) {
          if (key !== selectKey) {
            refreshObject[key].height = '50px';
            if (refreshObject[key].children) {
              refreshObject[key].children.map(function (item) {
                return item.height = '50px';
              });
            }
          }
        }
      }
    } else {
      //普通折叠
      if (refreshObject[selectKey].children.length !== 0) {
        refreshObject[selectKey].children.forEach(function (c) {
          c.height = '50px';
        });
      }
    }
    setParentMenuHeightList(refreshObject);
  };
  var toggleChildMenu = function toggleChildMenu(cMenu, e, fKey) {
    //点击子级菜单
    if (cMenu.level == 2 && !cMenu.children || cMenu.level == 3) {
      setNowActiveMainKey(fKey);
      setNowActiveKey(cMenu.key);
    }
    if (cMenu.level == 2) {
      //二级菜单扩展切换
      var refreshObject = _objectSpread({}, parentMenuHeightList);
      for (var key in refreshObject) {
        if (refreshObject[key].children && refreshObject[key].children.findIndex(function (item) {
          return item.key == cMenu.key;
        }) !== -1) {
          //找出是哪个一级菜单的children
          var childIndex = refreshObject[key].children.findIndex(function (item) {
            return item.key == cMenu.key;
          });
          refreshObject[key].children[childIndex].height = refreshObject[key].children[childIndex].height == '50px' ? (refreshObject[key].children[childIndex].childNum + 1) * 50 + 'px' : '50px';
          var parentHeight = (refreshObject[key].childNum - refreshObject[key].children.length) * 50 + 50; //改变子菜单高度后统计父菜单高度
          parentHeight += refreshObject[key].children.reduce(function (pre, next) {
            return Number(pre.height.split('px')[0]) + Number(next.height.split('px')[0]);
          });
          refreshObject[key].height = parentHeight;
        }
      }
      setParentMenuHeightList(refreshObject);
      // setParentMenuHeightList((old: any) => {
      //   for (var key in old) {
      //     if (
      //       old[key].children &&
      //       old[key].children.findIndex((item: MenuHeightProps) => item.key == cMenu.key) !== -1
      //     ) {
      //       //找出是哪个一级菜单的children
      //       const childIndex = old[key].children.findIndex(
      //         (item: MenuHeightProps) => item.key == cMenu.key,
      //       );
      //       old[key].children[childIndex].height =
      //         old[key].children[childIndex].height == '50px'
      //           ? (old[key].children[childIndex].childNum + 1) * 50 + 'px'
      //           : '50px';
      //       let parentHeight = (old[key].childNum - old[key].children.length) * 50 + 50;          //改变子菜单高度后统计父菜单高度
      //       parentHeight += old[key].children.reduce(
      //         (pre: MenuHeightProps, next: MenuHeightProps) => {
      //           return Number(pre.height.split('px')[0]) + Number(next.height.split('px')[0]);
      //         },
      //       );
      //       old[key].height = parentHeight;
      //     }
      //   }
      //   return JSON.parse(JSON.stringify(old));
      // });
    }

    if (cMenu.level == 3) {
      for (var key in parentMenuHeightList) {
        if (parentMenuHeightList[key].children && parentMenuHeightList[key].children.findIndex(function (item) {
          return item.key == fKey;
        }) !== -1) {
          setNowActiveMainKey(parentMenuHeightList[key].key);
        }
      }
    }
  };
  var firstMenuHeight = function firstMenuHeight(key) {
    //第一级菜单高度
    if (parentMenuHeightList[key]) {
      var _parentMenuHeightList;
      return {
        height: (_parentMenuHeightList = parentMenuHeightList[key]) === null || _parentMenuHeightList === void 0 ? void 0 : _parentMenuHeightList.height
      };
    }
    return {
      height: '50px'
    };
  };
  var childMenuHeight = useCallback(function (key) {
    //第二级菜单高度
    for (var i in parentMenuHeightList) {
      var _parentMenuHeightList2;
      var childIndex = (_parentMenuHeightList2 = parentMenuHeightList[i].children) === null || _parentMenuHeightList2 === void 0 ? void 0 : _parentMenuHeightList2.findIndex(function (item) {
        return item.key == key;
      });
      if (childIndex !== -1) {
        return {
          height: parentMenuHeightList[i].children[childIndex].height
        };
      }
    }
    return {
      height: '50px'
    };
  }, [parentMenuHeightList]);
  var customWidth = useMemo(function () {
    if (width) {
      if (typeof width == 'string') {
        return {
          width: width.includes('%') ? width : width + 'px'
        };
      } else if (typeof width == 'number') {
        return {
          width: width + 'px'
        };
      }
    }
    return {
      width: '220px'
    };
  }, [width]);
  var renderChildOptions = function renderChildOptions(childM) {
    //传入level为1的children，进行子项递归
    if (childM.children) {
      return childM.children.map(function (m) {
        return /*#__PURE__*/React.createElement("div", {
          key: m.key
        }, /*#__PURE__*/React.createElement("div", {
          className: nowActiveKey == m.key ? 'activeMenuOptions' : 'childMenuOptions',
          style: _objectSpread({}, childMenuHeight(m.key))
        }, /*#__PURE__*/React.createElement("div", {
          className: m.children && m.children.findIndex(function (i) {
            return i.key == nowActiveKey;
          }) !== -1 ? 'activeFatherTitle' : 'fatherTitle',
          onClick: function onClick(e) {
            return toggleChildMenu(m, e, childM.key);
          }
        }, /*#__PURE__*/React.createElement("span", null, m.label), m.children && (childMenuHeight(m.key).height == '50px' ? /*#__PURE__*/React.createElement(CaretDownOutlined, null) : /*#__PURE__*/React.createElement(CaretUpOutlined, null))), /*#__PURE__*/React.createElement("div", {
          className: "childMenuOptions",
          key: m.key
        }, m.children && renderChildOptions(m))));
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: dark ? 'darkMenu' : 'menu',
    style: customWidth
  }, items.map(function (m) {
    return /*#__PURE__*/React.createElement("div", {
      key: m.key
    }, /*#__PURE__*/React.createElement("div", {
      className: "menuOptions",
      style: firstMenuHeight(m.key)
    }, /*#__PURE__*/React.createElement("div", {
      className: nowActiveMainKey == m.key ? 'activeFatherTitle' : 'fatherTitle',
      onClick: function onClick(e) {
        return toggleFirstMenu(m, e);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "left"
    }, /*#__PURE__*/React.createElement("i", null, m.icon), /*#__PURE__*/React.createElement("span", null, m.label)), firstMenuHeight(m.key).height == '50px' ? /*#__PURE__*/React.createElement(CaretDownOutlined, null) : /*#__PURE__*/React.createElement(CaretUpOutlined, null)), /*#__PURE__*/React.createElement(React.Fragment, null, m.children && renderChildOptions(m))));
  }));
};
export default /*#__PURE__*/memo(Menu);
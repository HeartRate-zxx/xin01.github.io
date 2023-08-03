function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
var Rating = function Rating(_ref) {
  var maxStars = _ref.maxStars,
    _ref$initialRating = _ref.initialRating,
    initialRating = _ref$initialRating === void 0 ? 0 : _ref$initialRating,
    onChange = _ref.onChange;
  var _useState = useState(initialRating),
    _useState2 = _slicedToArray(_useState, 2),
    rating = _useState2[0],
    setRating = _useState2[1];
  var handleStarClick = function handleStarClick(selectedRating) {
    setRating(selectedRating);
    if (onChange) {
      onChange(selectedRating);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "start"
  }, Array.from({
    length: maxStars
  }, function (_, index) {
    return index + 1;
  }).map(function (star) {
    return /*#__PURE__*/React.createElement(Star, {
      key: star,
      filled: star <= rating,
      onMouseOver: function onMouseOver() {
        return handleStarClick(star);
      }
    });
  }));
};
var Star = function Star(_ref2) {
  var filled = _ref2.filled,
    onMouseOver = _ref2.onMouseOver;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      cursor: 'pointer',
      color: filled ? 'gold' : 'gray',
      fontSize: '25px',
      marginRight: '10px'
    },
    onMouseOver: onMouseOver
  }, "\u2605");
};
Rating.defaultProps = {
  maxStars: 6,
  initialRating: 1
};
export default Rating;
import React from 'react';
import Panel from '..';
var text = "\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n";
var item = [{
  key: '1',
  label: 'This is panel header 1',
  children: /*#__PURE__*/React.createElement("p", null, text)
}, {
  key: '2',
  label: 'This is panel header 2',
  children: /*#__PURE__*/React.createElement("p", null, text)
}, {
  key: '3',
  label: 'This is panel header 3',
  children: /*#__PURE__*/React.createElement("p", null, text)
}];
var App = function App() {
  return /*#__PURE__*/React.createElement(Panel, {
    accordion: true,
    items: item,
    height: 100
  });
};
export default App;
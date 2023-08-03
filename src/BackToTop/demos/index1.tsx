import React from 'react';
import ScrollToTop from '../index';

const App: React.FC = () => {
  const Style: React.CSSProperties = {
    position: 'fixed',
    bottom: '100px',
    right: '20px',
    color: '#ffffff',
    backgroundColor: '#fd003d',
    width: '100px',
    height: '40px',
    margin: 0,
    padding: 0,
    border: 'none',
    outline: 'none',
    borderRadius: '10px',
    fontSize: '18px',
    cursor: 'pointer',
  };
 
  return (
    <div style={{ height: '300px' }}>
      <span>让滚动条飞一会</span>      
      <ScrollToTop showUnder={500} style={Style}  />
    </div>
  );
};

export default App;

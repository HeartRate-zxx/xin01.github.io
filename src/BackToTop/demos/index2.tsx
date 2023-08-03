import React,{useRef} from 'react';
import ScrollToTop from '../index';
  
const App: React.FC = () => {
  const Style: React.CSSProperties = {
    position: 'relative',
    top:'375px',    
    right: '0px',
    color: '#ffffff',
    backgroundColor: '#4994c4',
    width: '100px',
    height: '40px',
    margin: 0,
    padding: 0,
    border: 'none',
    outline: "none",
    borderRadius: '10px',
    fontSize: '18px',
    cursor: "pointer"
  }
  return (
    <div style={{height: '400px',}} >
    <span>点击返回顶部</span>    
      <ScrollToTop showUnder={750} style={Style} />
    </div>
  );
};

export default App;

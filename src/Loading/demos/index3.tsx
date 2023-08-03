import React, { useState } from 'react';
import Loading from '..';
import Button from '../../Button/index';
export default function LoadingDemo1() {
  const [className, setClassName] = useState('');
  const handleClick = () => {
    setClassName('all');
    setTimeout(() => {
      removeClassName();
    }, 3000);
  };
  const removeClassName = () => {
    setClassName(''); // 移除类名
  };
  const handleClickTwo = () => {
    setClassName('allBlack');
    setTimeout(() => {
      removeClassName();
    }, 3000);
  };
  return (
    <div style={{display:'flex'}}>
      <Button type="primary" onClick={() => handleClick()}>
        指令方式
      </Button>
      <Button type="primary" onClick={() => handleClickTwo()} >
        服务方式
      </Button>
      <Loading className={className}></Loading>
    </div>
  );
}

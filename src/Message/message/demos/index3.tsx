import React from 'react';
import '../../button/button.less'
import Message from '../message';

export default function index2() {
 
  return (
   <div style={{display:'flex',}}>
      <Message title='基础' className='primary'>这是一条基础的信息</Message>
      <Message title='警告' className='danger'>这是一条警告的信息</Message>
      <Message title='错误' className='default'>这是一条错误的信息</Message>
      <Message title='成功'  className='success'>这是一条成功的信息</Message>
      </div>
  );
}

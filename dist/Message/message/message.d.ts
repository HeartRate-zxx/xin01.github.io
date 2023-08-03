import React from 'react';
import './message.css';
/**
 * 1.点击出现弹框
 * 2.点击X弹框消失
 * */
interface MessageProps {
    onClick?: Function;
    children?: string | number;
    className?: string;
    delay?: number;
    title?: string | number;
}
declare const Message: React.FC<MessageProps>;
export default Message;

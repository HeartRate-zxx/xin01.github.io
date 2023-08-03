import React from "react";
import './button.less';
export declare type ButtonType = 'primary' | 'default' | 'danger' | 'link';
interface ButtonProps {
    type?: ButtonType;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    style: React.CSSProperties;
}
declare const Button: React.FC<ButtonProps>;
export default Button;

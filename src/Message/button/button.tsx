import React from "react";
import './button.less'

// button-type的类型
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

// 写Button的类型
interface ButtonProps {
    type?: ButtonType;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    style: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = (props) => {
    const {type, children, className, ...restProps} = props;
    const styleProps = ['or-btn', className, type].join(' ');
    return (
        <>
            <button className={styleProps} {...restProps}>{children}</button>
        </>
    )
}
Button.defaultProps = {
    type: 'default',
}
export default Button;
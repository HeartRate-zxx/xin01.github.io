import React, { FC, memo } from 'react';
import Css from './input.module.less';

interface InputProps {
  /**
   * @description 类型
   * @default text
   */
  type?: string;
  /**
   * @description 宽度
   * @default 100px
   */
  width?: any;
  /**
   * @description 高度
   * @default 32px
   */
  height?: any;
  /** 
   * @description 是否有边框
   * @default true
   */
  bordered?: boolean;
  /**
   * @description 输入框提示内容
   */
  defaultValue?: any;
  /**
   * @description 输入框内容
   */
  value?: String;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 输入时是否有边框
   * @default true
   */
  inputBorder?: boolean;
  /**
   * @description 输入时边框颜色
   */
  inputColor?: String;
  /**
   * @description 输入时触发事件
   */
  handleChange?: Function;
}
interface InputStyle {
  border?: String;
  outlineColor?: String;
  outlineStyle?: String;
  handleIptChange?:any;
  handleIptFocus?:any;
  handleKeyDown?:any;
  handleIptBlur?:any;
  clearCallback?:any;
  showClea?:any                                                                                                                                                                                                                                                                                                                                                 
}
type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLElement>, 'type'>;

const Input: FC<InputProps & NativeInputProps > = memo(
  ({ type, width, height, bordered, defaultValue, value, disabled, inputBorder, handleChange }) => {
    let style = {
      width: '120px',
      height: '34px',
    };

    if (width) {
      if (typeof width === 'string') {
        if (width.includes('%') || width.includes('px')) {
          style.width = width;
        }
      } else if (width * 1) {
        style.width = width + 'px';
      }
    }

    if (height) {
      if (typeof height === 'string') {
        if (height.includes('%') || height.includes('px')) {
          style.height = height;
        }
      } else if (height * 1) {
        style.height = height + 'px';
      }
    }

    let className: any = [
      !bordered ? Css['bordered'] : '',
      !inputBorder ? Css['inputBorder'] : '',
      disabled ? Css['disabled'] : '',
    ].join(' ');

    return (
      <div className={Css['input']}>
        <input
          type={type ? type : 'text'}
          placeholder={defaultValue ? defaultValue : '请输入内容'}
          disabled={disabled}
          className={className}
          style={style}
          value={value}
          onChange={(e) => (handleChange ? handleChange({ value: e.currentTarget.value }) : null)}
        />
      </div>
    );
  },
);

export default Input;

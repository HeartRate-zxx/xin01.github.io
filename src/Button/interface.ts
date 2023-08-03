export interface ButtonProps {
    //自定义button接口
    /**
     * @description 按钮主题
     * @default text
     */
    type?: String;
    /**
     * @description 宽度
     */
    width?: String | number;
    /**
     * @description 高度
     */
    height?: String | number;
    /**
     * @description 禁用状态
     * @default false
     */
    disabled?: Boolean;
    /**
     * @description 字体按钮
     * @default false
     */
    circle?: Boolean;
    /**
     * @description 按钮边框为虚线
     * @default false
     */
    dashed?: Boolean;
    /**
     * @description 加载状态
     * @default false
     */
    loading?: Boolean;
    /**
     * @description 按钮点击回调事件
     */
    handleClick?: Function | undefined;
      /**
     * @description 是否为朴素按钮
     */
      plain?: Boolean;
  }
  export interface ButtonStyle {
    //button样式接口
    width?: String;
    height?: String;
    borderRadius?: String;
    border?: String;
    cursor?: String;
    plain?:Boolean;
  }
  export type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>; 
  //原生button接口
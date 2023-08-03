export interface SwitchProps{
    // 自定义switch接口
     /**
     * @description switch宽度(像素)
     *  @default 65px
     */
      width?: any;
    /**
     * @description 是否禁用
     * @default false
     */
     disabled?:Boolean;
    /**
     * @description switch 打开时的背景色
     * @default #409EFF
     */
     activeColor?:String;
    /**
     * @description switch 关闭时的背景色
     * @default #C0CCDA
     */
    inActiveColor?:String;
    /**
     * @description 打开时的文字
     */
     activeText?:String;
     /**
     * @description 关闭时的文字
     */
      isActiveText?:String;
}
export interface SwitchStyle{
    // 样式接口
    type?:String;
    width?: any;
    activeColor?:String;
    inActiveColor?:String;
    disabled?:Boolean;
    backgroundColor?:String;
    cursor?:string;
    pointerEvents?:String;
}
export interface BadgeProps {
    /**
     * @description 显示值
     * @default 10
     */
    value?: Number|String;
    /**
     * @description 最大值
     */
    max?: Number;
    /**
     * @description 小圆点
     */
   isDot ?: Boolean;
   /**
    * @description 类型
    */
   type?:String;

}
export interface BadgeStyle{
    value?:String|Number;
    max?: Number;
    isDot ?:Boolean;
    type?:String;
    children?:any
}
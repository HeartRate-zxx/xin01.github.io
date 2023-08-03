import React from 'react';
import './index.module.less';
interface DatePickerProps {
    /**
     * @description 日期选择器类型(primary/input)仅支持非range
     * @default primary
     */
    type?: string;
    /**
     * @description 设置日期区间选择器
     * @default false
     */
    showRange?: Boolean;
    /**
     * @description 显示日期重置按钮
     * @default false
     */
    showClear?: Boolean;
    /**
     * @description 方向
     * @default false
     */
    align?: string;
    /**
     * @description 选择完毕后的回调函数
     * @default Function
     */
    handleChange?: Function;
}
declare const _default: React.NamedExoticComponent<DatePickerProps>;
export default _default;

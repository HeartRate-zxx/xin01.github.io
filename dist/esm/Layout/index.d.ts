import React from 'react';
import './index.module.less';
interface layoutProps {
    children?: any;
    /**
     * @description 自定义样式
     * @default {}
     */
    extraStyle?: Object;
    /**
     * @description Slider/Content横向栅格比例
     * @default Slider-3,Content-7
     */
    row?: Number;
}
declare const _default: React.NamedExoticComponent<layoutProps>;
export default _default;

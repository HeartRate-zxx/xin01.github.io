import React from 'react';
import './index.module.less';
interface AffixProps {
    /**
     * @description 类型 scroll表示滚动容器
     * @default ''
     */
    affixType?: string;
    /**
     * @description 插槽
     */
    children?: any;
    /**
     * @description 顶部距离
     * @default 0
     */
    offsetTop?: number | string;
    /**
     * @description 左侧距离
     * @default 0
     */
    offsetLeft?: number | string;
    /**
     * @description 底部距离
     * @default 0
     */
    offsetBottom?: number | string;
    /**
     * @description 右侧距离
     * @default 0
     */
    offsetRight?: number | string;
    /**
     * @description 插槽样式
     * @default {}
     */
    style?: Object;
}
declare const _default: React.NamedExoticComponent<AffixProps>;
export default _default;

import React from 'react';
import './index.module.less';
interface PaginationProps {
    /**
     * @description 总数据条数
     * @default 0
     */
    total: number;
    /**
     * @description 显示每页条数Select
     * @default false
     */
    showSizeChanger?: Boolean;
    /**
     * @description 每页条数配置
     * @default 每页10条数据
     */
    pageSizeOptions?: Array<number>;
    /**
     * @description 改变页码后的回调
     * @default {}
     */
    showJumpInput?: Boolean;
    /**
     * @description 显示跳转页面输入框
     * @default false
     */
    changePageCallback: Function;
}
declare const _default: React.NamedExoticComponent<PaginationProps>;
export default _default;

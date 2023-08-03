import React, { FC } from 'react';
import './loading.module.less';
interface LoadingProps {
    /**
     * @description 容器主题
     * @default primary
     */
    type?: String;
    /**
     * @description 遮盖层样式
     *
     */
    mask?: String;
    /**
     * @description 加载文案
     */
    text?: String;
    /**
     * @description 子节点
     */
    children?: any;
    /**
     * @description 控制显示隐藏
     *
     */
    loading?: Boolean;
    /**
     * @description 控制整页加载
     *
     */
    all?: Boolean;
    /**
     * @description 点击事件
     *
     */
    handleClick?: Function | undefined;
    /**
     * @description 定义的类名
     */
    className?: string;
    /**
   * @description 点击事件
   *
   */
    handleClickTwo?: Function | undefined;
}
declare type NativeLoadingProps = Omit<React.HTMLAttributes<HTMLElement>, 'type'>;
declare const Loading: FC<LoadingProps & NativeLoadingProps>;
export default Loading;

import React from 'react';
export interface ScrollToTopProps {
    /**
     * @description 向下滑动的值
     */
    showUnder?: number;
    /**
     * @description css样式
     */
    style: React.CSSProperties;
}
declare const ScrollToTop: React.FC<ScrollToTopProps>;
export default ScrollToTop;

import React from 'react';
interface RatingProps {
    /**
     * @description 星星的最大个数
     * @default 6
     */
    maxStars: number;
    /**
     * @description 初始化点亮的星星个数
     * @default 1
     */
    initialRating?: number;
    /**
     * @description  Function
     */
    onChange?: (rating: number) => void;
    /**
    * @description 鼠标经过时触发事件
    */
    onMouseOver?: () => void;
}
declare const Rating: React.FC<RatingProps>;
export default Rating;

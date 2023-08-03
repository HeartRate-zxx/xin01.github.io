export interface DividerProps {
    /**
     * @description 设置分割线方向
     * @default horizontal
     */
    direction?: String;
    /**
     * @description 设置分割线文案的位置
     * @default center
     */
    contentPosition?: String;
}
export interface DividerStyle {
    direction?: String;
    contentPosition?: String;
    children?: any;
}

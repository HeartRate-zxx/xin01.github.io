export interface PanelProps {
    //自定义button接口
    /**
     * @description 是否为手风琴
     * 
     */
    accordion?: boolean;
    /**
     * @description 高度
     */
    height?: Number;
  
    /**
     * @description 传入的数据
     * @default false
     */
    items?: any;

  }
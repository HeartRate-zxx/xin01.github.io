export interface InputProps{
    /**
     * @description 最小值 
     * */ 
    minValue?:number,

    /**
     * @description 最大值 
     * */ 
    maxValue?:number,

      /**
     * @description 初始值 
     * */ 
      initialValue?:number,

 /**
     * @description 是否禁用值 
     * */ 
 disabled?:boolean,

 /**
     * @description  每次加几个
     * */ 
 step?:number,
}

export interface InputStyle{
    minValue?:number,
    maxValue?:number,
    initialValue?:number
    disabled?: boolean
    cursor?:String
    step?:number
}
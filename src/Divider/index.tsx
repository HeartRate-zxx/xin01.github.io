import React, { Children, FC, memo, useMemo } from "react";
import { DividerProps, DividerStyle } from './interface'
import './Divider.module.less'


const Divider: FC<DividerProps & DividerStyle> = memo((props) => {
    const { direction, contentPosition,children } = props

    const dividerStyle = useMemo(()=>{
        if(!direction &&  direction!=='vertical' ){
            return "horizontal"
        }
        return direction as any 
    },[direction])

    const spanStyle = useMemo(()=>{
        if(!contentPosition && contentPosition!=='left' && contentPosition!== 'right'){
            return 'center'
        }
        return  contentPosition as any

    },[contentPosition])

    return (
        <div className={dividerStyle}>
            <span className= {spanStyle}>{children}</span>
        </div>
    )

})



export default Divider
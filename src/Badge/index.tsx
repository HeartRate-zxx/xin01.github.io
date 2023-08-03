import React,{useState,FC,memo,useMemo,useRef} from "react";
import { BadgeProps,BadgeStyle } from "./interface";
import './Badge.module.less'

const Badge: FC<BadgeProps & BadgeStyle> = memo((props)=>{
    const {type,value,isDot,max,children} = props
    const refs = useRef<HTMLDivElement>(null)
    let [flag,setFlag] = useState(true) // 若value不存在或value<=0，将sup隐藏
    let [values,setValues] = useState(value)


    const badgeStyle = useMemo(()=>{
        if(Number.isFinite(value)){
           if(values! >= max!){
            values = max + '+'
           }         
        }
        if(!value && values! <= 0 &&!isDot ){
            setFlag(false)
            console.log('都不在');
            
        }else if(isDot){
            setFlag(true)
           setValues('')   
        }
    },[value,max,isDot])

  
    const supClass= useMemo(()=>{
        if(!type && type !== 'warning' && type !== 'primary'&&type !== 'success'&& type !== 'info'){
        return 'danger'
    }  
    return type as any 
    },[type])

    return (
        <div className="badge">
              {children}
            <sup ref={refs} className={isDot  ? "isdot" : supClass } 
            style={{display : flag ? 'block' : 'none'}}>{values as any}</sup>
          
        </div>
    )
})

export default Badge
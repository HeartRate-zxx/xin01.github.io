import React, { useMemo, FC, memo, useState, useRef } from "react";
import './Switch.module.less'
import { SwitchProps, SwitchStyle } from "./interface";
const Switch: FC<SwitchProps> = memo((props) => {
    const { disabled, width, activeColor, inActiveColor, activeText, isActiveText } = props;
    // 控制开关的  true(在左边 为 关闭)  false(圆球在右边  为开启)
    const [isActive, setIsActive] = useState(false);
    const refs:React.MutableRefObject<any>  = useRef(null) ;
    // 圆球点击事件
    const ballClick = () => {
        if (width && refs != null) {
            if (isActive === false) {
                refs.current!.style.transform = `translateX(${(width - 27)}px)`
                setIsActive(!isActive)
            } else {
                refs.current.style.transform = `translateX(0px)`
                setIsActive(!isActive)
            }
        } else {
            let widths = switchSize.width?.slice(0, 2)
            if (isActive === false) {
                refs.current!.style.transform = `translateX(${(widths - 27)}px)`
                setIsActive(!isActive)
            } else {
                refs.current!.style.transform = `translateX(0px)`
                setIsActive(!isActive)
            }

        }





    }

    const switchSize = useMemo(() => {
        var size: SwitchStyle = {
            width: '65px',
            backgroundColor: "#409EFF"
        };
        if (width) {
            size.width = width + 'px'
        }
        if (activeColor) {
            size.backgroundColor = activeColor + ""
        }
        return size;
    }, [disabled, width, activeColor])
    const failSize = useMemo(() => {
        var size: SwitchStyle = {
            width: '65px',
            backgroundColor: "#C0CCDA"
        };
        if (width) {
            size.width = width + 'px'
        }
        if (inActiveColor) {
            size.backgroundColor = inActiveColor + ""
        }
        if (disabled) {
            size = { ...size, pointerEvents: "none", }
        }
        return size;

    }, [disabled, width, inActiveColor,])
    const cursorStyle = useMemo(() => {
        var cursors = {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
        }
        if (disabled) {
            cursors = { ...cursors, cursor: "not-allowed" }
        }

        return cursors
    }, [disabled])

    return (
        <div style={cursorStyle as any}>
            {activeText ? <span className={isActive ? 'open' : 'openblue'}>{activeText}</span> : ''}
            <div className="switch"
                style={isActive ? switchSize as any : failSize as any}
                onClick={() => ballClick()}
            >
                <div className="ball" ref={refs}></div>
            </div>
            {isActiveText ? <span className={isActive ? 'offblue' : 'off'}>{isActiveText}</span> : ''}
        </div>
    )
})

export default Switch;

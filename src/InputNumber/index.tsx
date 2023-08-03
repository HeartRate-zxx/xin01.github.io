
import React, { FC, memo, useMemo, useState } from "react";
import { InputStyle,InputProps } from './interface'
import './input.module.less'

const Input: FC<InputProps> = memo((props) => {
    const { minValue, maxValue, initialValue, disabled, step } = props

    // const inputSize = useMemo(() => {
    // }, [minValue, maxValue, initialValue, disabled, step])


    let [count, setCount] = useState(initialValue)
    let [steps, setSteps] = useState(step)
    const [flag, setFlag] = useState(false)



    // 减少
    const jian = () => {
        if (minValue && count! > minValue) {

            setCount(count! - 1)
            // console.log(count);
            setFlag(false)
        }
        if (count! <= minValue!) {
            setFlag(true)
            console.log(flag);
            return
        }
        if (steps && count) {
            setCount(count - steps)
        }


    }
    // 增加
    const jia = () => {
        if ( maxValue && count! < maxValue) {
            setFlag(false)
            setCount(count! + 1)
            return
        }
        if (steps && count) {
            setCount(count + steps)
        }


    }


    // 监听 input
    const inputq = (e: any) => {
        console.log(e.target.value);
        let val = e.target.value
        setCount(val)
    }

    // 失去焦点
    const InputNumber = (e: any) => {
        if (maxValue && e.target.value > maxValue) {
            e.target.value = maxValue
            setCount(maxValue)
        }
        if (minValue && e.target.value < minValue) {
            e.target.value = minValue
            setCount(minValue)
        }

    }



    return (
        <div className="inputNumber" >
            {/* <div> */}
                <button  className="del"
                    style={{ cursor: (disabled ? true : count! <= minValue!) ? "not-allowed" : "" }}

                    disabled={!disabled ? (count === minValue ? true : false) : true}
                    onClick={() => jian()}
                >-</button>
                <input
                    style={{ cursor:  disabled ? "not-allowed" : "" }}
                    disabled={disabled ? true  : false}
                    onInput={(e) => inputq(e)}
                    onBlur={(e) => InputNumber(e)}


                    placeholder="0"
                    value={count}
                    min={minValue}
                    max={maxValue}
                    step={step}
                />
                <button className="add"
                    style={{ cursor: (disabled ? true : count! >= maxValue!) ? "not-allowed" : "" }}
                    disabled={!disabled ? (step ? false : count === maxValue ? true : false) : true}
                    onClick={() => jia()}>+</button>
            {/* </div> */}


        </div>
    )

})

export default Input
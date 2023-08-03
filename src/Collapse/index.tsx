import React, { useState, useRef,FC } from 'react';
import './panel.module.less'
import {PanelProps} from './interface'

// interface PanelProps {
//     items?: any;
//     height?: Number;
//     accordion?: boolean
// }

const Panel:FC< PanelProps> = ((props) => {
    const { items, height, accordion } = props

 
    const count = useRef<Array<HTMLDivElement | null>>([])
    const [abc, setAbc] = useState(0)

    const togglePanel = (index: any, item: any) => {

        if (!accordion) {
            if (count.current[index]?.style.height == "") {
                count.current[index]!.style.height = height + "px"
                return
            }
            if (count.current[index]?.style.height == height + "px") {
                count.current[index]!.style.height = ""
                console.log(count.current[index]?.style.height);
            }
        }if (accordion) {
            setAbc(index)
        }
    };
    return (
        <div className='collapse'>
            {
                items.map((item: any, index: any) => {
                    return (
                        <div key={item.key}>
                            <div onClick={() => togglePanel(index, item.key)} className='fold'>
                                <span>{item.label}</span>
                            </div>
                            <div className='collapseCenter' ref={el => count.current[index] = el}
                                style={accordion ? { height: abc == index ? height + "px" : "0" } : undefined}
                            >
                                {item.children}
                            </div>

                        </div>

                    )
                })
            }

        </div>
    );
});



export default Panel;
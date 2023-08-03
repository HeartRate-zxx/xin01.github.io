import React from "react";
import Popover from "..";
import Button from "../../Button";

export default function PopoverDemo2() {

    return (
        <div>
            <Popover trigger='click' title={<p>删除删除</p>} 
            content={<div
                style={{ textAlign: 'right', margin: '0',display:'flex' }}>
                <Button type="text" >取消</Button>
                <Button type="primary"  >确定</Button>
               
            </div>}> 
            <Button>删除</Button>


            </Popover >
        </div >
    )
}
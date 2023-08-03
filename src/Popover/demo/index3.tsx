import React from "react";
import Popover from "..";
import Button from "../../Button";

export default function PopoverDemo3() {

    return (
        <div style={{display:'flex',justifyContent:'space-around'}}>
            <Popover>
                <Button >上方</Button>
            </Popover>
            <Popover placement='bottom'>
                <Button >下方</Button>
            </Popover>
            <Popover placement='left'>
                <Button >左边</Button>
            </Popover>
            <Popover placement='right'>
                <Button >右边</Button>
            </Popover>



        </div >
    )
}
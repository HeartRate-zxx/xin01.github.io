import React from "react";
import Popover from '..';
import Button from "../../Button";

export default function PopoverDemo1() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Popover trigger='hover' width={100} title='哈哈'>
                <Button type='text'>hover激活</Button>
            </Popover>
            <Popover>
                <Button type='text'>click激活</Button>
                </Popover>
            <Popover trigger='focus'>
                <Button type='text'>focus激活</Button>
                </Popover>
        </div>

    )
}
import React from "react";
import Badge from "..";
import Button from "../../Button";


export default function BadgeDemo1() {

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Badge value={16}>
                <Button type='text'>评论</Button>
            </Badge>
            <Badge value={8}>
                <Button type='text'>回复</Button>
            </Badge>
            <Badge  type="primary" value={55} >
                <Button type='text'>评论</Button>
            </Badge>
            <Badge  type="warning" value={23} >
                <Button type='text'>回复</Button>
            </Badge>

        </div>
    )
}


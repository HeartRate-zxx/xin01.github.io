import React from "react";
import Badge from "..";
import Button from "../../Button";

export default function BadgeDemo2(){
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Badge value={120} max={99}>
            <Button type='text'>评论</Button>
        </Badge>
       
        <Badge  type="primary" value={55}  max={10}>
            <Button type='text'>评论</Button>
        </Badge>
        

    </div>
        
    )
}
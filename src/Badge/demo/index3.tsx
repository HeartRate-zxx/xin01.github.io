import React from "react";
import Badge from "..";
import Button from "../../Button";

export default function BadgeDemo3(){
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Badge value='new' max={99}>
            <Button type='text'>评论</Button>
        </Badge>
       
        <Badge value='hot' type="primary" >
            <Button type='text'>评论</Button>
        </Badge>
        

    </div>
        
    )
}
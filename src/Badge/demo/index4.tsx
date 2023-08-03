import React from "react";
import Badge from "..";
import { ShareAltOutlined} from '@ant-design/icons';

export default function BadgeDemo3(){
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Badge isDot>关注 </Badge>
        <Badge isDot>
                <ShareAltOutlined style={{padding:'10px',background:'skyblue',borderRadius:'7px'}}/>
         </Badge>
       

    </div>
        
    )
}
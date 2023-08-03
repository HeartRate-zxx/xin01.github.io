import React from "react";
import Switch from '..';


export default function SwitchTwo() {
    return (
        <div style={{display:"flex", flexDirection: 'column'}}>
            <Switch activeText="开启"
                isActiveText="关闭"
                width={50}
            ></Switch>

            <Switch
                activeText="按月付费"
                isActiveText="按年付费"
                activeColor="#13ce66"
                inActiveColor="#ff4949"
            ></Switch>

        </div>


    );
}
import React from "react";
import Tag from "..";


export default function Tag1() {
    return (

        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
           
            <Tag type='succes'>标签一</Tag>
            <Tag type='info'>标签二</Tag>
            <Tag type='warning'>标签三</Tag>
            <Tag type='dangerr'>标签四</Tag>
            
        </div>


    )
}
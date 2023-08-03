import React, { useState } from "react";
import Tag from '..'


export default function Tag2() {
    const [closable, setClosable] = useState(true);

    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly'}} >

            <Tag type='succes' closable={closable} >标签一</Tag>
            <Tag type='info' closable={closable}>标签二</Tag>
            <Tag type='warning' closable={closable}>标签三</Tag>
            <Tag type='dangerr'closable={closable}>标签四</Tag>

        </div>

    )

}
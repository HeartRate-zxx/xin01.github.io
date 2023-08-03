import React, { useState } from "react";
import Tag from '..'


export default function Tag2() {
    const [closable, setClosable] = useState(true);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

            <Tag   closable={closable} >默认标签</Tag>
            <Tag  size='medium' closable={closable}>中等标签</Tag>
            <Tag  size='small' closable={closable}>小型标签</Tag>
            <Tag  size='mini' closable={closable}>超小标签</Tag>

        </div>

    )

}
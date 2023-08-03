import React from "react";

import Input from "..";

export default function ASC(){
    return (
        <div className="App">
      <Input initialValue={5} minValue={2} maxValue={10}  />
    </div>
    )
}
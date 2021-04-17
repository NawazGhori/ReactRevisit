import React, { useState } from "react";
import Component2 from "./Component2";

const Component1 = ()=>{

    const [key1,setKey1] = useState("ReactJS");
    const [key2,setKey2] = useState("NodeJS");
    const [key3,setKey3] = useState("MongoDB");

    return(
        <Component2 key1= {key1} key2={key2} key3={key3}/>
    )

};
export default Component1;
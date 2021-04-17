/*import React from "react";

type FirstProps = {
    arg1:any,
    arg2:any
}

const First = ({arg1,arg2}:FirstProps) =>(
    <h1>{arg1}....{arg2}</h1>
)

export default First;
--------------------------------------------------------------
*/

/*import React, { FunctionComponent } from "react";

type FirstProps = {
    name:string,
    price?:number
};

const First:FunctionComponent<FirstProps> = ({name,price})=>(
    <React.Fragment>
        <h1>Name:{name}</h1>
        <h1>Price:{price}</h1>
        <div>------------------------</div>
    </React.Fragment>
)
export default First;
--------------------------------------------------------------
*/


import React, { useState } from "react"

const First = ()=>{
    const [name,setName] = useState("ReactJS");
    const change= ()=>{
        setName("React with Typescript")
    }
    return(
        <React.Fragment>
            <h1>{name}</h1>
            <button onClick={change}>Change</button>
        </React.Fragment>
    )

};

export default First;
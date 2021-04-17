import React, { FunctionComponent } from "react";

//props
type IProps = {
    key1: string,
    key2: string,
    key3: string
}
const Component2: FunctionComponent<IProps> = ({ key1, key2, key3 }) => {
    return (
        <React.Fragment>
            <h1>{key1}</h1>
            <h1>{key2}</h1>
            <h1>{key3}</h1>
        </React.Fragment>
    )

}
export default Component2;

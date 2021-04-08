import React from "react";

import Child from "./Child";

interface IProps {
    name:string;
    brand:string;
    price:number;
    qty:number;
    stockLeft:number;
    image:string;

    discount:number;

    
}

interface IState {
}

class SubChild extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props)        
    }

    render(){
        return(
            <React.Fragment>
                <table style={{border:"1px solid red"}}>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Stock Left</th>
                        <th>Image</th>
                        <th>Discount</th>
                    </tr>

                    <tr>
                        <td>{this.props.name}</td>
                        <td>{this.props.brand}</td>
                        <td>{this.props.price}</td>
                        <td>{this.props.qty}</td>
                        <td>{this.props.stockLeft}</td>
                        <td><img width="100" src={this.props.image}/></td>
                        <td>{this.props.discount}</td>
                    </tr>
                </table>

                {/* <Child value={'value'}/> */}
            </React.Fragment>
        )
    }
}

export default SubChild;
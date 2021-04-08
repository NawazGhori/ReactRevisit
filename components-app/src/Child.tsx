import React from "react";
import SubChild from "./SubChild";
interface IProps {
    name:string;
    brand:string;
    price:number;
    qty:number;
    stockLeft:number;
    image:string;

    // value:string;
}

interface IState {
    discount:number;
}

class Child extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props)     
        this.state = {
            discount: 10
        }   
    }

    render(){
        return(
            <React.Fragment>
                <SubChild {...this.props} discount={this.state.discount}/>
            </React.Fragment>
        )
    }
}

export default Child;
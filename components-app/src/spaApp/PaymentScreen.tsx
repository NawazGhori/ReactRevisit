import React from "react";
import react, { Component } from "react";
interface IState{
    msg:string
}
interface IProps{}

class PaymentScreen extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state={
            msg: " Stripe Payment Screen Soon..."
        }
    }

    render(){
        return(
            <React.Fragment>
                <h1 style={{color:'red'}}>{this.state.msg}</h1> 
            </React.Fragment>
        )
    }
}
export default PaymentScreen;
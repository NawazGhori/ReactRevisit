import React, { Component } from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import PaymentScreen from "./PaymentScreen";

interface IState {
    msg: string;
}
interface IProps { }
class CartScreen extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            msg: 'Payment Gateways soon....'
        }
    }

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <h1 style={{ color: 'red' }}>{this.state.msg}</h1>

                    <NavLink to="/payment" exact={true} strict>Payment</NavLink>


                    <Route path="/payment" component={PaymentScreen}></Route>
                </React.Fragment>
            </BrowserRouter>

        )
    }
}

export default CartScreen;
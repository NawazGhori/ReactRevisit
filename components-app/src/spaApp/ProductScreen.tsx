import React, { Component } from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import KidsScreen from "./KidsScreen";

interface IState {
    msg: string;
}
interface IProps { }
class ProductScreen extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            msg: 'Multiple Products soon....'
        }
    }

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <h1 style={{ color: 'red' }}>{this.state.msg}</h1>
                    <NavLink to="/kids" exact={true} strict>Kids</NavLink>
                </React.Fragment>

                <Route path="/kids" component={KidsScreen}></Route>
            </BrowserRouter>

          

        )
    }
}

export default ProductScreen;
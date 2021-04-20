import React, { Component } from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import FashionScreen from "./FashionScreen";

interface IState {
    msg: string;
}
interface IProps { }
class HomeScreen extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            msg: 'E-Commerce Project soon....'
        }
    }

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <h1 style={{ color: 'red' }}>{this.state.msg}</h1>

                    <NavLink to="/fashion" >Fashion</NavLink>
                </React.Fragment>

                <Route path="/fashion" component={FashionScreen}></Route>
            </BrowserRouter>

        )
    }
}

export default HomeScreen;
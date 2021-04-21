import React, { Component } from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";

import {SignInScreen} from "./SignInScreen";
import {RegisterScreen} from "./RegisterScreen";

interface IState { }
interface IProps { }

export class MyApp extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <NavLink to="/signin"  activeStyle={{color:"blue"}} exact={true} strict style={{marginRight:200}}>SignIn</NavLink>
                    <NavLink to="/register" activeStyle={{color:"blue"}} exact={true} strict>Register</NavLink>

                    <br/><br/>

                    <Route path="/signin" component={SignInScreen} exact={true} strict></Route>
                    <Route path="/register" component={RegisterScreen} exact={true} strict></Route>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}
export default MyApp;
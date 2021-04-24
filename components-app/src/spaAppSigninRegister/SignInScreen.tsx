import React, { Component } from "react";
import { History, LocationState } from "history";
import RegisterScreen from "./RegisterScreen";
import { BrowserRouter,Route } from "react-router-dom";

interface IState { }
interface IProps {
    history: History<LocationState>
}

export class SignInScreen extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
    }

    email = React.createRef<HTMLInputElement>();
    password = React.createRef<HTMLInputElement>();

    signIn = (e: any) => {
        e.preventDefault();
        console.log('Inside Signin');
        console.log(this.email.current?.value)
        console.log(this.password.current?.value)

        // this.props.history.push("/register?email="+this.email.current?.value+"&pwd="+this.password.current?.value)

        this.props.history.push("/register/"+this.email.current?.value+"/"+this.password.current?.value)

    }
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <div className="my-form">
                        <h1>SignIn Form</h1>
                        <form>
                            <div>
                                <label>Email Address</label>
                                <input type="email" ref={this.email}></input>
                            </div>

                            <div>
                                <label>Password</label>
                                <input type="password" ref={this.password}></input>
                            </div>

                            <div>
                                <button onClick={(e) => { this.signIn(e) }}>SignIn</button>
                            </div>

                            <div>New User ? {' '} <a href="#">Create New Account</a></div>

                        </form>
                    </div>

                    <Route path="/register" component={RegisterScreen} exact={true} strict></Route>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}
export default SignInScreen;
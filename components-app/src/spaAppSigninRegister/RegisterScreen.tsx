import React, { Component } from "react";
import { match } from "react-router";
import { Location} from "history";
import * as QueryString from "query-string";



interface IState { }
interface IProps { 
     match:match<routeParams>;
    //location:Location
}
interface routeParams{
    email:any;
    pwd:any;
};

export class RegisterScreen extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
    }

    render() {
        // const qs = QueryString.parse(this.props.location.search)
        // console.log(qs.pwd)
        // console.log(qs.email)

        let email = this.props.match.params.email
        let pwd = this.props.match.params.pwd
        return (
            <React.Fragment>
                
                  <h2>Register Screen soon.</h2>

                  {/* <h2>Email: {qs.email}</h2>
                  <h2>Password: {qs.pwd}</h2> */}

                  <h2>Email: {email}</h2>
                  <h2>Password: {pwd}</h2>
            </React.Fragment>
        )
    }
}
export default RegisterScreen;
import React from "react";
import { connect } from "react-redux";
import LoginAction from "./actions/LoginActions";

interface IState { }
interface IProps {
  login_fn: any;
  login_status: any;
}
class App extends React.Component<IProps, IState>{
  constructor(props: IProps) {
    super(props)
  }

  email_ref = React.createRef<HTMLInputElement>();
  password_ref = React.createRef<HTMLInputElement>();

  login = ()=>{
    const obj = {
      "email": this.email_ref.current?.value ,
      "password": this.password_ref.current?.value
    };
    
    this.props.login_fn(obj)
  }

  render() {
    return (
      <React.Fragment>
        <label style={{marginRight:50}}>Email</label>
        <input type="email" ref={this.email_ref} /> <br />

        <label style={{marginRight:50}}>Password</label>
        <input type="password" ref={this.password_ref}/> <br />

        <button onClick={this.login}>Login</button><br/>


        {JSON.stringify(this.props.login_status)}
      </React.Fragment>
    )
  }

}


const receive = (state: any) => {
  return {
    login_status: state
  }
}

const send = (dispatch: any) => {
  return {
    login_fn: (obj: any) => { dispatch(LoginAction(obj)) }
  }
}
export default connect(receive, send)(App);
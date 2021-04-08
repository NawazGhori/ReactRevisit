import React from "react";

interface IState {
    login_status: string
 }
interface IProps { }

class Login extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
        this.state = {
            login_status : ""
        }
    }

    u_name = React.createRef<HTMLInputElement>()
    u_pwd = React.createRef<HTMLInputElement>()

    login = () => {
        if (this.u_name.current?.value === "admin" &&
            this.u_pwd.current?.value === "admin") {
            this.setState({
                login_status: "Success"
            })
        }else{
            this.setState({
                login_status: "Failed"
            })
        }
    }

    render() {
        return (
            <React.Fragment>
                <input type="text" placeholder="username" ref={this.u_name} /> <br />
                <input type="password" placeholder="password" ref={this.u_pwd} /> <br />

                <button onClick={this.login}>Login</button>

                <p>{this.state.login_status}</p>
            </React.Fragment>
        )
    }
}
export default Login
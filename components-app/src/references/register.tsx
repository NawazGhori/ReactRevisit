import React from "react";

interface RegisterState {
    register_status: string
}
interface RegisterProps { }

class Register extends React.Component<RegisterProps, RegisterState>{
    constructor(props: RegisterProps) {
        super(props)
        this.state = {
            register_status: ""
        }
    }

    f_name = React.createRef<HTMLInputElement>()
    l_name = React.createRef<HTMLInputElement>()
    email = React.createRef<HTMLInputElement>()
    ph_no = React.createRef<HTMLInputElement>()
    address = React.createRef<HTMLTextAreaElement>()
    gender = React.createRef<HTMLInputElement>()
    languages = React.createRef<HTMLInputElement>()
    country = React.createRef<HTMLSelectElement>()


    register = () => {
        // if (this.u_name.current?.value === "admin" &&
        //     this.u_pwd.current?.value === "admin") {
        //     this.setState({
        //         login_status: "Success"
        //     })
        // }else{
        //     this.setState({
        //         login_status: "Failed"
        //     })
        // }
        console.log(this.f_name.current?.value)
        console.log(this.l_name.current?.value)
        console.log(this.email.current?.value)
        console.log(this.ph_no.current?.value)
        console.log(this.address.current?.value)
        console.log(this.country.current?.value)
    }

    modifyLanguage = ()=>{
        
    }
    render() {
        return (
            <React.Fragment>
                <label>First Name : </label>
                <input type="text" placeholder="FirstName" ref={this.f_name} /> <br />

                <label>Last Name : </label>
                <input type="text" placeholder="LastName" ref={this.l_name} /> <br />

                <label>Email : </label>
                <input type="email" placeholder="Email" ref={this.email} /> <br />

                <label>Phone Number : </label>
                <input type="number" placeholder="PhoneNumber" ref={this.ph_no} /> <br />

                <label>Address : </label>
                <textarea placeholder="Address" ref={this.address} /> <br />

                <label>Gender : </label>
                <input type="radio" ref={this.gender} name="gender" value="male" />Male                
                <input type="radio" ref={this.gender} name="gender" value="female" />Female
                <br /> 

                <label>Languages: </label>

                <input type="checkbox" name="languages" onChange={this.modifyLanguage} value="English"/>English
                <input type="checkbox" name="languages" value="French"/>French
                <input type="checkbox" name="languages" value="Spanish"/>Spanish<br /> 
                <label>Country : </label>
                <select ref={this.country}>  
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="NewZealand">New Zealand</option>
                </select><br/>
                <button onClick={this.register}>Register</button>

                <p>{this.state.register_status}</p>
            </React.Fragment>
        )
    }
}
export default Register
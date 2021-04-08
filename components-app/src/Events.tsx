import React from "react";

interface IState{
    msg:string;
}

interface IProps{}

class Events extends React.Component<IProps,IState>{

    constructor(props:IProps){
        super(props);
        this.state = {
            msg: ""
        }
    }
    fun_one = ()=>{
        this.setState({
            msg: "Function without arguments"
        })
    }
    fun_two = (arg1:string,arg2:string)=>{
        if(arg1=="admin1" && arg2=="admin1"){
            this.setState({
                msg: "Login success"
            })
        }else{
            this.setState({
                msg: "Login failed"
            })
        }
       
    }
    render(){
        return(
        <React.Fragment>
            <h1>{this.state.msg}</h1>
            <button onClick={this.fun_one}>Button1</button>
            <button onClick={()=>this.fun_two('admin1','admin1')}>Button2</button>
        </React.Fragment>
        )
    }
}
export default Events;
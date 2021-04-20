import React, { Component } from "react";
import {History,LocationState} from "history";

interface IState{}
interface IProps{
    history:History<LocationState>
}

class Screen1 extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        
    }
    navigateToScreen2 = ()=>{
        this.props.history.push("/screen2/111/pant?qty=10")
    }
    render(){
        return(
            <React.Fragment>
                <button onClick={this.navigateToScreen2}>Screen2</button>
            </React.Fragment>
        )
    }
}

export default Screen1;
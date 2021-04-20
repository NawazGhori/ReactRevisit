import React from "react";
import react, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

interface IState{}
interface IProps{}

class MyApp extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        
    }
    
    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                    <Route path="/" component={Screen1} exact={true} strict></Route>
                    <Route path="/screen2/:p_id/:p_name" component={Screen2} exact={true} strict></Route>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default MyApp;
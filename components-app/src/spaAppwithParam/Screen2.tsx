import React from "react";
import react, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import {match} from "react-router-dom";
import {Location} from "history";

interface IState{}
interface IProps{
    match:match<routeParams>;
    location:Location;
}

interface routeParams{
    p_id:any;
};

class Screen2 extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        
    }
    
    render(){
        //console.log(this.props.location.search.split("=")[1])
        //const qty = this.props.location.search.split("=")[1]
        //console.log(this.props.location.search)
        const qty = this.props.location.search?Number(this.props.location.search.split("=")[1]):0
        return(
            <React.Fragment>
                <h1>p_id = {this.props.match.params.p_id}</h1>
                <h1>qty = {qty}</h1>
            </React.Fragment>
        )
    }
}

export default Screen2;
import React, { Component } from "react";

import * as QueryString from "query-string";

import {match} from "react-router-dom";
import {Location} from "history";

interface IState{}
interface IProps{
    match:match<routeParams>;
    location:Location;
}

interface routeParams{
    p_id:any;
    p_name:any;
};

class Screen2 extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        
    }
    
    render(){
        //console.log(this.props.location.search.split("=")[1])
        
        const qs =  QueryString.parse(this.props.location.search);
        console.log(qs)
        console.log(qs.qty)
        console.log(qs.size)

        //const qty = this.props.location.search.split("=")[1]
        // const qty = this.props.location.search?Number(this.props.location.search.split("=")[1]):0
        return(
            <React.Fragment>
                <h1>p_id = {this.props.match.params.p_id}</h1>
                <h1>p_name = {this.props.match.params.p_name}</h1>
                {/* <h1>qty = {qty}</h1> */}
                <h1>qty = {qs.qty}</h1>
                <h1>size = {qs.size}</h1>
            </React.Fragment>
        )
    }
}

export default Screen2;